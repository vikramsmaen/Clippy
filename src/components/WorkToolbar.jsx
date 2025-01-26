import React, { useCallback } from "react";

const WorkToolbar = ({ isKanban = () => {} }) => {
  const handleIsKanbanToggle = useCallback((e) => {
    isKanban(e.target.checked);
  }, [isKanban]);

  return (
    <div className="bg-primary-content px-10 h-10 w-full flex items-center justify-between p-2">
      <div>
        <h1>Work Toolbar</h1>
      </div>
      <div className="flex items-center justify-between gap-5">
        <form className="form-control w-24">
          <label className="label cursor-pointer">
            <span className="label-text">Kanban</span>
            <input
              type="checkbox"
              className="toggle toggle-sm"
              defaultChecked
              onChange={handleIsKanbanToggle}
            />
          </label>
        </form>
        <div role="button" className="btn btn-sm">
          +
        </div>
      </div>
    </div>
  );
};

export default WorkToolbar;
