import React from "react";
import { Container, AppBar, Typography, Grow, Grid, Grid2 } from '@mui/material';

import memories from './images/memories.png';

const App = () => {
    return (
        <Container maxwidth="lg">
            <AppBar position="static" color="inherit">
               <Typography variant="h2" align="center">Memories</Typography>
               <img src={memories} alt ="memories" height="60" />
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