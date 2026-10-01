// ==========================================
// 1. PUZZLE GAME STATE & DATA
// ==========================================
var rows = 3;
var columns = 3;
var currTile;
var otherTile;

var turns = 0;
var currentLevel = 1;
var maxLevels = 20;

var puzzleFolderNames = [
    "Puzzle_1", "Puzzle_2", "Puzzle_3", "Puzzle_4", "Puzzle_5",
    "Puzzle_6", "Puzzle_7", "Puzzle_8", "Puzzle_9", "Puzzle_10",
    "Puzzle_11", "Puzzle_12", "Puzzle_13", "Puzzle_14", "Puzzle_15",
    "Puzzle_16", "Puzzle_17", "Puzzle_18", "Puzzle_19", "Puzzle_20"
];

var levelData = [
    "CDEABFGHI", "DECABFGHI", "DEABCFGHI", "DEABFGCHI", "DEABFGHIC", 
    "CABFGDEHI", "ABCFGDEHI", "ABFGCDEHI", "ABFGDECHI", "ABFGDEHIC", 
    "CABDEHIGF", "ABCDEHIGF", "ABDECHIGF", "ABDEHICFG", "ABDEHIFGC", 
    "CABHIDEFG", "ABCHIDEFG", "ABHICDEFG", "ABHIDECFG", "ABHIDEFGC"
];

var levelInfo = [
    "Charles Babbage – Designer of the Analytical Engine.",
    "Alan Turing – Father of theoretical computer science.",
    "John von Neumann – Creator of the von Neumann architecture.",
    "Claude Shannon – Father of information theory.",
    "George Boole – Creator of Boolean algebra.",
    "Dennis Ritchie – Creator of C and co-creator of Unix.",
    "Tim Berners-Lee – Inventor of the World Wide Web.",
    "Linus Torvalds – Creator of Linux and Git.",
    "Bill Gates – Co-founder of Microsoft; BASIC pioneer.",
    "Steve Jobs – Co-founder of Apple; visionary of personal computing.",
    "Gordon Moore – Co-founder of Intel; author of Moore's Law.",
    "Vint Cerf – Co-inventor of TCP/IP (Father of the Internet).",
    "Douglas Engelbart – Inventor of the computer mouse and GUI concepts.",
    "Alan Kay – Pioneer of Object-Oriented Programming (OOP) and GUI.",
    "Edsger W. Dijkstra – Pioneer of algorithms and structured programming.",
    "Donald Knuth – Author of The Art of Computer Programming.",
    "John McCarthy – Creator of LISP and coined \"Artificial Intelligence.\"",
    "Grace Hopper – Pioneer of the compiler and COBOL.",
    "Bjarne Stroustrup – Creator of C++.",
    "James Gosling – Creator of the Java programming language."
];

// ==========================================
// 2. INITIALIZATION
// ==========================================
window.onload = function() {
    let resetBtn = document.getElementById("reset-btn");
    if (resetBtn) {
        resetBtn.onclick = function() {
            initLevel();
        };
    }

    let skipBtn = document.getElementById("skip-btn");
    if (skipBtn) {
        skipBtn.onclick = function() {
            skipLevel();
        };
    }

    initLevel();
    renderQuestions(); // Prepare quiz questions in background
};

// ==========================================
// 3. PUZZLE CORE FUNCTIONS
// ==========================================
function skipLevel() {
    currentLevel++;
    if (currentLevel > maxLevels) {
        startQuiz();
        return;
    }
    initLevel();
}

function makeSolvable(layoutString) {
    let chars = layoutString.split('');
    let inversions = 0;
    
    // Create an array without the empty space 'C' to calculate inversions
    let puzzleWithoutC = chars.filter(char => char !== 'C');

    // Count the number of inversions
    for (let i = 0; i < puzzleWithoutC.length - 1; i++) {
        for (let j = i + 1; j < puzzleWithoutC.length; j++) {
            if (puzzleWithoutC[i] > puzzleWithoutC[j]) {
                inversions++;
            }
        }
    }

    // In a 3x3 grid, an odd number of inversions means it is unsolvable.
    // Swapping any two non-empty tiles flips the parity to even.
    if (inversions % 2 !== 0) {
        // Find the first two indices that are not 'C'
        let swapIndex1 = chars[0] === 'C' ? 1 : 0;
        let swapIndex2 = chars[1] === 'C' ? 2 : (swapIndex1 === 0 ? 1 : 2);

        // Swap the tiles
        let temp = chars[swapIndex1];
        chars[swapIndex1] = chars[swapIndex2];
        chars[swapIndex2] = temp;
    }

    return chars.join('');
}

