import { Container,Grid,Card,CardHeader, CardContent, Typography, IconButton,Fab,Box} from '@mui/material';
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
export default function Dnote() {
  const navigate=useNavigate();
  const [showdata,setshowdata]=useState([])
  React.useEffect(() =>{
    fetch('http://localhost:8080/getnote')
    .then(responses=>responses.json())
    .then(data=>setshowdata(data));
  },[]);
const handleDelete=(id)=>{
  fetch(`http://localhost:8080/delete/${id}`,{
  method:'DELETE',
  headers:{
    'Content-Type':'application/json'
  },

  })
  .then(()=>{
    window.location.reload();
  })
}
  return (
    <div>
  <Card style={{display:"flex",background:"purple",padding:"20px"}}>  
          <Typography variant='h3' style={{color:"white"}}>Notes App</Typography>
          <Box style={{marginLeft:"20px"}}> <Fab color="secondary" aria-label="add" onClick={()=>{navigate("/create")}}>
                  
  <AddIcon />
</Fab>
          </Box>
 
        </Card>
   
    <Container>
    <Grid container spacing="4" justifyContent="left" marginTop="20px">
    {showdata.map((noty)=>(
      <Grid item xs={12} sm={6} lg={3} xl={3} md={4}>
       
      
        <Card>
          <CardHeader
            title="Sticky Notes"
            action={<IconButton onClick={()=>handleDelete(noty.id)}><DeleteIcon/></IconButton>}
            />
    <br></br>
    <CardContent>
      
      <Typography>{noty.notes}</Typography>
    </CardContent>
            </Card>
        </Grid>
      
    ))}
    </Grid>
    </Container>
    </div>
  )
}
