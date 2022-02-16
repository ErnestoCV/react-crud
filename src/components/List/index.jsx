import {useNavigate } from "react-router-dom";

import {
  Container,
  Paper,
  Box,
  Typography,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  ButtonGroup,
} from "@mui/material";

import useSites from "../../hooks/useSites";
import Spinner from "../Spinner";
import "./styles.css";

export default function SitesList() {
  const { loading, sites } = useSites();

  const navigate = useNavigate();

  const UpdateSite = (id) => {
    navigate("/update/" + id);
  };

  const DeleteSite = (id) => {
    fetch(`http://localhost:8080/api/sites/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("OK");
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Container className="container" maxWidth="lg">
            <Paper className="paper">
              <Box display="flex">
                <Box flexGrow={1}>
                  <Typography
                    component="h2"
                    variant="h6"
                    color="primary"
                    gutterBottom
                  >
                    SITES
                  </Typography>
                </Box>
                <Box>
                  <Button href="/create" variant="contained" color="primary">
                    CREATE
                  </Button>
                </Box>
              </Box>
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
                    {sites.map((site) => (
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
        </>
      )}
    </>
  );
}