function initLevel() {
    document.getElementById("board").innerHTML = "";
    turns = 0;
    document.getElementById("turns").innerText = turns;
    document.getElementById("level").innerText = currentLevel + " / " + maxLevels;
    document.querySelector(".info-text").innerText = "Solve the puzzle to reveal the hidden info!";

    let existingBtn = document.getElementById("next-btn");
    if (existingBtn) existingBtn.remove();
    let existingQuizBtn = document.getElementById("quiz-btn");
    if (existingQuizBtn) existingQuizBtn.remove();

    let folderName = puzzleFolderNames[currentLevel - 1];
    let imageNum = folderName.split("_")[1];

    let refImgPath = "PUZZLE/" + folderName + "/" + imageNum + ".jpg";
    document.getElementById("reference_image").innerHTML = "<img src='" + refImgPath + "'>";

    // Process the layout string through the solvability algorithm before rendering
    var layoutString = makeSolvable(levelData[currentLevel - 1]);
    var imgOrder = [];
    for (let i = 0; i < layoutString.length; i++) {
        imgOrder.push("PUZZLE/" + folderName + "/" + imageNum + "_" + layoutString[i]);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let tile = document.createElement("img");
            tile.id = i.toString() + "-" + j.toString();
            tile.src = imgOrder.shift() + ".jpg";

            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);

            document.getElementById("board").append(tile);
        }
    }
}

function dragStart() { currTile = this; }
function dragOver(e) { e.preventDefault(); }
function dragEnter(e) { e.preventDefault(); }
function dragLeave() {}
function dragDrop() { otherTile = this; }

function dragEnd() {
    if (!otherTile || !otherTile.src.includes("_C.jpg")) return;

    let currCoords = currTile.id.split("-");
    let i = parseInt(currCoords[0]);
    let j = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let i2 = parseInt(otherCoords[0]);
    let j2 = parseInt(otherCoords[1]);

    let moveLeft = i == i2 && j2 == j - 1;
    let moveRight = i == i2 && j2 == j + 1;
    let moveUp = j == j2 && i2 == i - 1;
    let moveDown = j == j2 && i2 == i + 1;

    if (moveLeft || moveRight || moveUp || moveDown) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns++;
        document.getElementById("turns").innerText = turns;

        checkWin();
    }
}

function checkWin() {
    let tiles = document.getElementById("board").children;
    let correctOrder = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
    let isWin = true;

    for (let i = 0; i < 9; i++) {
        if (!tiles[i].src.includes("_" + correctOrder[i] + ".jpg")) {
            isWin = false;
            break;
        }
    }

    if (isWin) {
        document.querySelector(".info-text").innerText = levelInfo[currentLevel - 1];

        if (currentLevel < maxLevels) {
            if (!document.getElementById("next-btn")) {
                let nextBtn = document.createElement("button");
                nextBtn.id = "next-btn";
                nextBtn.innerText = "Next Level";
                nextBtn.onclick = function() {
                    currentLevel++;
                    initLevel();
                };
                document.getElementById("button-group").appendChild(nextBtn);
            }
        } else {
            // Final level completed -> Offer Quiz Transition
            if (!document.getElementById("quiz-btn")) {
                let quizBtn = document.createElement("button");
                quizBtn.id = "quiz-btn";
                quizBtn.innerText = "Take Final Quiz";
                quizBtn.style.backgroundColor = "#673ab7";
                quizBtn.style.color = "#ffffff";
                quizBtn.style.fontWeight = "bold";

                quizBtn.onclick = function() {
                    startQuiz();
                };

                document.getElementById("button-group").appendChild(quizBtn);
            }
        }
    }
}

