import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./Inputcomplete.css";
const Inputcomplete = ({ search, setSearch }) => {
  const options = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological Creature",
    "Animal",
    "Robot",
    "Cronenberg",
    "Disease",
    "unknown",
  ];
  return (
    <div>
      <Autocomplete
        disablePortal
        options={options}
        value={search}
        onInputChange={(event, newValue) => setSearch(newValue)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Species" />}
      />
    </div>
  );
};

export default Inputcomplete;
