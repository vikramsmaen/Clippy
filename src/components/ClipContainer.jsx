"use client";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useState, useCallback, useEffect } from "react";

const ClipContainer = ({ clipContent: initialClipContent = [], onDoubleClick, inputRef }) => {
  const [clipContent, setClipContent] = useState(initialClipContent);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState("");

  const handleCopyClick = useCallback((props) => {
    const { item } = props;
    navigator.clipboard
      .writeText(item)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }, []);

  const handleDeleteClick = useCallback((index) => {
    const updatedClipContent = clipContent.filter((_, i) => i !== index);
    setClipContent(updatedClipContent);
  }, [clipContent]);

  const handleDoubleClick = useCallback((index, item) => {
    setIsEditing(true);
    setEditText(item);
    onDoubleClick(index, item);
  }, [onDoubleClick]);

  const handleSaveEdit = useCallback((index) => {
    const updatedClipContent = clipContent.map((clip, i) =>
      i === index ? editText : clip
    );
    setClipContent(updatedClipContent);
    setIsEditing(false);
  }, [clipContent, editText]);

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <div>
      {clipContent.map((item, index) => (
        <div
          key={index}
          role="button"
          onClick={() => handleCopyClick({ item })}
          onDoubleClick={() => handleDoubleClick(index, item)}
          className="relative border-2 mb-4 rounded-md group py-4">
          {isEditing ? (
            <textarea
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={() => handleSaveEdit(index)}
              className="textarea textarea-bordered w-full"
              ref={inputRef}
            />
          ) : (
            <div className="w-full p-2 flex items-center justify-between bg-primary-foreground">
              <h1>{item}</h1>
            </div>
          )}
          <div
            id="actions"
            className="absolute top-1 right-1 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => handleDeleteClick(index)}
              role="button"
              className="flex items-center justify-center h-6 w-6 rounded-full bg-red-500 text-white">
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClipContainer;
