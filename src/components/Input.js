import React from "react";
import TextField from "@mui/material/TextField";

const Input = ({ name, register, rules, errors, ...props }) => {
  return (
    <div className="mb-4 ml-4">
      <TextField
        {...props}
        inputRef={register(name, rules)}
        variant="outlined"
        InputProps={{
          style: {
            color: "white",
            textAlign: "center",
          },
        }}
        placeholder={props.placeholder}
        sx={{
          width: "130%",
          color: "white",
          height: "40px",
          marginBottom: "8px",
          borderRadius: "20px",
          backgroundColor: "#3B2E86",
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "transparent",
            },
        }}
      />

      {errors[name] && <p className="text-red-500">{errors[name].message}</p>}
    </div>
  );
};

export default Input;
