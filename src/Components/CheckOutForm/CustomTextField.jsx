import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";
const FormInput = ({name,label,required}) => {
  const { controll } = useFormContext();
  return (
    <Grid>
      <Controller
        as={TextField}
        controll={controll}
        fullWidth
        name={name}
        label={label}
        required={required}
      />
    </Grid>
  );
};

export default FormInput;
