import React, { useState } from 'react'
import { Container,Card,Grid,TextField,Button,CardHeader, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';
export default function () {
  const navigate = useNavigate();
  const handle=()=>{
    const op={notes};
    fetch("http://localhost:8080/adddata",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify(op)
})
navigate("/");
}

    const[notes,setnotes]=useState("");
  return (
    <div >
<Container>
    <Grid container spacing={4} justifyContent="center" marginTop="20px">
      <Grid item xs={12} sm={6} md={10}>
        <Card style={{padding:"20px"}}>
          
          <Typography variant='h4' justifyContent="center" textAlign="center" >Create Notes</Typography>
          <TextField
            id="filled-basic"
            label="Notes"
            variant="outlined"
            color='secondary'
            multiline
            rows="4"
            fullWidth
            required
            sx={{mb:2}}
            value={notes}   
            onChange={(e)=>setnotes(e.target.value)}
          />
          
         <Button type="submit" color="secondary" variant="contained" style={{justifyContent:"center", textAlign:"center"}} onClick={handle} endIcon={<SendIcon/>}>Submit</Button>
        
          </Card>
        </Grid></Grid>
</Container>
    </div>
  )

}
