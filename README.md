# Rock Paper Scissors

A browser-based implementation of the classic Rock Paper Scissors game, built with HTML, CSS, and vanilla JavaScript.

**[Live Demo](https://parthbiswas9266.github.io/rock-paper-scissors-game/)**

## Screenshots

### Game Interface

![Rock Paper Scissors game interface](Images/Screenshot%202026-10-26%20202859.png)

### Gameplay

![Rock Paper Scissors gameplay showing the game result](Images/Screenshot%202026-10-26%20203008.png)

## Features

- Play against a computer that randomly selects its move.
- Track player and computer scores across rounds.
- Receive immediate feedback for wins, losses, and draws.
- Interactive choice elements with hover styling.
- Lightweight implementation with no external libraries or build tools.

## Built With

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and game elements |
| CSS3 | Layout, styling, and visual feedback |
| JavaScript | Game logic, random move generation, event handling, and DOM updates |

## How to Play

1. Open the [live demo](https://parthbiswas9266.github.io/rock-paper-scissors-game/).
2. Select Rock, Paper, or Scissors.
3. The computer randomly selects its move.
4. The result is displayed, and the scores are updated accordingly.
5. Continue playing as many rounds as you like.

## Run Locally

No installation or build process is required.

```bash
git clone https://github.com/Parthbiswas9266/rock-paper-scissors-game.git
cd rock-paper-scissors-game
```

Open `index.html` in your browser to start playing.

## Project Structure

```text
rock-paper-scissors-game/
├── Images/
│   ├── rock.png
│   ├── paper.png
│   └── scissors.png
├── index.html
├── style.css
└── script.js
```

## Implementation

The project uses a straightforward separation of concerns:

- **HTML** defines the game interface, choice elements, score displays, and result message.
- **CSS** controls the layout, appearance, and hover effects.
- **JavaScript** generates the computer's move, evaluates each round, updates the scores, and displays the result through DOM manipulation.

The game runs entirely in the browser. Scores are maintained during the current page session and are not persisted after a page reload.

## Learning Outcomes

This project was built as part of my ongoing frontend development practice. It provided hands-on experience with:

- JavaScript functions and conditional logic.
- Random number generation.
- DOM selection and manipulation.
- Event listeners and user interactions.
- Updating application state and reflecting changes in the UI.
- Separating HTML, CSS, and JavaScript into individual files.

## Project Status

The initial version is complete and serves as a practical exercise in core frontend development fundamentals.

---

Built as a personal learning project.
