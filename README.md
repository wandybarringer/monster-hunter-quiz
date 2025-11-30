# Monster Hunter Quiz 🕹️

## Overview

Monster Hunter Quiz is a fast-paced, browser-based trivia game built with HTML, CSS, and JavaScript. You have **2 minutes** to answer **as many questions as possible**. When the timer runs out, your score is recorded, and you can enter your **name** to save it to the high-score list.

## How It Works

- Click **Start** to begin the quiz — this starts a **2-minute countdown timer**.
- A question with multiple-choice answers will appear.
- Select an answer:
  - If correct → you immediately move to the next question.
  - If incorrect → you still move on, but 10 seconds is removed from the timer.
- The goal is to answer **as many questions as possible before time expires**.
- When the 2-minute timer reaches zero, the quiz ends.
- You will be prompted to **enter your name** to save your final score.
- You can review your previous scores after playing again.

## Running the Quiz Locally

1. Download or clone the repository.
2. Open `index.html` in any modern web browser.
3. The application runs entirely client-side — no server or build tools required.

## Project Structure

monster-hunter-quiz/
├── index.html ← main HTML page
├── assets/ ← images or static assets
├── style.css ← UI styling
├── script.js ← quiz logic: timer, scoring, question flow, storage
└── README.md ← documentation

## Features

- Clean, simple UI
- Fully timed quiz session
- Unlimited question cycling within the time limit
- Score saving using browser local storage
- Designed for easy customization (swap or add questions in the JS file)

## Possible Future Improvements

- Add different question categories, timer options or difficulty modes
- Add animations, sound effects, or improved UI feedback
- Add a leaderboard view showing all saved scores
- Support question pools loaded from JSON or an external source
- Add a “review answers” screen after finishing
- Randomly assign answers to different buttons 

---

Enjoy the hunt — and see how many questions you can slay before the timer runs out!
