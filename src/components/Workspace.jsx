"use client";
import React, { useState } from "react";
import ColumnContainer from "./ColumnContainer";

import columnsData from "../data/columns";
import WorkToolbar from "./WorkToolbar";

const Workspace = () => {
  const [columns, setColumns] = useState(columnsData);
  const [isKanban, setIsKanban] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState("");

  const handleAddColumn = (title) => {
    const newColumn = {
      id: `column${columns.length + 1}`,
      title: title || `Column ${columns.length + 1}`,
      clips: [],
    };
    setColumns([...columns, newColumn]);
  };

  const handleIsKanban = (value) => {
    setIsKanban(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newColumnTitle.trim()) {
      handleAddColumn(newColumnTitle);
      setNewColumnTitle("");
    }
  };

  const styles = [
    { isGrid: "grid grid-cols-3 gap-5 w-full p-10" },
    { isKanban: "grid overflow-x-scroll grid-flow-col gap-5 p-10" },
  ];

  return (
    <div className=" ">
      <WorkToolbar isKanban={handleIsKanban} />

      <div className={isKanban ? styles[1].isKanban : styles[0].isGrid}>
        {columns.map((item) => (
          <ColumnContainer key={item.id} colId={item.id} colTitle={item.title} />
        ))}

        <form onSubmit={handleFormSubmit} className="flex ">
          <input
            type="text"
            className="input input-bordered w-full "
            value={newColumnTitle}
            onChange={(e) => setNewColumnTitle(e.target.value)}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Workspace;
