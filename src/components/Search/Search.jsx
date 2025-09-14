import React from "react";
import styles from "./search.module.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

function Search() {

    const stylecamera ={
        color: "#979C92",
        position: "absolute",
        top: "20px",
        right: "35px"
    }


  return (
    <div className={styles.search}>
      <form action="#" className={styles.searchform}>
        
       
        <select className={styles.form__category} name="Filter by">
          <option value="Category">Filter by</option>
          <option value="Category">Category</option>
          <option value="Category">Category</option>
          <option value="Category">Category</option>
          
        </select>
        <input
            
          type="text"
          className={styles.search__input}
          placeholder="Search"
        />
        <CameraAltOutlinedIcon style={stylecamera}/>
        <button className={styles.search__submit}><SearchOutlinedIcon /></button>
      </form>
    </div>
  );
}

export default Search;
