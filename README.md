# 🧩 ByteSlide: The Computing History 3x3 Sliding Puzzle

**ByteSlide** is an educational 3x3 sliding tile puzzle game built in Java, inspired by traditional Filipino plastic sliding puzzle toys. Journey through the milestones of computer science and programming history—one slide at a time.

---

## 🎮 Gameplay & Features

- **Classic Filipino Slide-Puzzle UI:**
  - Nostalgic 3x3 grid layout with an intuitive blank sliding slot.
  - Side-by-side **Target Image Reference** and styled title banner so players always know what they are assembling.
  - Smooth tile shifting with arrow keys or mouse clicks.

- **Curated History of Computing Collection (500–1,000 Puzzles):**
  - High-resolution visual archive covering key pioneers (Ada Lovelace, Alan Turing), iconic hardware (ENIAC, Apple I), and the evolution of programming languages (FORTRAN, C, Java, Rust).
  - Puzzles are randomly queued on launch for a fresh experience every playthrough.

- **Educational "Learn on Solve" Popups:**
  - Solving a puzzle triggers an informative modal detailing the historical context, trivia, and impact of the person, machine, or language depicted.

- **In-Game Controls:**
  - **Rescramble / Shuffle:** Reset and re-randomize the active puzzle tiles into a provably solvable configuration.
  - **Next Puzzle / Skip:** Browse through your remaining puzzle queue.
  - **Hint / Reference Toggle:** Quickly inspect the original completed artwork.

- **Persistent Progress & State Management:**
  - Automated local save state: solved puzzles are marked off and won't reappear across relaunches until reset.
  - Tracks total puzzles completed, moves made, and milestones unlocked.

- **Graduation & Certificate of Completion:**
  - Conquer the entire catalog to unlock a personalized, exportable **Certificate of Completion in Computing History**.

---

## 🛠️ Tech Stack & Architecture

- **Language:** Java (JDK 17+)
- **GUI Framework:** Java Swing / AWT (Custom rendering for responsive tile slicing & grid animations)
- **Persistence:** Local JSON / Serializable flat file storage for game progress and solved-state caching
- **Solvability Algorithm:** Parity-inversion check ensuring every generated scramble is mathematically solvable
