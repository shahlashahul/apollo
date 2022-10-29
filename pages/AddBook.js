import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Author from "../../server/models/Author";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import { GET_AUTHORS, ADDBOOK_MUTATIONS } from "../graphql/query";

function AddBook() {
  const [author, setAuthor] = useState();
  const [book, setBook] = useState({ name: "", genre: "", authorid: "" });

  const handleChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleBook = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  const [addBook] = useMutation(ADDBOOK_MUTATIONS);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("props is", e.target.name.value);
    addBook({
      variables: {
        book
      },
    });
  };

  const { loading, error, data } = useQuery(GET_AUTHORS);
 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>; //

  return (
    <Grid style={{ marginTop: "20px" }} container spacing={2}>
      <Grid item key={Author.id}>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="book name"
            variant="outlined"
            value={book.name}
            name="name"
            onChange={handleBook}
          />

          <TextField
            id="outlined-basic"
            label="genre"
            variant="outlined"
            name="genre"
            value={book.genre}
            onChange={handleBook}
          />
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                select the author
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue=""
                label="select the author"
                name="authorid"
                value={book.authorid}
                onChange={handleBook}
              >
                {data.authors.map((Author) => (
                  <MenuItem key={Author.id} value={Author.id}>
                    {Author.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Button type="submit">ADD</Button>
        </form>
      </Grid>
    </Grid>
  );
}
export default AddBook;
