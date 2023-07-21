import React from "react";

interface SortingControlsProps {
  orderBy: string;
  order: string;
  handleOrderByChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleAscDescOrderChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SortingControls: React.FC<SortingControlsProps> = ({
  orderBy,
  order,
  handleOrderByChange,
  handleAscDescOrderChange,
}) => {
  return (
    <div className="flex items-center justify-center w-full max-w-5xl gap-8 mt-12 text-center rounded-xl">
      <label className="mr-4">Order by:</label>
      <select
        className="border border-gray-300 p-2 rounded-lg"
        value={orderBy}
        onChange={handleOrderByChange}
      >
        <option value="balance">Balance</option>
        <option value="dateAdded">Date Added</option>
        <option value="favorites">Favorites</option>
      </select>

      <select
        className="border border-gray-300 p-2 rounded-lg"
        value={order}
        onChange={handleAscDescOrderChange}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortingControls;
