import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';
import styles from "./footer.module.css";
import { Link } from 'react-router-dom';


function Footer() {

    const styleCart = {
        color: "white",
        width: "20.9px",
        height: "21.24px"

    }

    const appstore = {
        width: "32px",
        height: "32px",
        
    }

    const socialLinks = {
        width: "26.67px",
        height: "26.67px",
    }




    return (
        <div className={styles.footer}>

            <nav className={styles.foo__top}>
                <ul className={styles.foo__list}>
                    <Link to={"/"}>
                    <li className={styles.foo__item}>
                        Home
                    </li>
                    </Link>
                    <Link to={"#"}>
                    <li className={styles.foo__item}>
                        About
                    </li>
                    </Link>
                     <Link to={"#"}>
                    <li className={styles.foo__item}>
                        Blog
                    </li>
                    </Link>
                    <Link to={"#"}>
                    <li className={styles.foo__item}>
                       Categories
                    </li>
                    </Link>
                </ul>

                <div className={styles.foo__link}>
                    <a className={styles.foo__link__apple}>
                    <AppleIcon style={appstore}/>
                    <div className={styles.apple__flex}>
                    <span className={styles.apple__text__top}>Download on</span>
                    <span className={styles.apple__text__bottom}>Apple Store</span>
                    </div>
                    </a>
                    <a className={styles.foo__link__google}>
                        
                        <ShopIcon style={appstore}/>
                        <div className={styles.google__flex}>
                    <span className={styles.google__text__top}>Download on</span>
                    <span className={styles.google__text__bottom}>Google Store</span>
                    </div>
                    </a>
                </div>

            </nav>

            <nav className={styles.foo__bottom}>
                <footer className={styles.foo__footer}>
                    
                    <CopyrightRoundedIcon />
                    
                    <span className={styles.copyright__text}>
                    Lorem ipsum dolor sit amet
                    </span>
                 
                </footer>
                <ul className={styles.foo__icons}>
                    <li className={styles.foo__icons__list}>
                        <a href="#">
                        <LinkedInIcon />
                        </a>
                    </li>
                    <li className={styles.foo__icons__list}>
                        <a href="#">
                        <InstagramIcon />
                        </a>
                    </li>
                    <li className={styles.foo__icons__list}>
                        <a href="#">
                        <FacebookRoundedIcon styles={socialLinks} />                                                    
                        </a>
                    </li>
                </ul>

            </nav>

        </div>
    )
}

export default Footer