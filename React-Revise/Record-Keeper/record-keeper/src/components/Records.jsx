import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./styles.css";
const Records = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
  };
  return (
    <div className="page">
      <div className="input-space">
        <Stack direction="row" spacing={2}>
          <TextField
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained" color="success">
            Add
          </Button>
        </Stack>
      </div>
      {data.map((element, index) => {
        return (
          <div key={index} className="records">
            <p>{element.name} </p>
            <p>{element.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Records;
