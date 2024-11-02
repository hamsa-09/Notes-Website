import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' }, // Set width to '100%'
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="filled-basic"
        label="Note Title"
        variant="outlined"
        color='secondary'
        required
      />
    </Box>
  );
}
