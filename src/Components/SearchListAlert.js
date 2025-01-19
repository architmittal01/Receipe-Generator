import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
// import { Close } from "@mui/icons-material";

const SearchListAlert = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div style={{ display: "flex", alignItems: "center", margin: "100px 150px" }}>
          <Button variant="contained" color="primary">
            {" "}
            <Link
              to="/SearchList"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={handleClose}
            >
              Click here to select ingredients 
            </Link>
          </Button>
        </div>
      )}
    </>
  );
};

export default SearchListAlert;
