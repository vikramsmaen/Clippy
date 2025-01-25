"use client";
import React from "react";

const ClipContainer = ({ clipContent = [] }) => {
  return (
    <div>
      {clipContent.map((item, index) => (
        <div
          key={index}
          className="w-full p-2 mb-2 border-2 flex items-center justify-between bg-primary-foreground">
          <h1 className=" ">{item}</h1>
        </div>
      ))}
    </div>
  );
};

export default ClipContainer;
