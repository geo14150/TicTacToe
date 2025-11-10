❌⭕ React Tic-Tac-Toe Game ⭕❌

Tic-Tac-Toe is a classic two-player game played on a 3x3 grid. Players alternate marking cells with an X or an O, aiming to align three of their marks in a row—horizontally, vertically, or diagonally.

This application is built as a single-page application using React and the Vite build tool, focusing on modern component structure and state management.

🚀 Features

Two-Player Gameplay: Standard Tic-Tac-Toe rules on a 3x3 grid.

Active Player Indicator: Visually highlights which player's turn it is.

Customizable Names: Players can edit their names (Player 1, Player 2) directly in the interface.

Game Log: A history log tracks every move made (row and column).

Win/Draw Detection: Displays a Game Over message upon a win or a draw.

Restart Functionality: A button allows players to easily reset the game board and start a new match.

Responsive Styling: Uses custom CSS with unique fonts (Caprasimo, Roboto Slab) and animations for a polished, engaging look.

🛠️ Technologies Used

This project is a modern JavaScript application utilizing a standard development toolchain.

Frontend: React (v18.2.0)

Build Tool: Vite (for fast local development and optimized bundling)

Language: JavaScript (JSX)

Styling: Custom CSS (index.css)

Linting: ESLint (configured with React hooks rules)

React Component Overview

The core logic is managed within App.jsx:

The App component manages the central game state (gameTurns and players).

Utility functions (devireActivePlayer, devireGameBoard, deriveWinner) handle complex state derivations outside the main component body for clean logic.

Components like Player, GameBoard, Log, and GameOver (imported from local modules, though not included here) handle specific UI parts and interactions.
