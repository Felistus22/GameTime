import React, { useState } from 'react';
import './Puzzle.css';

function Puzzle() {
  // Define the initial puzzle state with one tile as null (blank)
  const initialTiles = Array(9).fill(null);
  initialTiles[Math.floor(Math.random() * 9)] = 9;
  
  // Define the initial puzzle state
  const [tiles, setTiles] = useState(Array(9).fill(null).map((_, index) => index + 1));

  // Shuffle the tiles to create a random puzzle
  const shuffleTiles = () => {
    let shuffledTiles = [...tiles];
    for (let i = shuffledTiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledTiles[i], shuffledTiles[j]] = [shuffledTiles[j], shuffledTiles[i]];
    }
    setTiles(shuffledTiles);
  };

  // Handle tile click to move tiles
  const handleTileClick = (tileValue) => {
    const tileIndex = tiles.indexOf(tileValue);

    if (tileIndex === -1) return; // Invalid move, the tile is not adjacent

    // Check if the clicked tile can move to an empty space
    const emptyIndex = tiles.indexOf(null);
    if (emptyIndex === tileIndex - 1 || emptyIndex === tileIndex + 1 || emptyIndex === tileIndex - 3 || emptyIndex === tileIndex + 3) {
      const updatedTiles = [...tiles];
      updatedTiles[tileIndex] = null;
      updatedTiles[emptyIndex] = tileValue;
      setTiles(updatedTiles);
    }
  };

  // Check if the puzzle is solved
  const isPuzzleSolved = () => {
    return tiles.every((tile, index) => (tile === null ? index === tiles.length - 1 : tile === index + 1));
  };

  return (
    <div className="puzzle-container">
      <h1>Sliding Number Puzzle</h1>
      <button onClick={shuffleTiles}>Shuffle</button>
      <div className="puzzle-grid">
        {tiles.map((tile, index) => (
          <div
            key={index}
            className={`tile ${tile === null ? 'empty' : ''}`}
            onClick={() => handleTileClick(tile)}
          >
            {tile}
          </div>
        ))}
      </div>
      {isPuzzleSolved() && <p>Congratulations! You solved the puzzle!</p>}
    </div>
  );
}

export default Puzzle;
