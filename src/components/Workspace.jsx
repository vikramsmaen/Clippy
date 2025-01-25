"use client";
import React, { useState } from "react";
import ColumnContainer from "./ColumnContainer";

import columnsData from "../data/columns";

const Workspace = () => {
  const [columns, setColumns] = useState(columnsData);

  const handleAddColumn = () => {
    const newColumn = {
      id: `column${columns.length + 1}`,
      title: `Column ${columns.length + 1}`,
      clips: [],
    };
    setColumns([...columns, newColumn]);
  };

  return (
    <div className="flex">
      <div className="grid grid-cols-3 gap-5 w-full p-10">
        {columns.map((item) => (
          <ColumnContainer key={item.id} colId={item.id} colTitle={item.title} />
        ))}

        <button className="btn btn-primary" onClick={handleAddColumn}>
          +
        </button>
      </div>
    </div>
  );
};

export default Workspace;
