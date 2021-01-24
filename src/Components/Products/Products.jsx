import React from "react";
import { Grid } from "@material-ui/core/";
import Product from "../Product/Product";
import useStyles from './styles'

const Products = ({products,onAddToCart}) => {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <div classes={classes.toolbar}/>
      <Grid container justify="center" spacing={4}>
        {products.map((item, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Product product={item} onAddToCart={onAddToCart} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
