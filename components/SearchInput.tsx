//updated GPT 4-o
import React from "react";
import { Input } from "./ui/input";

const SearchInput = () => {
  return (
    <span>
      <Input
        type="text"
        placeholder="Search"
        className="bg-gray-100 w-80 rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500"
      />
    </span>
  );
};

export default SearchInput;
