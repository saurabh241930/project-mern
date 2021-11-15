import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

export default function SearchInput() {
  return (
    <Autocomplete
      id="highlights-demo"
      sx={{ width: 250 }}
      options={top100Films}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="filled"
          label="Search Marble Categories"
          size="small"
          margin="normal"
          color='warning'
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        />
      )}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option.title, inputValue);
        const parts = parse(option.title, matches);

        return (
          <li {...props}>
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          </li>
        );
      }}
    />
  );
}

const top100Films = [
  { title: "ROSATIKA", year: 1 },
  { title: "GRIGIO VENATO", year: 2 },
  { title: "BEIGE BENZ BROWN", year: 3 },
  { title: "TOBACCO CROSS CUT", year: 4 },
  { title: "ROSATIKA", year: 1 },
  { title: "GRIGIO", year: 2 },
  { title: "BEIGE BENZ", year: 3 },
  { title: "TOBACCO BROWN", year: 4 },
];
