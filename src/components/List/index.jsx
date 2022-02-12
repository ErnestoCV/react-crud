import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

import {Container, Paper, Box, Typography, Button, TableContainer, Table, TableHead,
    TableRow, TableCell, TableBody, Avatar, ButtonGroup} from "@mui/material";



import './styles.css'

export default function UserList(){

     const [users,setUsers] = useState([])

     const UsersGet = () => {
        fetch("https://www.mecallapi.com/api/users")
        .then(res => res.json())
        .then((result) => {
            setUsers(result)
          }
        )
     }

     useEffect(()=>{
         UsersGet()
     },[])

     return (
        <div className="root">
        <Container className="container" maxWidth="lg">    
          <Paper className="paper">
            <Box display="flex">
              <Box flexGrow={1}>
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                  USERS
                </Typography>
              </Box>
              <Box>
                <Link to="/create">
                  <Button variant="contained" color="primary">
                    CREATE
                  </Button>
                </Link>
              </Box>
            </Box>
            <TableContainer component={Paper}>
            <Table className="table" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="center">Avatar</TableCell>
                  <TableCell align="left">First</TableCell>
                  <TableCell align="left">Last</TableCell>
                  <TableCell align="left">Username</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.ID}>
                    <TableCell align="right">{user.id}</TableCell>
                    <TableCell align="center">
                      <Box display="flex" justifyContent="center">
                        <Avatar src={user.avatar} />
                      </Box>
                    </TableCell>
                    <TableCell align="left">{user.fname}</TableCell>
                    <TableCell align="left">{user.lname}</TableCell>
                    <TableCell align="left">{user.username}</TableCell>
                    <TableCell align="center">
                      <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <Button >Edit</Button>
                        <Button >Del</Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Paper>
        </Container>
      </div>
     )

}