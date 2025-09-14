import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import styles from "./header.module.css";
import logo from "../../Assets/logo.png"
import { Link } from 'react-router-dom';

function Header() {


    const styleCart = {
        color: "white",
        width: "20.9px",
        height: "21.24px"

    }

    return (
      <div className={styles.header}>
        
          <div className={styles.logo}>
          <Link to={"/"}>
            <img className={styles.logo__icon} src={logo} alt="Smooth Buy" />
          </Link>
          </div>
          
          <nav className={styles.nav}>
              <ul className={styles.nav__list}>
                <Link to={"/"}>
                  <li className={styles.nav__item}>
                      Home
                  </li>
                  </Link>
                  <Link to={"#"}>
                  <li className={styles.nav__item}>
                      About
                  </li>
                  </Link>
                  
              </ul>
              
                  <button className={styles.dropdown__btn}>
                    <span className={styles.dropdown__btnName}>Categories</span>
                    <KeyboardArrowDownIcon />
                  </button>
              
              <div className={styles.cart}>
                <Link to={"/cart"}>
                <button className={styles.cart__btn}>
                    <ShoppingCartIcon style={styleCart}/>
                </button>
                </Link>
              </div>
  
  
          </nav>
          
      </div>
    )
  }
  
  export default Header