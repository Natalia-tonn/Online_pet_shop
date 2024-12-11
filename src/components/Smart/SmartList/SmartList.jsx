import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import ParameterControls from "./ParameterControls";

// "Чистая" функция, так как она не имеет побочных эффектов (не использует внешние переменные)
function sortAndFilterProducts(allProducts, searchParams) {
  let newProducts = [...allProducts];

  if (searchParams.get("min")) {
    newProducts = newProducts.filter(
      (product) => product.price >= Number(searchParams.get("min"))
    );
  }

  if (searchParams.get("max")) {
    newProducts = newProducts.filter(
      (product) => product.price <= Number(searchParams.get("max"))
    );
  }

  if (searchParams.get("discountOnly") === "1") {
    // ВНИМАНИЕ! Наш сервер не знает про скидки, код ниже нужно поменять
  }

  if (searchParams.get("sort")) {
    if (searchParams.get("sort") === "none") return newProducts;
    newProducts = newProducts.sort((a, b) => {
      if (searchParams.get("sort") === "asc") {
        return a.price - b.price;
      } else if (searchParams.get("sort") === "desc") {
        return b.price - a.price;
      } else if (searchParams.get("sort") === "newest") {
        // ВНИМАНИЕ! Наш сервер не знает про дату добавления, код ниже нужно поменять
        return 0;
      }
      return 0;
    });
  }

  return newProducts;
}

export default function SmartList() {
  const [allProducts, setAllProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  async function fetchProducts() {
    setIsLoading(true);
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setAllProducts(response.data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return sortAndFilterProducts(allProducts, searchParams);
  }, [allProducts, searchParams]);

  return (
    <div>
      <h1>Products</h1>
      <ParameterControls />

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <span style={{ fontWeight: "900" }}>{product.price}</span> -{" "}
            {product.title}
          </li>
        ))}
      </ul>

      <pre>
        {JSON.stringify(
          {
            allProducts,
            filteredProducts,
          },
          null,
          2
        )}
      </pre>
    </div>
  );
}
