import { useState } from "react";
import {useNavigate} from 'react-router-dom'

import { Container, Typography, Grid, TextField, Button } from "@mui/material";

import "./styles.css";

export default function UserCreate() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    const siteToInsert = {
      name: name,
      address: address,
    };

    fetch("http://localhost:8080/api/sites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(siteToInsert),
    })
      .then((response) => {
        if(response.ok){
          navigate('/')
        }else{
          console.log('Error')
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container maxWidth="xs">
      <div className="paper">
        <Typography component="h1" variant="h5">
          Create Site
        </Typography>
        <form className="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
          </Grid>
          <br />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Create
          </Button>
        </form>
      </div>
    </Container>
  );
}