// Function to transition from puzzle to quiz
function startQuiz() {
    document.getElementById("puzzle-container").style.display = "none";
    document.getElementById("quiz-container").classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 4. QUIZ LOGIC & CERTIFICATE GENERATION
// ==========================================
const quizData = [
    { id: 'q1', level: 'easy', question: "What is the Antikythera Mechanism?", options: ["A medieval time-keeping device", "An ancient Greek analog computer", "A Renaissance encryption machine", "A theoretical model of computation"], answer: 1 },
    { id: 'q2', level: 'easy', question: "What word is derived from the 9th-century polymath Al-Khwarizmi?", options: ["Algebra", "Algorithm", "Arithmetic", "Abacus"], answer: 1 },
    { id: 'q3', level: 'easy', question: "Who is recognized as the world's first computer programmer?", options: ["Alan Turing", "Grace Hopper", "Ada Lovelace", "Charles Babbage"], answer: 2 },
    { id: 'q4', level: 'easy', question: "What theoretical model defined the limits of what is mathematically computable?", options: ["Von Neumann Architecture", "Turing Machine", "Boolean Algebra", "ENIAC"], answer: 1 },
    { id: 'q5', level: 'easy', question: "What was the world's first programmable, electronic, general-purpose digital computer?", options: ["Colossus", "Harvard Mark I", "UNIVAC", "ENIAC"], answer: 3 },
    { id: 'q6', level: 'easy', question: "What semiconductor device replaced bulky vacuum tubes?", options: ["The Transistor", "The Microprocessor", "The Diode", "The Capacitor"], answer: 0 },
    { id: 'q7', level: 'easy', question: "Who created the World Wide Web in 1989?", options: ["Vint Cerf", "Tim Berners-Lee", "Marc Andreessen", "Bill Gates"], answer: 1 },
    { id: 'q8', level: 'easy', question: "Who created the Linux operating system kernel?", options: ["Richard Stallman", "Linus Torvalds", "Dennis Ritchie", "Ken Thompson"], answer: 1 },
    { id: 'q9', level: 'easy', question: "Deep Learning is based on which structures?", options: ["Relational databases", "Quantum qubits", "Decision trees", "Artificial neural networks"], answer: 3 },
    { id: 'q10', level: 'easy', question: "What is the basic unit of information in quantum computing?", options: ["Bit", "Byte", "Qubit", "Node"], answer: 2 },
    { id: 'q11', level: 'hard', question: "What are the primary operations in Boolean Algebra?", options: ["ADD, SUB, DIV", "AND, OR, NOT", "TRUE, FALSE, NULL", "IF, THEN, ELSE"], answer: 1 },
    { id: 'q12', level: 'hard', question: "Who pioneered the application of Boolean algebra to electrical circuits?", options: ["Claude Shannon", "George Boole", "Alan Turing", "John von Neumann"], answer: 0 },
    { id: 'q13', level: 'hard', question: "What key concept did the von Neumann Architecture introduce?", options: ["The graphical user interface", "Object-oriented programming", "The stored-program concept", "Packet switching"], answer: 2 },
    { id: 'q14', level: 'hard', question: "Who pioneered the concept of the compiler with the A-0 System?", options: ["Ada Lovelace", "Margaret Hamilton", "Grace Hopper", "Katherine Johnson"], answer: 2 },
    { id: 'q15', level: 'hard', question: "What does 'Fortran' stand for?", options: ["Forward Transmission", "Formula Translation", "Formal Transaction", "Formatted Transfer"], answer: 1 },
    { id: 'q16', level: 'hard', question: "What network concept did ARPANET heavily utilize?", options: ["Circuit switching", "Peer-to-peer networking", "Packet switching", "Token ring"], answer: 2 },
    { id: 'q17', level: 'hard', question: "Who proposed the relational database model in 1970?", options: ["Larry Ellison", "Edgar F. Codd", "Bill Inmon", "Ralph Kimball"], answer: 1 },
    { id: 'q18', level: 'hard', question: "What was the first commercially available microprocessor?", options: ["AMD Am9080", "Intel 4004", "Motorola 6800", "MOS Technology 6502"], answer: 1 },
    { id: 'q19', level: 'hard', question: "Dennis Ritchie originally designed the C Language to rewrite which operating system?", options: ["MS-DOS", "Multics", "UNIX", "OS/2"], answer: 2 },
    { id: 'q20', level: 'hard', question: "What programming paradigm is organized around self-contained data structures called objects?", options: ["Functional Programming", "Procedural Programming", "Object-Oriented Programming", "Logic Programming"], answer: 2 }
];

function renderQuestions() {
    const easyContainer = document.getElementById('easy-questions');
    const hardContainer = document.getElementById('hard-questions');
    if (!easyContainer || !hardContainer) return;

    quizData.forEach((q, index) => {
        const questionNumber = index + 1;
        const card = document.createElement('div');
        card.className = "bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition duration-200 hover:shadow-md";
        card.setAttribute('data-qid', q.id);

        let optionsHTML = '';
        q.options.forEach((opt, optIndex) => {
            const uniqueId = `${q.id}_opt${optIndex}`;
            optionsHTML += `
                <label for="${uniqueId}" class="radio-label-container flex items-center p-2 -ml-2 rounded hover:bg-gray-50 cursor-pointer mb-2 last:mb-0 transition-colors">
                    <input type="radio" id="${uniqueId}" name="${q.id}" value="${optIndex}" class="custom-radio mr-3" required>
                    <span class="text-sm text-gray-800">${opt}</span>
                </label>
            `;
        });

        card.innerHTML = `
            <div class="mb-4">
                <span class="text-base text-gray-900 font-medium">${questionNumber}. ${q.question}</span>
                <span class="text-red-600 ml-1">*</span>
            </div>
            <div class="flex flex-col">${optionsHTML}</div>
            <div class="text-red-500 text-xs mt-2 hidden error-message flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                This is a required question
            </div>
        `;

        if (q.level === 'easy') {
            easyContainer.appendChild(card);
        } else {
            hardContainer.appendChild(card);
        }
    });
}

document.getElementById('quizForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;
    let score = 0;
    const formData = new FormData(this);

    document.querySelectorAll('.error-message').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.border-red-500').forEach(el => el.classList.remove('border-red-500'));

    quizData.forEach(q => {
        const answer = formData.get(q.id);
        const card = document.querySelector(`[data-qid="${q.id}"]`);

        if (answer === null) {
            isValid = false;
            card.classList.add('border-red-500');
            card.querySelector('.error-message').classList.remove('hidden');
        } else {
            if (parseInt(answer) === q.answer) {
                score++;
            }
        }
    });

    if (!isValid) {
        const firstError = document.querySelector('.border-red-500');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }

    showResults(score);
});

