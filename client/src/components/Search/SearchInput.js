import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

const SearchInput = ({ searchData }) => {

  const [inputState,setInput] = React.useState("")


  React.useEffect(() => {
    setInput(inputState)
  }, [inputState])

  console.log(inputState);


  return (
    <Autocomplete
      id="highlights-demo"
      sx={{ width: 250 }}
      options={searchData}
      // onChange={()=>console.log(inputState)}
      getOptionLabel={(option) => option.qualityName}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Marble Categories"
          size="small"
          margin="normal"
          value={inputState}
          onChange={(e) => setInput(e.target.value)}
          color="warning"
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        />
      )}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option.qualityName, inputValue);
        const parts = parse(option.qualityName, matches);

        return (
          <li {...props}>
            <div>
              {parts.map((part, index) => (
                <span
                  onClick={()=>setInput(part.text)}
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
};

export default SearchInput;
