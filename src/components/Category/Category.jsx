import React from "react";
import styles from "./category.module.css";
import Navbtn from "../Navbtn/Navbtn";

function Category() {
    return (
        <div className={styles.category}>
            <Navbtn title="Browse by Category" />
            <div className={styles.category__container}>
                <div className={styles.category__card}>
                    <div className={styles.category__box}>
                        <span className={styles.category__name}>All</span>
                    </div>
                </div>
                <div className={styles.category__card}>
                    <div className={styles.category__box}>
                        <span className={styles.category__name}>Vegetable</span>
                    </div>
                </div>
                <div className={styles.category__card}>
                    <div className={styles.category__box}>
                        <span className={styles.category__name}>Vegetable</span>
                    </div>
                </div>
                <div className={styles.category__card}>
                    <div className={styles.category__box}>
                        <span className={styles.category__name}>Pastery</span>
                    </div>
                </div>
                <div className={styles.category__card}>
                    <div className={styles.category__box}>
                        <span className={styles.category__name}>All</span>
                    </div>
                </div>
                <div className={styles.category__card}>
                    <div className={styles.category__box}>
                        <span className={styles.category__name}>All</span>
                    </div>
                </div>
                <div className={styles.category__card}>
                    <div className={styles.category__box}>
                        <span className={styles.category__name}>All</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