document.getElementById('clearBtn').addEventListener('click', function () {
    document.getElementById('quizForm').reset();
    document.querySelectorAll('.error-message').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.border-red-500').forEach(el => el.classList.remove('border-red-500'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const modal = document.getElementById('resultModal');
const modalContent = document.getElementById('modalContent');

function showResults(score) {
    const passed = score >= 15;
    let html = '';

    if (passed) {
        html = `
            <div class="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-500">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Congratulations!</h2>
            <p class="text-gray-600 mb-6">You scored <span class="font-bold text-xl text-[#673ab7]">${score} / 20</span>.</p>
            <p class="text-sm text-gray-500 mb-6">You have demonstrated an excellent understanding of the history of computer science!</p>
            <div class="flex flex-col space-y-3">
                <button onclick="downloadCertificate(${score})" class="w-full bg-[#673ab7] hover:bg-[#5e35b1] text-white font-medium py-2 px-4 rounded transition duration-150 flex items-center justify-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    Download Certificate
                </button>
                <button onclick="closeModal()" class="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded transition duration-150">
                    Close
                </button>
            </div>
        `;
    } else {
        html = `
            <div class="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-500">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Keep Learning!</h2>
            <p class="text-gray-600 mb-4">You scored <span class="font-bold text-xl text-orange-600">${score} / 20</span>.</p>
            <p class="text-sm text-gray-500 mb-6">You need at least 15 to earn the certificate. Review the questions and try again!</p>
            <button onclick="closeModal()" class="w-full bg-[#673ab7] hover:bg-[#5e35b1] text-white font-medium py-2 px-4 rounded transition duration-150">
                Try Again
            </button>
        `;
    }

    modalContent.innerHTML = html;
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.querySelector('div').classList.remove('scale-95');
    }, 10);
}

function closeModal() {
    modal.classList.add('opacity-0');
    modal.querySelector('div').classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function downloadCertificate(score) {
    const canvas = document.getElementById('certificateCanvas');
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = '#673ab7';
    ctx.lineWidth = 15;
    ctx.strokeRect(20, 20, width - 40, height - 40);

    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 4;
    ctx.strokeRect(40, 40, width - 80, height - 80);

    ctx.fillStyle = '#f0ebf8';
    ctx.beginPath();
    ctx.moveTo(40, 40);
    ctx.lineTo(width - 40, 40);
    ctx.lineTo(width - 40, 150);
    ctx.lineTo(width / 2, 200);
    ctx.lineTo(40, 150);
    ctx.fill();

    ctx.textAlign = 'center';

    ctx.fillStyle = '#673ab7';
    ctx.font = 'bold 48px Georgia, serif';
    ctx.fillText('CERTIFICATE OF ACHIEVEMENT', width / 2, 120);

    ctx.fillStyle = '#333333';
    ctx.font = '24px Arial, sans-serif';
    ctx.fillText('This certifies that you have successfully completed the', width / 2, 280);

    ctx.fillStyle = '#111111';
    ctx.font = 'bold 40px Arial, sans-serif';
    ctx.fillText('ByteSlide Computer Science Quiz', width / 2, 350);

    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    ctx.fillStyle = '#555555';
    ctx.font = '20px Arial, sans-serif';
    ctx.fillText(`Awarded on ${today}`, width / 2, 500);

    ctx.beginPath();
    ctx.moveTo(300, 600);
    ctx.lineTo(500, 600);
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(500, 600);
    ctx.lineTo(700, 600);
    ctx.stroke();

    ctx.font = '16px Arial, sans-serif';
    ctx.fillText('ByteSlide Team', 500, 630);

    const dataURL = canvas.toDataURL('image/jpeg', 0.95);
    const link = document.createElement('a');
    link.download = 'CS_History_Certificate.jpg';
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}