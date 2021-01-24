import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/commerce.png";
import useStyles from "./styles";
const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <>
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
          >
            <img
              src={logo}
              alt="Commerce.JS"
              height="25px"
              className={classes.image}
            />
            Spice Me Up
          </Typography>

          <div className={classes.grow} />
          {location.pathname === "/" ? (
            <div className={classes.button}>
              <Link to="/cart">
                <IconButton aria-label="Show cart items" color="inherit">
                  <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </Link>
            </div>
          ) : (
            ""
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
