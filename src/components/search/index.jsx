import React from "react";
import { Input } from "../input";
import { Button } from "../button";

export const Search = ({ action, name, setName, setPage }) => {
  const searchResults = (event) => {
    const { key } = event;

    if (key === "Enter") {
      setPage(1);
      action({
        page: 1,
        name,
      });
    }
  };

  return (
    <div className="search">
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        onKeyPress={searchResults}
        placeholder="Pesquisar.."
      />
      <Button
        onClick={() => {
          setPage(1);
          action({
            page: 1,
            name,
          });
        }}
      >
        Search
      </Button>
    </div>
  );
};
