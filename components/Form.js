import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Form(props) {
    console.log("props is ",props);
    const [author, setAuthor] = React.useState('');

  const handleChange = (event) => {
    setAuthor(event.target.value);
  };
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <TextField id="outlined-basic" label="book name" variant="outlined" />
          <TextField id="outlined-basic" label="genre" variant="outlined" />
          
        </CardContent>
        <CardActions>
          <Button size="small">ADD</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Form;
