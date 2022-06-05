import {
    // Grid,
    // styled,
    // alpha,
    // AppBar,
    // Toolbar,
    IconButton,
    // Typography,
    // InputBase,
    // Badge,
    // MenuItem,
    // Menu,
    Box,
} from "@mui/material";
import * as React from "react";
import Style from "../../Assets/Sass/Layout/_homepage.scss"
import skincareproduct from "../../Assets/Image/HomePage/Image.svg"


const Header = () => {
    const tesst = console.log( "aaaaaaaaaaaa");
    return (
        <>
            <Box component={"div"} className={Style['header-container']} sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <div className="skincare-products header " sx={
                        {
                            fontWeight: "700",
                            fontSize: "40px",
                            lineHeight: "56px",
                            color: "#1A202C",
                        }
                    }>
                    <p >
                        We Offer the Best Products for your Skin
                    </p>
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