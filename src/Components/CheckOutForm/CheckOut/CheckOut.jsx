import React, { useState, useEffect } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typographty,
  CircularProgress,
  Divider,
  Button,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import { commerce } from "../../../lib/commerce";
const steps = ["Shipping adress", "Payment details"];
const CheckOut = ({ cart }) => {
  const classes = useStyles();
  const [activeState, setActiveState] = useState(2);
  const [checkoutToken, setCheckoutToken] = useState(null);
  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
      } catch (error) {}
    };
    generateToken();
  }, [cart]);

  const Form = () =>
    activeState === 0 ? (
      <AddressForm checkoutToken={checkoutToken} />
    ) : (
      <PaymentForm />
    );

  const Confirmation = () => <div>Confir</div>;
  return (
    <div>
      <div className={classes.toolBar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeState} className={classes.stepper}>
            {steps.map((step) => {
              return (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeState === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </div>
  );
};

export default CheckOut;
