import React from "react";

const Shimmer = () => {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 max-w-sm w-96 mx-auto">
      <div className="animate-pulse space-y-4">
        <div className="bg-slate-400 h-80 w-full rounded"></div>
        <div className="space-y-2">
          <div className="h-6 bg-slate-400 rounded w-3/4"></div>
          <div className="h-4 bg-slate-400 rounded w-full"></div>
          <div className="h-4 bg-slate-400 rounded w-5/6"></div>
          <div className="h-5 bg-slate-400 rounded w-1/3"></div>
          <div className="h-6 bg-slate-400 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
