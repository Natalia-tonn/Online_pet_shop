import React from "react";
import styles from "./HomePage.module.css"
import backgroundImg from '../../assets/images/main-bg.jpg';
import CategoriesBlock from "../../components/CategoriesBlock/CategoriesBlock";
import SaleBlock from "../../components/SaleBlock/SaleBlock"
import DiscountForm from "../../components/DiscountForm/DiscountForm";
import CheckOutButton from "../../components/Buttons/CheckOutButton/CheckOutButton";




function HomePage(){
    return(
        <div>
            <div className="mainBox">
                <div className={styles.contentStyle}>
                    <h1>Amazing Discount <br/> on Pets Products!</h1>
                    <CheckOutButton />
                </div>
            </div>
            <div className={styles.mainBgStyle} style={{ backgroundImage: `url(${backgroundImg})` }}></div>
            <CategoriesBlock/>
            <DiscountForm />
            <SaleBlock/>

        </div>
    )
}
export default HomePage