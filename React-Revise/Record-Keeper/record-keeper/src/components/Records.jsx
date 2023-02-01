import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import "./styles.css";
const Records = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
  };

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index,1)
    setData([...arr])
  }
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
      <div className="data">
        <h2>Name</h2>
        <h2>Email</h2>
        <h2>Remove</h2>
      </div>
      {data.map((element, index) => {
        return (
          <div key={index} className="records">
            <p>{element.name} </p>
            <p>{element.email}</p>
            <DeleteIcon onClick={()=> removeItem(index)} />
          </div>
        );
      })}
    </div>
  );
};

export default Records;
