import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid2 } from '@mui/material';
import { useDispatch } from "react-redux";

import { getPosts } from './actions/posts';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import memories from './images/memories.png';
import useStyles from "./styles";

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getPosts());

    }, [dispatch]);

    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
               <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
               <img className={classes.image} src={memories} alt ="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid2 container justify= "space-between" alignItems="stretch" spacing={3}>
                        <Grid2 item xs={12} sm={7}>
                            <Posts />

                        </Grid2>
                        <Grid2 item xs={12} sm={4}>
                            <Form />

                        </Grid2>
                    </Grid2>
                </Container>
            </Grow>


            </Container>
    );
}

export default App;