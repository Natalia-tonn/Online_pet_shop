import React from "react";
import { useSearchParams } from "react-router-dom";

export default function ParameterControls() {
  const [searchParams, setSearchParams] = useSearchParams();

  const minPrice = searchParams.get("min") ?? "";
  const maxPrice = searchParams.get("max") ?? "";
  const discountOnly = searchParams.get("discountOnly") === "1" ? true : false;
  const sortType = searchParams.get("sort") ?? "";

  function handleParamChange(param, newValue) {
    const newSP = new URLSearchParams(searchParams);
    if (param === "discountOnly") {
      if (newValue) {
        newSP.set("discountOnly", "1");
      } else {
        newSP.delete("discountOnly");
      }
    } else {
      newSP.set(param, newValue);
    }
    setSearchParams(newSP);
  }

  return (
    <div>
      <label>
        Min
        <input
          type="number"
          value={minPrice}
          onChange={(e) => {
            handleParamChange("min", e.target.value);
          }}
        />
      </label>

      <label>
        Max
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => {
            handleParamChange("max", e.target.value);
          }}
        />
      </label>

      <label>
        Discount Only
        <input
          type="checkbox"
          checked={Boolean(discountOnly)}
          onChange={(e) => {
            handleParamChange("discountOnly", e.target.checked);
          }}
        />
      </label>

      <label>
        <select
          onChange={(e) => {
            handleParamChange("sort", e.target.value);
          }}
          value={sortType}
        >
          <option value="none">by default</option>
          <option value="newest">newest</option>
          <option value="desc">price: high-low</option>
          <option value="asc">price: low-high</option>
        </select>
      </label>
    </div>
  );
}
