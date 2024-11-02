import React from 'react'
import {Container,Grid,Card,Typography, } from '@mui/material';
export default function Notebar() {
    const cardstyle={padding:"20px",}
    const head={fontSize:"50px",fontFamily:"Poppins"}
  return (
    
    <div>
       <Container >
       <Typography variant="h1" gutterBottom style={head}>Notes</Typography>
          <Grid container spacing={4} marginTop="20px">
            <Grid item xs={12} sm={6} md={3}>
              <Card style={cardstyle} elevation={7}>
              <br></br>
       
        <Typography style={{fontFamily:"Poppins"}}> </Typography>
        </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card style={cardstyle} elevation={7}>
              <br></br>
       
        <Typography style={{fontFamily:"Poppins"}}> </Typography>
        </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card style={cardstyle} elevation={7}>
              <br></br>
       
        <Typography style={{fontFamily:"Poppins"}}> </Typography>
        </Card>
            </Grid>
            </Grid>
            <Grid container spacing={4} marginTop="20px">
            <Grid item xs={12} sm={6} md={3}>
              <Card style={cardstyle} elevation={7}>
              <br></br>
       
        <Typography style={{fontFamily:"Poppins"}}> </Typography>
        </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card style={cardstyle} elevation={7}>
              <br></br>
       
        <Typography style={{fontFamily:"Poppins"}}> </Typography>
        </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card style={cardstyle} elevation={7}>
              <br></br>
       
        <Typography style={{fontFamily:"Poppins"}}> </Typography>
        </Card>
            </Grid>
            </Grid>
            <Grid container spacing={4} marginTop="20px">
            <Grid item xs={12} sm={6} md={3}>
              <Card style={cardstyle} elevation={7}>
              <br></br>
       
        <Typography style={{fontFamily:"Poppins"}}> </Typography>
        </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card style={cardstyle} elevation={7}>
              <br></br>
       
        <Typography style={{fontFamily:"Poppins"}}> </Typography>
        </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card style={cardstyle} elevation={7}>
              <br></br>
       
        <Typography style={{fontFamily:"Poppins"}}> </Typography>
        </Card>
            </Grid>
            </Grid>
            </Container>
    </div>
  )
}
