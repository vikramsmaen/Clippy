"use client";
import { TrashIcon, PlusCircleIcon, PencilIcon } from "@heroicons/react/24/outline";
import ClipContainer from "./ClipContainer";

import { useState } from "react";

const ColumnContainer = (props) => {
  const { colTitle, colId, onDelete } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(colTitle);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    setIsEditing(false);
    updateTitleOnServer(title);
  };

  const handleDeleteColumn =  () => {
    if (onDelete) {
      onDelete(colId);
    }
  };

  return (
    <div>
      <div className=" flex flex-col  items-center justify-center  border-2  rounded-lg h-[80vh] ">
        <div className="w-full gap-2 p-2 border-b-2 flex items-center justify-between bg-primary-foreground">
          {isEditing ? (
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              onBlur={handleTitleBlur}
              className="input input-bordered input-sm w-full"
              autoFocus
            />
          ) : (
            <h1 className=" text-lg">{title}</h1>
          )}
          <button
            id="editColTitle"
            className="btn btn-circle btn-outline btn-sm "
            onClick={handleEditClick}>
            <PencilIcon className="size-5 " />
          </button>
        </div>
        <div className="w-full h-full p-2 overflow-y-scroll">
          {/* {clips.map((item) => (
            <ClipContainer key={item.id} clipContent={item.clips.map((clip) => clip.text)} />
          ))} */}
        </div>
        <div className="w-full p-2 border-t-2 flex items-center gap-2">
          <button
            id="deleteColumn"
            className="btn btn-circle btn-outline btn-sm "
            onClick={handleDeleteColumn}>
            <TrashIcon className="size-5 " />
          </button>
          <button id="addClip" className="btn btn-circle btn-outline btn-sm ">
            <PlusCircleIcon className="size-7 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColumnContainer;
