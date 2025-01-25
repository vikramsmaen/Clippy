"use client";
import { TrashIcon } from "@heroicons/react/24/outline";
import ClipContainer from "./ClipContainer";
import columnsData from "../data/columns";
import { useState } from "react";

const ColumnContainer = (props) => {
  const { colTitle, colId } = props;
  const [clips, setClips] = useState(columnsData.filter((col) => col.id === colId));
  

  return (
    <div>
      <div className=" flex flex-col  items-center justify-center  border-2  rounded-lg h-[80vh]">
        <div className="w-full p-2 border-b-2 flex items-center justify-between bg-primary-foreground">
          <h1 className=" text-lg">{colTitle}</h1>
        </div>
        <div className="w-full h-full p-2 overflow-y-scroll">
          {clips.map((item) => (
            <ClipContainer key={item.id} clipContent={item.clips.map((clip) => clip.text)} />
          ))}
        </div>
        <div className="w-full p-2 border-t-2">
          <button className="btn btn-circle btn-outline btn-sm ">
            <TrashIcon className="size-4 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColumnContainer;
