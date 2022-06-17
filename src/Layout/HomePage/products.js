import {
  IconButton,
  Box,
} from "@mui/material";
import * as React from "react";
import "../../Assets/Sass/Layout/_homepage.scss"
import { connect } from "react-redux";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { CardMedia } from "@mui/material";

const Products = (props) => {
  const list = props.kakaData;
  console.log("test_______", list);
  return (
    <>
      <Box component={"div"} className='products' >
        <div className="products__title">
          <p>Explore our Products</p>
        </div>
        <div className="products__container">
          <div className="products__item">
            <div className="products__item__img">
            </div>
            <div className="products__item__detail">
              {list && list.length > 0 && list.map((item, index) => {
                return (
                  <>
                    <CardContent>
                      <CardMedia
                        component="img"
                        image={item.img}
                        alt={item.name}
                        sx={{ borderRadius: 10 }}
                      />
                      {item.name}
                      <Typography variant="body2" color="text.secondary" sx={{ marginTop:2, overflow: "auto", maxHeight: 150 }}>
                        Loại: {item.category}
                      Mô tả: {item.desc}
                      </Typography>
                    </CardContent>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </Box>
    </>

  )
}
const mapStateToProps = (state) => {
  return {
    kakaData: state.products
  }
}
const mapDispatchToProps = (dispatch) => {
  return (
    <>hello{ }</>
  )
}
export default connect(mapStateToProps)(Products);