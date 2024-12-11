import React from "react";
import { Link } from "react-router-dom";
import Four from "../../assets/icons/four.svg"
import styles from "./NotFoundPage.module.css"
import NotFound from "../../assets/images/not-found.png"




const NotFoundPage = () => {
    return (
      <div className="mainBox">
        <div className={styles.notFoundBox}>
          <div className={styles.imgBox}>
            <img src={Four} alt="404" className={styles.image} />
            <img src={NotFound} alt="404" className={styles.image} />
          <img src={Four} alt="404" className={styles.image} />

          </div>
          <div className={styles.contextContainer}>
            <h2 className={styles.title}>Page Not Found</h2>
            <p className={styles.message}>
            We’re sorry, the page you requested could not be found. <br/> Please go back to the homepage.

            </p>
          </div>
          <Link to="/" className={styles.homeButton}>Go Home</Link>

        </div>
      </div>
    );
  };
  
  export default NotFoundPage;