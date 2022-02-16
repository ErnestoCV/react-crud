import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Container, Typography, Grid, TextField, Button } from "@mui/material";

export default function UserUpdate() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/api/sites/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setName(result.name);
        setAddress(result.address);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: name,
      address: address
    };
    fetch(`http://localhost:8080/api/sites/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      if(response.ok){
        navigate('/')
      }else{
        console.log('Error')
      }
    })
    .catch((error) => console.log(error))
  };

  return (
    <Container maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          User
        </Typography>
        <form onSubmit={handleSubmit}>
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
                value={name}
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
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
          </Grid>
          <br />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Update
          </Button>
        </form>
      </div>
    </Container>
  );
}
