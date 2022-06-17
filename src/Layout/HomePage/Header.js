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
import { connect } from "react-redux";
// import Style from "../../Assets/Sass/Layout/_homepage.scss"
import skincareproduct from "../../Assets/Image/HomePage/Image.svg"
import "../../Assets/Sass/Layout/_homepage.scss"

const Header = (props) => {
    console.log("test xem sao ", props);
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
const mapStateToProps = (state) => {
   return {
    dataTest: state.products
   } 
}


export default connect(mapStateToProps)(Header)