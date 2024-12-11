// import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "./Header.module.css"
// import cartIcon from "../../assets/icons/cart.svg"

// import Logo from "../../assets/icons/logo.svg";

// export default function Header(){

//     // const cartItems = useSelector((state) => state.cart.items);
//     // const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//     const [menuOpen, setMenuOpen] = useState(false)


//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen)
//     }

//     return (
//         <div className={styles.Header}>
//             <div className="mainBox">
//                 <div className="styles.headerContent">
//                     <Link to ="/">
//                         <img src={Logo} alt="logo"/>
//                     </Link>
//                     <div
//             className={`${styles.burgerMenu} ${menuOpen ? styles.open : ''}`}
//             onClick={toggleMenu}
//           >

//             <nav>
//                 <ul>
//                     <li>
//                       <Link to="/" className={styles.headerLink}> Main Page </Link>
//                     </li>
//                     <li>
//                       <Link to="categories" className={styles.headerLink}> Categories </Link>
//                     </li>
//                     <li>
//                       <Link to="products"className={styles.headerLink} >All Products </Link>
//                     </li>
//                     <li>
//                       <Link to="/discounted-products" className={styles.headerLink}> All Sales </Link>
//                     </li>
                

//                 </ul>
//             </nav>
//             <Link to="/cart" className={styles.cartLink}>
//             <img src={cartIcon} alt="Cart" />
//             {/* {cartItemsCount > 0 && (
//               <span className={styles.cartBadge}>{cartItemsCount}</span> 
//             )} */}
//           </Link>


//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }



import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import cartIcon from "../../assets/icons/cart.svg";
import { useSelector } from 'react-redux';

import Logo from "../../assets/icons/logo.svg";

export default function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

 

  return (
    <div className={styles.Header}>
      <div className="mainBox">
        <div className={styles.headerContent}>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          
          <nav className={styles.navBlock}>
            <ul>
              <li>
                <Link to="/" className={styles.headerLink}>Main Page</Link>
              </li>
              <li>
                <Link to="categories" className={styles.headerLink}>Categories</Link>
              </li>
              <li>
                <Link to="products" className={styles.headerLink}>All Products</Link>
              </li>
              <li>
                <Link to="/discounted-products" className={styles.headerLink}>All Sales</Link>
              </li>
            </ul>
          </nav>
          <Link to="/cart" className={styles.cartLink}>
            <img src={cartIcon} alt="Cart" />
            {cartItemsCount > 0 && (
              <span className={styles.cartBadge}>{cartItemsCount}</span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}


