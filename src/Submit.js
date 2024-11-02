import React, { useState } from 'react'
import {Grid,Card,TextField,Button, Container, CardHeader, CardContent, Typography } from '@mui/material'
export default function Submit() {
  const [showdata,setshowdata]=useState([])
  const[notes,setnotes]=useState("");
  React.useEffect(() => {
    fetch('http://localhost:8080/get')
    .then(responses=>responses.json())
    .then(data=>setshowdata(data));
  },[]);
  return (
    <Container>
      <Grid container spacing={4} justifyContent="center" marginTop="20px">

        <Grid item xs={12} sm={6} md={10}>
          <Card style={{padding:"20px"}}>
            <TextField
              id="filled-basic"
              label="Note"
              variant="outlined"
              color="secondary"
              multiline
              rows="4"
              fullWidth
              required
              sx={{ mb: 2, width: '100%' }} // Add margin bottom to TextField
              value={notes}
              onChange={(e) => setnotes(e.target.value)}
            />
            <Button type="submit" color="secondary" variant="contained" onClick={()=>{
              const output={notes};
fetch("http://localhost:8080/add",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify(output)
})

            }}>
              Submit
            </Button>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing="4" justifyContent='center' margin="20px">
        {showdata.map((note1)=>(
          <Grid item xs={12} sm={6} lg={3} xl={3} md={4}>
            <Card>
              <CardHeader
              title="Notes"
              />
              <br></br>
              <CardContent>
                <Typography>{note1.notes}</Typography>
              </CardContent>
            </Card>
            </Grid>
        ))}
     
</Grid>

    </Container>
  )
}
