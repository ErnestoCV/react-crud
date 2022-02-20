import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { deleteSite } from "../../services/siteServices"

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

import "./styles.css"

export default function ListOfSites({ sites }) {
  const navigate = useNavigate()
  const [currentSites, setCurrentSites] = useState(sites)

  const UpdateSite = (id) => {
    navigate("/updateSite/" + id)
  }

  const DeleteSite = (id) => {
    deleteSite({ id })
      .then(() => {
        setCurrentSites(currentSites.filter((site) => site.id !== id))
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      {currentSites.length === 0 ? (
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
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Address</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentSites.map((site) => (
                    <TableRow key={site.id}>
                      <TableCell align="right">{site.id}</TableCell>
                      <TableCell align="center">
                        <Box display="flex" justifyContent="center">
                          <Avatar />
                        </Box>
                      </TableCell>
                      <TableCell align="left">{site.name}</TableCell>
                      <TableCell align="left">{site.address}</TableCell>
                      <TableCell align="center">
                        <ButtonGroup
                          color="primary"
                          aria-label="outlined primary button group"
                        >
                          <Button onClick={() => UpdateSite(site.id)}>
                            Edit
                          </Button>
                          <Button onClick={() => DeleteSite(site.id)}>
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
