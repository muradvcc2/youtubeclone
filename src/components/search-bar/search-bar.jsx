import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { colors } from "../../constants/colors";
import { Paper, IconButton } from "@mui/material";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`);
      setValue("");
    }
  };

  return (
    <Paper
      component={"form"}
      onSubmit={submitHandler}
      sx={{
        pl: 2,
        borderRadius: 22,
        width: "830px",
        boxShadow: "none",
        mr: 50,
        border: "1px solid #EBEBEB",
      }}
    >
      <input
        type="text"
        placeholder="Search"
        className="search-bar"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px", color: colors.secondary }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
