import React from 'react'
import styles from "./listing.module.css"
import Gridimage from '../../components/Gridimage/Gridimage'
import Search from '../../components/Search/Search'
import Category from '../../components/Category/Category'
import Carousel from '../../components/Carousel/Carousel'
import Popular from "../../components/Popular/Popular";
import Recently from '../../components/Recently/Recently'


function Listing() {
  return (
    <div className={styles.listing}>
        <div className={styles.listing__top}>
          <Gridimage />
          <Search />
          <Category />
          <Popular />
          <Carousel />
          <Recently />
        </div>
    </div>
  )
}

export default Listing