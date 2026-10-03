# ByteSlide 🧩💻
**A Computer Science History Puzzle Game**

ByteSlide is an interactive, web-based educational game designed to teach the foundational milestones, pioneers, and technologies of Computer Science. Players solve a series of sliding image puzzles to unlock fascinating historical facts, culminating in a comprehensive final quiz to test their knowledge. 

Whether you're a student, a teacher, or just a tech enthusiast, ByteSlide makes learning about the history of computing fun and rewarding!

---

## 🌟 Features

* **20 Unique Sliding Puzzles:** Solve 3x3 grid puzzles to progress through the game. Each solved puzzle reveals a piece of a larger historical picture.
* **Educational Unlockables:** Completing a level unlocks a detailed historical excerpt about a major computer science milestone.
* **Final Assessment Quiz:** A 20-question quiz (split into Easy and Hard sections) tests what you've learned throughout the puzzles.
* **Dynamic Certificate Generation:** Pass the final quiz with a score of 15/20 or higher to generate and download a personalized, canvas-drawn Certificate of Achievement!
* **Responsive Design:** Playable on various screen sizes with touch-friendly scrolling and intuitive UI.
* **Secret Auto-Solve:** Stuck on a level? Use a hidden developer shortcut to instantly solve the current puzzle (shh, don't tell the students).

---

## 📚 Topics Covered

The game covers 20 pivotal concepts and figures in the history of computer science, including:

1. The Antikythera Mechanism
2. Al-Khwarizmi & The Algorithm
3. Ada Lovelace & The First Program
4. Boolean Algebra
5. The Turing Machine
6. Digital Logic
7. Von Neumann Architecture
8. ENIAC
9. The Transistor
10. The Compiler
11. Fortran
12. ARPANET & Packet Switching
13. The Relational Database
14. The Microprocessor
15. C Language & UNIX
16. Object-Oriented Programming (OOP)
17. The World Wide Web
18. Open Source & Linux
19. Deep Learning
20. Quantum Computing

---

## 🎮 How to Play

1. **Start the Game:** Click "Play Game" from the main menu.
2. **Slide the Tiles:** Click any puzzle piece adjacent to the empty slot to move it. Arrange the tiles to match the reference image on the left.
3. **Read and Learn:** Once the puzzle is solved, read the unlocked history snippet in the information box below the puzzle.
4. **Advance:** Click "Next Level" to continue the journey.
5. **Take the Quiz:** After Level 20, click "Take Final Quiz" to test your knowledge.
6. **Get Certified:** Score at least 75% on the quiz to download your certificate!

### ⌨️ Developer Controls
* **Skip Level:** Click the "Skip Level" button to bypass a puzzle without solving it (useful for testing).
* **Auto-Solve (Cheat):** Press `Ctrl + X` on your keyboard to instantly solve the current puzzle.

---

## 🛠️ Technologies Used

ByteSlide is built using a lightweight, vanilla web stack. No frameworks or build tools are required to run the core puzzle game.

* **HTML5:** Semantic structure and Canvas API for certificate generation.
* **CSS3:** Custom styling with nostalgic, warm-paper aesthetics and responsive media queries. 
* **Tailwind CSS:** Used via CDN for rapid, clean styling of the Quiz section.
* **Vanilla JavaScript:** Handles puzzle logic, turn counting, win-state detection, quiz validation, and canvas drawing.

---

## 🚀 Installation & Setup

Because ByteSlide is built with standard web technologies, there is no complex installation required.

1. Clone or download this repository to your local machine.
2. Ensure you have all the necessary puzzle image assets stored in the `PUZZLE/` directory (e.g., `PUZZLE/Puzzle_1/1_A.jpg`).
3. Ensure the CSS background images are located in the `cssbackground/` directory.
4. Open `index.html` in any modern web browser to start playing!

---

*Happy sliding, and enjoy your journey through the history of computer science!*