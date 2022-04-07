import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useSelector, useDispatch } from 'react-redux';
import { Add } from './actions'
import App2 from './App2'
import { Button } from '@mui/material';
import AddDialog from './AddDialog';
export default function App() {
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    const [data, setData] = React.useState({ first_name: '', last_name: "" });
    const [open, setOpen] = React.useState(false);

    const changeHandler = (event) => {
        let { name, value } = event.target;
        setData({ ...data, [name]: value });
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (action) => {
        if (action) {
            dispatch(Add(data));
        }
        setOpen(false);
    };

    return (
        <>
            <AddDialog data={data} open={open} handleClose={handleClose} changeHandler={changeHandler} />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item alignContent="center" lg={6} md={6}>
                        <Button onClick={handleClickOpen}><AddCircleIcon fontSize="large" /></Button>
                    </Grid>
                    <Grid lg={6} md={6} item spacing={2} style={{ marginTop: 20 }}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">First Name&nbsp;(g)</TableCell>
                                        <TableCell align="center">Last Name&nbsp;(g)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {state.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="center">{row.first_name}</TableCell>
                                            <TableCell align="center">{row.last_name}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Box>
        </>

    )
}
