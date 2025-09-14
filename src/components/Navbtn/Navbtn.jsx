import React from 'react'
import styles from "./navbtn.module.css"
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

function Navbtn(props) {
  return (
    <div className={styles.navbtn}>
            <div className={styles.navbtn__container}>
                <p className={styles.navbtn__title}> {props.title}</p>
                <div className={styles.navbtn__btn}>
                    <button className={styles.navbtn__left}>
                        <ArrowBackOutlinedIcon />
                    </button>
                    <button className={styles.navbtn__right}>
                        <ArrowForwardOutlinedIcon />
                    </button>
                </div>
            </div>
    </div>
  )
}

export default Navbtn