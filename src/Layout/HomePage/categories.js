import {
    // Grid,
    // styled,
    // alpha,
    // AppBar,
    // Toolbar,
    // Typography,
    // InputBase,
    // Badge,
    // MenuItem,
    // Menu,
    IconButton,
    Box,
} from "@mui/material";
import * as React from "react";
import "../../Assets/Sass/Layout/_homepage.scss"
import CategoryCard from "../../Assets/Image/HomePage/Categories/Category-card.svg"
import CategoryCard1 from "../../Assets/Image/HomePage/Categories/Category-card-1.svg"
import CategoryCard2 from "../../Assets/Image/HomePage/Categories/Category-card-2.svg"
import CategoryCard3 from "../../Assets/Image/HomePage/Categories/Category-card-3.svg"
import CategoryCard4 from "../../Assets/Image/HomePage/Categories/Category-card-4.svg"
import CategoryCard5 from "../../Assets/Image/HomePage/Categories/Category-card-5.svg"
import CategoryCard6 from "../../Assets/Image/HomePage/Categories/Category-card-6.svg"
import CategoryCard7 from "../../Assets/Image/HomePage/Categories/Category-card-7.svg"

const Categories = () => {
    return (
        <>
            <Box component={"div"} className='categories' >
                <div className="categories__title">
                    <p>
                        Browse by Category
                    </p>
                </div>
                <div className="categories__menu">

                    <div className="categories__item">
                        <img src={CategoryCard} alt="sun-care"></img>
                    </div>
                    <div className="categories__item">
                        <img src={CategoryCard1} alt="sun-care"></img>
                    </div>
                    <div className="categories__item">
                        <img src={CategoryCard2} alt="sun-care"></img>
                    </div>
                    <div className="categories__item">
                        <img src={CategoryCard3} alt="sun-care"></img>
                    </div>
                    <div className="categories__item">
                        <img src={CategoryCard4} alt="sun-care"></img>
                    </div>
                    <div className="categories__item">
                        <img src={CategoryCard5} alt="sun-care"></img>
                    </div>
                    <div className="categories__item">
                        <img src={CategoryCard6} alt="sun-care"></img>
                    </div>
                    <div className="categories__item">
                        <img src={CategoryCard7} alt="sun-care"></img>
                    </div>

                </div>

            </Box>
        </>
    )
}



export default Categories