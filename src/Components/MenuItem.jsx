import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MuiAlert from "@mui/material/Alert";

function MenuItem({ image, name, price }) {
  const [open, setOpen] = useState(false);

  const handleOder = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <button onClick={handleOder}>Place Order</button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xs" // smaller width
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "12px",
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#212121",
            color: "#fff",
          },
        }}
      >
        <DialogContent>
          <Typography variant="h6">
            ✅ You ordered: {name} <br />${price}
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{
              backgroundColor: "#E67514",
              "&:hover": { backgroundColor: "#d35400" },
              borderRadius: "20px",
              padding: "5px 20px",
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MenuItem;
