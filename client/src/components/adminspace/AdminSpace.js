import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteUser,
  getUsers,
  updateUser,
} from "../../js/actions/UsersActions";
import Loading from "../loading/Loading";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PersonRemoveAlt1Icon from "@mui/icons-material/PersonRemoveAlt1";
import { useMediaQuery } from "@mui/material";

const styles = {
  tableCell: {
    fontFamily: "Verdana",
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    width: "25%",

    "@media (max-width: 600px)": {
      width: "30%",
    },
    "@media (max-width: 400px)": {
      width: "40%",
    },
  },
  avatar: {
    width: "60px",
    height: "60px",
    border: "2px solid #fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  text: {
    textTransform: "uppercase",
    fontFamily: "Verdana",
  },
};

function AdminSpace() {
  const dispatch = useDispatch();
  const superAdmin = useSelector((state) => state.AuthReducer.superAdmin);
  const person = useSelector((state) => state.UsersReducer.usersList);
  const load = useSelector((state) => state.UsersReducer.load);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const setAdmin = (user) => {
    const updatedUser = {
      ...user,
      isAdmin: true,
    };
    dispatch(updateUser(user._id, updatedUser));
    window.location.reload();
  };

  const removeAdmin = (user) => {
    const updatedUser = {
      ...user,
      isAdmin: false,
    };
    dispatch(updateUser(user._id, updatedUser));
    window.location.reload();
  };

  const remove = async (_id) => {
    await dispatch(deleteUser(_id));
    window.location.reload();
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      {load ? (
        <Loading />
      ) : person && person.users && person.users.length > 0 ? (
        <TableContainer
          component={Paper}
          style={{ ...styles.table, transform: isSmallScreen ? "none" : null }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={styles.tableCell}>Avatar</TableCell>
                <TableCell style={styles.tableCell}>Name</TableCell>
                <TableCell style={styles.tableCell}>Role</TableCell>
                <TableCell style={styles.tableCell}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {person.users.map((el) => (
                <TableRow key={el._id}>
                  <TableCell>
                    <Avatar
                      src={el.image}
                      alt={el.name}
                      style={styles.avatar}
                    />
                  </TableCell>
                  <TableCell style={styles.tableCell}>{el.name}</TableCell>
                  {isSmallScreen && (
                    <>
                      <TableCell
                        style={{
                          display: "none",
                        }}
                        className="mobile-only"
                      >
                        {el.email}
                      </TableCell>
                      <TableCell
                        style={{
                          display: "none",
                        }}
                        className="mobile-only"
                      >
                        {el.phone}
                      </TableCell>
                    </>
                  )}
                  <TableCell>{el.isAdmin ? "Admin" : "User"}</TableCell>
                  <TableCell style={styles.tableCell}>
                    {(!el.isAdmin || superAdmin) && (
                      <Button
                        variant="contained"
                        color="error"
                        fullWidth
                        onClick={() => remove(el._id)}
                      >
                        Delete
                      </Button>
                    )}
                    {superAdmin && !el.isAdmin && (
                      <Button
                        variant="contained"
                        color="info"
                        fullWidth
                        onClick={() => setAdmin(el)}
                      >
                        <PersonAddAltIcon sx={{ marginRight: "10px" }} /> Admin
                      </Button>
                    )}
                    {superAdmin && el.isAdmin && (
                      <Button
                        variant="contained"
                        color="warning"
                        fullWidth
                        onClick={() => removeAdmin(el)}
                      >
                        <PersonRemoveAlt1Icon sx={{ marginRight: "10px" }} /> Admin
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="h5" align="center">
          No users to display.
        </Typography>
      )}
    </div>
  );
}

export default AdminSpace;
