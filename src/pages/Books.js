import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add';
import { Link as RouterLink } from "react-router-dom";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:4000/books");
                setBooks(res.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchAllBooks();
    }, [])
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    {books.map(book =>
                        <Grid key={book.id} lg={6} display="flex" justifyContent="center" alignItems="center">
                            <div>
                                {book.cover && <img src={book.cover} alt=""></img>}
                                <h2>{book.title}</h2>
                                <p>{book.desc}</p>
                                <span>{book.price}</span>
                            </div>
                        </Grid>
                    )}
                </Grid>
                <Grid xs display="flex" justifyContent="center" alignItems="center">
                    <Fab variant="extended" color="primary" aria-label="add" component={RouterLink} to="/add">
                        <AddIcon sx={{ mr: 1 }} />
                        Add Books
                    </Fab>
                </Grid>
            </Box>
        </div >
    );
};

export default Books;