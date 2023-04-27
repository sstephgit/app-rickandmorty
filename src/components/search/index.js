import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment } from "@mui/material";
import { useContext, useState } from "react";
import { getChartactersByName } from "../../api";
import { Context } from "../../context";

const Search = () => {
  const {setCharacters} = useContext(Context);
  const [value, setValue] = useState("");

  const handleSearch = () => {
    getChartactersByName(value)
      .then((characters) => {
        setCharacters(characters)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <TextField
        value={value}
        onChange={handleChange}
        className="search"
        id="outlined-basic"
        label="Busque un personaje"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton color="inherit" onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default Search;
