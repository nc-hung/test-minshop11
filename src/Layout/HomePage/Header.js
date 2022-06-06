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
// import Style from "../../Assets/Sass/Layout/_homepage.scss"
import skincareproduct from "../../Assets/Image/HomePage/Image.svg"
import "../../Assets/Sass/Layout/_homepage.scss"

const Header = () => {
    return (
        <>
            <Box component={"div"} className='header-container' >
                <div className="skincare-products" >
                    <div className="skincare-products__text">
                    <p >
                        We Offer the Best Products for your Skin
                    </p>
                    </div>
                    <IconButton
                        sx={{ backgroundColor: "#00CC96", borderRadius: "10px" }}
                    >Shop Now</IconButton>
                </div>
                <div>
                    <img src={skincareproduct} alt="skincare-product"></img>
                </div>
            </Box>
        </>
    )
}



export default Header