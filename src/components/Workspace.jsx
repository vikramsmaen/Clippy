"use client";
import React, { useState } from "react";
import ColumnContainer from "./ColumnContainer";

import columnsData from "../data/columns";
import WorkToolbar from "./WorkToolbar";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

const Workspace = () => {
  const [columns, setColumns] = useState(columnsData);
  const [isKanban, setIsKanban] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState("");

  const getColumns = useQuery(api.functions.getColumns);
  const createColumn = useMutation(api.functions.createColumn);
  const deleteColumn = useMutation(api.functions.deleteColumn);
  const updateColumn = useMutation(api.functions.updateColumn);

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
      createColumn({ title: newColumnTitle });
      setNewColumnTitle("");
    }
  };

  const handleDeleteColumn = (colId) => {
    setColumns(getColumns.filter((column) => column._id !== colId));
    deleteColumn({ id: colId });
  };

  const handleUpdateColumnTitle = (colId, newTitle) => {
    updateColumn({ id: colId, title: newTitle });
  };

  const styles = [
    { isGrid: "grid grid-cols-3 gap-5 w-full p-10" },
    { isKanban: "grid overflow-x-scroll grid-flow-col gap-5 p-10" },
  ];

  return (
    <div className=" ">
      <WorkToolbar isKanban={handleIsKanban} />

      <div className={isKanban ? styles[1].isKanban : styles[0].isGrid}>
        {getColumns &&
          getColumns.map((item, index) => (
            <ColumnContainer
              key={index}
              colId={item._id}
              colTitle={item.title}
              onDelete={handleDeleteColumn}
              onUpdateTitle={handleUpdateColumnTitle}
            />
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
