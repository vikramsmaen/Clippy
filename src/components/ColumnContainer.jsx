"use client";
import { TrashIcon, PlusCircleIcon, PencilIcon } from "@heroicons/react/24/outline";
import ClipContainer from "./ClipContainer";

import { useState } from "react";

const ColumnContainer = (props) => {
  const { colTitle, colId } = props;

  return (
    <div>
      <div className=" flex flex-col  items-center justify-center  border-2  rounded-lg h-[80vh] min-w-[400px]">
        <div className="w-full p-2 border-b-2 flex items-center justify-between bg-primary-foreground">
          <h1 className=" text-lg">{colTitle}</h1>
          <button id="editColTitle" className="btn btn-circle btn-outline btn-sm ">
            <PencilIcon className="size-5 " />
          </button>
        </div>
        <div className="w-full h-full p-2 overflow-y-scroll">
          {/* {clips.map((item) => (
            <ClipContainer key={item.id} clipContent={item.clips.map((clip) => clip.text)} />
          ))} */}
        </div>
        <div className="w-full p-2 border-t-2 flex items-center gap-2">
          <button id="deleteClip" className="btn btn-circle btn-outline btn-sm ">
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
