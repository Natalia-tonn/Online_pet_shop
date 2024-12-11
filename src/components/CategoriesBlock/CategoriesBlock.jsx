// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import styles from "./CategoriesBlock.module.css"

// const CategoriesBlock = () => {
//     const[categories, setCategories] = useState ([])

//     useEffect(() => {
//         const fetchCategories = async () => {
//             try{
//                 const response = await axios. get ('https://pet-shop-backend.slavab.kz/products/all' )
//                 setCategories(response.data)
//             } catch (error) {
//                 console.error("Error fetching categories:", error)
//             }
//         }
//         fetchCategories()
//     },[])
//     return(
//         <div className="mainBox">
//          <div className={styles.categoriesBlock}>

// <div className="titleBlock">
//   <h2>Categories</h2>
//   <div className="titleBlockLine"></div>
//   <Link to="/categories" className="titleBlockButton">
//     All categories
//   </Link>
// </div>

// <ul className={styles.gridCategoriesContainer}>
//   {categories.slice(0, 4).map((category) => (
//     <li key={category.id} className={styles.gridCategoriesItem}>
//       <Link to={`/categories/${category.id}`} className={styles.categoryItem}>
//         <img src={`https://pet-shop-backend.slavab.kz/${category.image}`} alt={category.title} className={styles.categoryImage} />
//         <h3 className={styles.categoryName}>
//           {category.title}
//         </h3>
//       </Link>
//     </li>
//   ))}
// </ul>

// </div>
// </div>
// );
// };

// export default CategoriesBlock;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./CategoriesBlock.module.css";

const CategoriesBlock = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://pet-shop-backend.slavab.kz/categories/all');
        if (response.status === 200) {
          setCategories(response.data || []);
        } else {
          setError("Failed to fetch categories.");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("An error occurred while fetching categories.");
      }
    };
    fetchCategories();
  }, []);

  if (error) {
    return (
      <div className="mainBox">
        <div className={styles.errorMessage}>{error}</div>
      </div>
    );
  }

  return (
    <div className="mainBox">
      <div className={styles.categoriesBlock}>
        <div className="titleBlock">
          <h2>Categories</h2>
          <div className="titleBlockLine"></div>
          <Link to="/categories" className="titleBlockButton">
            All categories
          </Link>
        </div>

        <ul className={styles.gridCategoriesContainer}>
          {categories.slice(0, 4).map((category) => (
            <li key={category.id} className={styles.gridCategoriesItem}>
              <Link to={`/categories/${category.id}`} className={styles.categoryItem}>
                <img
                  src={`https://pet-shop-backend.slavab.kz/${category.image}`}
                  alt={category.newTitle || category.title || "Unnamed Category"}
                  className={styles.categoryImage}
                />
                <h3 className={styles.categoryName}>
                  {category.newTitle || category.title || "Unnamed Category"}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesBlock;

