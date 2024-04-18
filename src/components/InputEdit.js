import React from "react";
import TextField from "@mui/material/TextField";

const InputEdit = ({ name, register, rules, errors, ...props }) => {
  return (
    <div className="mb-4 ml-4">
      <TextField
        {...props}
        inputRef={register(name, rules)}
        variant="outlined"
        InputProps={{
          style: {
            color: "black-900",
            textAlign: "center",
            
          },
        }}
        placeholder={props.placeholder}
        textAlign="center"
        sx={{
          width: "280px",
          color: "black-900",
          height: "40px",
          marginBottom: "8px",
          borderRadius: "20px",
          backgroundColor: "#F9F9F9",
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

export default InputEdit;
