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

const Products = () => {
    return (
        <>
            <Box component={"div"} className='products' >
                <div className="products__title">
                    <p>Explore our Products</p>
                </div>
                <div className="products__container">
                    <div className="products__item">
                    <div className="products__item__img">
                        <img></img>
                    </div>
                    <div className="products__item__detail">
                        <p>Teen SP</p>
                        <p>tag color</p>
                        <p>Price</p>
                    </div>

                    </div>
                    <div className="products__item">
                        aaaaaaaaaaa
                    </div>
                    <div className="products__item">
                        aaaaaaaaaaa
                    </div>
                    <div className="products__item">
                        aaaaaaaaaaa
                    </div>
                    <div className="products__item">
                        aaaaaaaaaaa
                    </div>
                    <div className="products__item">
                        aaaaaaaaaaa
                    </div>
                    <div className="products__item">
                        aaaaaaaaaaa
                    </div>
                    <div className="products__item">
                        aaaaaaaaaaa
                    </div>
                </div>
            </Box>
        </>
    )
}



export default Products