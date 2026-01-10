import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const TextFieldZip = ({ zipCode, handleChange, fieldHeight, fs }) => {
  return (
    <TextField
      id="zip-code"
      required
      maxRows={1}
      type="number"
      variant="filled"
      style={{ width: 180, borderRadius: 3 }}
      placeholder="ZIP Code"
      InputProps={{
        endAdornment: zipCode.length === 5 ? (
          <InputAdornment position="end" style={{ position: 'absolute', right: 10 }}>
            <CheckCircleIcon color="success" />
          </InputAdornment>
        ) : null,
      }}
      sx={(theme) => ({
        "& .MuiInputBase-input": {
          textAlign: "center",
          height: fieldHeight ? fieldHeight : "40px",
          padding: "1px",
          fontFamily: "Poppins",
        },
        "& .MuiInputBase-input::placeholder": {
          fontSize: fs ? fs : "16px",
        },
        backgroundColor: "white",
        width: 180, // Default width

        // 🔥 Responsive styles for screens below 420px
        [theme.breakpoints.down(420)]: {
          width: "100% !important", // Enforced full width
          "& .MuiInputBase-input": {
            fontSize: "14px !important", // Enforced font size
            height: "35px !important", // Enforced height
          },
          "& .MuiInputBase-input::placeholder": {
            fontSize: "14px !important",
          },
        },
      })}
      slotProps={{ maxLength: 5 }}
      value={zipCode}
      onChange={handleChange}
    />
  );
};

export default TextFieldZip;
