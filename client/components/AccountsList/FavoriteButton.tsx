import React from "react";

interface FavoriteButtonProps {
  isFavorite: boolean;
  toggleFavorite: () => void;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,
  toggleFavorite,
}) => {
  return (
    <button
      onClick={toggleFavorite}
      className="flex items-center justify-center px-2 py-2 text-center w-16 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
    >
      <span>{isFavorite ? "★" : "☆"}</span>
    </button>
  );
};

export default FavoriteButton;
