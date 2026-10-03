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
    "<h3>The Antikythera Mechanism</h3>The Antikythera Mechanism is an ancient Greek hand-powered orrery, widely considered to be the world's oldest known analog computer. Dating back to somewhere between 200 and 60 BCE, it consists of a complex system of interlocking bronze gears that were used to predict astronomical positions and eclipses decades in advance.\n\nWhile vastly different from modern digital devices, its importance lies in being the earliest physical evidence that humans could design machines to automate complex mathematical calculations. It established the conceptual foundation that data and predictive models could be mechanically encoded, foreshadowing the eventual development of programmable hardware millennia later.",
    "<h3>Al-Khwarizmi & The Algorithm</h3>Muhammad ibn Musa al-Khwarizmi was a 9th-century Persian polymath and mathematician who authored foundational texts on algebra and arithmetic. The Latinized version of his name, <i>Algoritmi</i>, is the direct etymological root of the word \"algorithm.\"\n\nHis primary contribution to computer science is the very concept of the algorithm itself: a systematic, step-by-step procedure used to solve a mathematical problem or complete a task. Before electronic computers existed, al-Khwarizmi formalized the logical sequencing of operations, which remains the absolute core of all modern software engineering and computer programming today.",
    "<h3>Ada Lovelace & The First Program</h3>Ada Lovelace was a 19th-century English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. In 1843, she published a translation of an article on the machine, appending her own extensive notes which included an algorithm for calculating a sequence of Bernoulli numbers.\n\nLovelace is recognized as the world's first computer programmer because she was the first to realize that a computing machine could do more than just crunch numbers. She conceptualized that if numbers could represent other things—like letters or musical notes—the machine could manipulate any arbitrary symbols based on rules, essentially predicting the modern era of general-purpose computing.",
    "<h3>Boolean Algebra</h3>Boolean Algebra is a branch of mathematics introduced by George Boole in 1847 where the values of the variables are the truth values <i>true</i> and <i>false</i>, usually denoted as 1 and 0 respectively. Instead of basic arithmetic operations like addition and multiplication, its primary operations are logical conjunction (AND), disjunction (OR), and negation (NOT).\n\nThis binary logic system is the fundamental mathematical bedrock of all modern computer science. It provided the exact theoretical framework needed to design digital circuitry; every physical microchip, logic gate, and high-level programming language conditional statement (like \"if/else\" commands) operates entirely on the principles of Boolean Algebra.",
    "<h3>Alan Turing & The Turing Machine</h3>Alan Turing was a British mathematician who, in 1936, conceptualized the Turing Machine—a theoretical, abstract mathematical model of computation. The machine imagines an infinite tape divided into discrete squares, a read/write head that can move along the tape, and a set of internal rules dictating how to change the symbols on the tape based on the current state.\n\nThe Turing Machine is arguably the most important concept in theoretical computer science because it formally defined the limits of what is mathematically \"computable.\" It proved that a single, programmable machine could execute any algorithm, laying the philosophical and mathematical blueprint for the invention of the modern, general-purpose electronic computer.",
    "<h3>Digital Logic</h3>Digital logic is the application of Boolean algebra to the physical design of electrical circuits. Pioneered in the late 1930s by Claude Shannon in his master's thesis, it demonstrated that the arrangement of electrical relays and switches could physically execute the logical operations of AND, OR, and NOT.\n\nThis breakthrough was the critical bridge between abstract mathematical theory and physical engineering. By proving that binary digits (bits) could be represented by the presence or absence of an electrical current, digital logic made it possible to build the complex electronic processors and memory systems that drive all modern hardware.",
    "<h3>John von Neumann & Von Neumann Architecture</h3>John von Neumann was a Hungarian-American polymath who, in 1945, formalized a computer design model known as the von Neumann Architecture. This design features a central processing unit (CPU) containing an arithmetic logic unit and processor registers, alongside a shared memory unit that stores both data and the instructions (the program) required to process that data.\n\nThe \"stored-program\" concept fundamentally changed computer science by allowing machines to be easily reprogrammed via software rather than being physically rewired for every new task. This architecture remains the structural standard for nearly every computer built today, from basic microcontrollers to advanced supercomputers.",
    "<h3>ENIAC</h3>The Electronic Numerical Integrator and Computer (ENIAC) was the world's first programmable, electronic, general-purpose digital computer. Completed in 1945 and built primarily to calculate complex artillery firing tables for the United States Army during World War II, it utilized thousands of vacuum tubes to perform calculations at unprecedented speeds.\n\nENIAC's importance lies in its role as a massive proof-of-concept for high-speed electronic computing. It successfully demonstrated that complex, programmable, general-purpose processing could be achieved electrically rather than mechanically, directly inspiring the subsequent generations of commercial mainframe computers.",
    "<h3>The Transistor</h3>The transistor is a semiconductor device used to amplify or switch electrical signals and power, invented in 1947 at Bell Labs by John Bardeen, Walter Brattain, and William Shockley. It effectively replaced bulky, fragile, and heat-generating vacuum tubes with a tiny, solid-state component made typically of silicon.\n\nThe transistor is arguably the most important hardware invention of the 20th century, enabling the aggressive miniaturization of electronics. By allowing engineers to pack billions of microscopic switches onto a single integrated circuit, transistors made personal computers, smartphones, and modern data centers physically and economically possible.",
    "<h3>The Compiler</h3>A compiler is a specialized software program that translates source code written in a human-readable, high-level programming language into low-level machine code (binary) that a computer's processor can directly execute. The concept was pioneered by Grace Hopper in 1952 with her A-0 System.\n\nBefore compilers, programmers had to write software directly in dense, hardware-specific assembly or machine code, which was incredibly tedious and prone to errors. Compilers democratized software development by allowing humans to write instructions using English-like syntax and logical structures, paving the way for the explosion of diverse programming languages.",
    "<h3>Fortran</h3>Fortran, derived from \"Formula Translation,\" is a general-purpose, compiled imperative programming language that is especially suited to numeric computation and scientific computing. Developed by a team led by John Backus at IBM in the 1950s, it was the first widely adopted high-level programming language.\n\nFortran proved that high-level languages could be compiled into highly efficient machine code, silencing critics who believed compiled code would always be too slow. Its massive success set the standard for future programming languages, introducing concepts like loop control structures and formatted input/output that are ubiquitous in coding today.",
    "<h3>ARPANET & Packet Switching</h3>ARPANET (Advanced Research Projects Agency Network) was an early computer network funded by the US Department of Defense, heavily utilizing a new concept called packet switching. Packet switching involves breaking digital data down into smaller blocks (packets) that are routed independently across a network and reassembled at their destination, rather than relying on a single, continuous, dedicated connection.\n\nARPANET was the direct precursor to the modern Internet. The development of packet switching and the subsequent creation of the TCP/IP protocols fundamentally changed computer science by enabling robust, decentralized, and scalable communication networks, changing the computer from a standalone calculator into a global communication device.",
    "<h3>The Relational Database</h3>The relational database is a digital database model that organizes data into tables (relations) consisting of columns and rows, where data points are linked to one another based on shared attributes. This theoretical model was proposed by Edgar F. Codd, an English computer scientist at IBM, in 1970.\n\nThis concept revolutionized how software applications store, organize, and retrieve information, moving away from rigid, hierarchical storage structures. It led to the development of SQL (Structured Query Language) and provided the robust, scalable data management backend required for modern enterprise software, e-commerce, and complex web applications.",
    "<h3>The Microprocessor</h3>A microprocessor is a single integrated circuit (IC) chip that contains all the arithmetic, logic, and control circuitry required to perform the functions of a computer's central processing unit (CPU). The first commercially available microprocessor was the Intel 4004, released in 1971.\n\nBy consolidating the \"brain\" of the computer onto a single, mass-producible chip, the microprocessor drastically drove down the cost, size, and power consumption of computing. This invention ignited the personal computer revolution of the 1970s and 1980s, eventually allowing microprocessors to be embedded in everything from cars to household appliances.",
    "<h3>C Language & UNIX</h3>C is a powerful, general-purpose programming language created by Dennis Ritchie at Bell Labs in 1972, originally designed to rewrite the UNIX operating system. UNIX is a modular, multi-user operating system known for its hierarchical file system and powerful command-line interface.\n\nThe synergy between C and UNIX shaped modern software engineering. C provided a perfect balance of high-level abstraction with low-level memory manipulation, making it the grandfather of modern languages like C++, Java, and Python. Meanwhile, UNIX established the architectural concepts and standards that heavily influenced modern operating systems, including Linux, Android, and macOS.",
    "<h3>Object-Oriented Programming (OOP)</h3>Object-Oriented Programming (OOP) is a programming paradigm organized around \"objects\" rather than sequential actions and logic. These objects are self-contained data structures that contain both data (attributes or properties) and the procedures or functions (methods) that manipulate that data.\n\nOOP fundamentally shifted how software was engineered in the 1980s and 90s by allowing developers to model real-world entities in their code. This paradigm made large-scale software development much more manageable, modular, and reusable, heavily influencing the design of dominant languages like Java, C++, and Python.",
    "<h3>World Wide Web</h3>In 1989, Tim Berners-Lee invented the World Wide Web while working at CERN. He developed the fundamental technologies that underpin the web: HTML (HyperText Markup Language), HTTP (Hypertext Transfer Protocol), and URIs/URLs. His vision was to create an information space where documents and other web resources could be identified by URLs, interlinked by hypertext links, and accessed via the Internet.\n\nThe World Wide Web transformed the Internet from an academic and military communication network into an accessible global platform for information sharing, commerce, and social interaction.",
    "<h3>Open Source & Linux</h3>Open Source is a decentralized software development model where the original source code is made freely available to the public to use, modify, and redistribute. This movement was most famously propelled by Linus Torvalds, who created the Linux operating system kernel in 1991 and released it for global collaboration.\n\nThe open-source model proved that collaborative, community-driven engineering could produce enterprise-grade software that is often more secure and robust than proprietary alternatives. Today, Linux runs the vast majority of the world's web servers, supercomputers, and smartphones, demonstrating the incredible power of shared knowledge in programming.",
    "<h3>Deep Learning & Artificial Intelligence</h3>Deep Learning is a specialized subset of Artificial Intelligence and machine learning based on artificial neural networks with multiple layers (hence \"deep\"). Instead of executing explicitly programmed rules, these networks ingest massive amounts of data to autonomously \"learn\" patterns, extract features, and make predictions.\n\nThis represents a massive paradigm shift in computer science. By allowing machines to process unstructured data, deep learning has solved complex problems that traditional procedural programming could not, leading to historic breakthroughs in computer vision, autonomous vehicles, and generative natural language processing.",
    "<h3>Quantum Computing</h3>Quantum computing is a rapidly emerging paradigm that uses the principles of quantum mechanics to process information. Instead of classical binary bits (which are strictly 1 or 0), quantum computers use \"qubits,\" which can exist in a state of superposition (representing 1 and 0 simultaneously) and become entangled with one another.\n\nThough still in its infancy, quantum computing promises to exponentially outpace classical computers in specific domains. Its importance lies in its potential to radically disrupt current cryptographic security, perfectly simulate complex chemical reactions for drug discovery, and solve massive optimization problems that would take classical supercomputers millennia to process."
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
        let swapIndex1 = chars[0] === 'C' ? 1 : 0;
        let swapIndex2 = chars[1] === 'C' ? 2 : (swapIndex1 === 0 ? 1 : 2);

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
    
    // Reset text box back to default prompt
    document.querySelector(".info-text").innerHTML = "Solve the puzzle to reveal the hidden info!";

    let existingBtn = document.getElementById("next-btn");
    if (existingBtn) existingBtn.remove();
    let existingQuizBtn = document.getElementById("quiz-btn");
    if (existingQuizBtn) existingQuizBtn.remove();

    let folderName = puzzleFolderNames[currentLevel - 1];
    let imageNum = folderName.split("_")[1];

    let refImgPath = "PUZZLE/" + folderName + "/" + imageNum + ".jpg";
    document.getElementById("reference_image").innerHTML = "<img src='" + refImgPath + "'>";

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
        let infoContainer = document.querySelector(".info-text");
        infoContainer.innerHTML = levelInfo[currentLevel - 1];

        // Reset scroll position to top when text updates
        let scrollBox = document.querySelector(".info-scroll-box");
        if (scrollBox) scrollBox.scrollTop = 0;

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

function startQuiz() {
    document.getElementById("puzzle-container").style.display = "none";
    document.getElementById("quiz-container").classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Listen for Ctrl + X to auto-solve the current puzzle
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key.toLowerCase() === 'x') {
        e.preventDefault();
        autoSolveLevel();
    }
});

function autoSolveLevel() {
    // Prevent solving if the puzzle container is hidden (e.g., during the quiz)
    let puzzleContainer = document.getElementById("puzzle-container");
    if (puzzleContainer && puzzleContainer.style.display === "none") return;

    let folderName = puzzleFolderNames[currentLevel - 1];
    let imageNum = folderName.split("_")[1];
    let correctOrder = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
    let tiles = document.getElementById("board").children;

    // Instantly assign the correct tile images in order
    for (let i = 0; i < 9; i++) {
        if (tiles[i]) {
            tiles[i].src = "PUZZLE/" + folderName + "/" + imageNum + "_" + correctOrder[i] + ".jpg";
        }
    }

    // Trigger the existing win state to display the historical info and Next button
    checkWin();
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