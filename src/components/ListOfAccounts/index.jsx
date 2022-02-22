import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import {
  Container,
  Paper,
  Box,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  ButtonGroup,
} from "@mui/material"
import { deleteAccount } from "../../services/accountService"

export default function ListOfAccounts({ idSite, site: { accounts } }) {
  const navigate = useNavigate()
  const [currentAccounts, setCurrentAccounts] = useState(accounts)

  const handleUpdateAccountClick = (id) => {
    navigate(`/updateAccount/${id}`)
  }

  const handleDeleteAccountClick = (idAccount) => {
    deleteAccount({ idSite, idAccount })
      .then(() => {
        setCurrentAccounts(
          currentAccounts.filter((account) => account.id !== idAccount)
        )
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      {currentAccounts === undefined || currentAccounts.length === 0 ? (
        <h1>Nothing to show</h1>
      ) : (
        <Container className="container" maxWidth="lg">
          <Paper className="paper">
            <TableContainer component={Paper}>
              <Table className="table" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">ID</TableCell>
                    <TableCell align="center">Avatar</TableCell>
                    <TableCell align="left">User</TableCell>
                    <TableCell align="left">Password</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentAccounts.map((account) => (
                    <TableRow key={account.id}>
                      <TableCell align="right">{account.id}</TableCell>
                      <TableCell align="center">
                        <Box display="flex" justifyContent="center">
                          <Avatar />
                        </Box>
                      </TableCell>
                      <TableCell align="left">{account.user}</TableCell>
                      <TableCell align="left">{account.password}</TableCell>
                      <TableCell align="center">
                        <ButtonGroup
                          color="primary"
                          aria-label="outlined primary button group"
                        >
                          <Button
                            onClick={() => handleUpdateAccountClick(account.id)}
                          >
                            Edit
                          </Button>
                          <Button
                            onClick={() => handleDeleteAccountClick(account.id)}
                          >
                            Del
                          </Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Container>
      )}
    </>
  )
}
