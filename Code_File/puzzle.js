    var rows = 3;
    var columns = 3;

    var currTile;
    var otherTile; //blank tile

    var turns = 0;
    var currentLevel = 1;

    // 100 levels mapped to letters where C is the blank tile
    var levelData = [
        "CDEABFGHI", "DECABFGHI", "DEABCFGHI", "DEABFGCHI", "DEABFGHIC", 
        "CABFGDEHI", "ABCFGDEHI", "ABFGCDEHI", "ABFGDECHI", "ABFGDEHIC", 
        "CABDEHIGF", "ABCDEHIGF", "ABDECHIGF", "ABDEHICFG", "ABDEHIFGC", 
        "CABHIDEFG", "ABCHIDEFG", "ABHICDEFG", "ABHIDECFG", "ABHIDEFGC", 
        "CDEFGABHI", "DECFGABHI", "DEFGCABHI", "DEFGABCHI", "DEFGABHIC", 
        "CABFGHIDE", "ABCFGHIDE", "ABFGCHIDE", "ABFGHICDE", "ABFGHIDEC", 
        "CEFABDGHI", "EFCABDGHI", "EFABCDGHI", "EFABDCGHI", "EFABDGHIC", 
        "CABFGHDEI", "ABCFGHDEI", "ABFGCHDEI", "ABFGHCDEI", "ABFGHDEIC", 
        "CDEFGHIAB", "DECFGHIAB", "DEFGCHIAB", "DEFGHICAB", "DEFGHIABC", 
        "CFGABDEHI", "FGCABDEHI", "FGABCDEHI", "FGABDECHI", "FGABDEHIC", 
        "CAFGDBEHI", "AFCGDBEHI", "AFGCBDEHI", "AFGBDECHI", "AFGBDEHIC", 
        "CHIFGDEAB", "HICFGDEAB", "HIFCGDEAB", "HIFGDECAB", "HIFGDEABC", 
        "CIHFGDEBA", "IHCFGDEBA", "IHFCGDEBA", "IHFGDECBA", "IHFGDEBAC", 
        "CIHGFEDBA", "IHCGFEDBA", "IHGFCEDBA", "IHGFEDCBA", "IHGFEDBAC", 
        "CIHGFEDAB", "IHCGFEDAB", "IHFCGEDAB", "IHFGEDCAB", "IHFGEDABC", 
        "CGHIFEDAB", "GHCIFEDAB", "GHIFCEDAB", "GHIFEDCAB", "GHIFEDABC", 
        "CFEDIHGAB", "FECDIHGAB", "FEDCIHGAB", "FEDIHCGAB", "FEDIHGABC", 
        "CDEFIHGAB", "DECFIHGAB", "DEFCIHGAB", "DEFIHCGAB", "DEFIHGABC", 
        "CIHGBAEDF", "IHCGBAEDF", "IHGBCAEDF", "IHGBACEDF", "IHGBAEDFC", 
        "CIBAHGFED", "ICBAHGFED", "IBAHCGFED", "IBAHGFCED", "IBAHGFEDC"
    ];

    // 100 Trivia facts to display when a level is solved. 
    // You can manually edit specific indexes here later (e.g., levelInfo[0] = "Real fact for lvl 1!")
    // 100 Trivia facts to display when a level is solved.
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
        "James Gosling – Creator of the Java programming language.",
        "Guido van Rossum – Creator of Python (BDFL).",
        "Brendan Eich – Creator of JavaScript.",
        "Ada Lovelace – Recognized as the first computer programmer.",
        "Richard Stallman – Founder of the Free Software Foundation (GNU).",
        "Brian Kernighan – Co-author of the first book on C (K&R C).",
        "Tony Hoare – Inventor of the Quicksort algorithm and null pointer.",
        "Niklaus Wirth – Creator of Pascal.",
        "Whitfield Diffie – Co-pioneer of public-key cryptography.",
        "Ron Rivest – Co-creator of RSA encryption.",
        "Konrad Zuse – Inventor of the first programmable computer (Z3).",
        "Margaret Hamilton – Led Apollo 11 flight software development.",
        "Barbara Liskov – Creator of the Liskov substitution principle.",
        "Frances Allen – Pioneer in compiler optimization; first female Turing Award winner.",
        "The Abacus – Ancient computing tool.",
        "Antikythera Mechanism – Ancient Greek analog computer.",
        "Analytical Engine – Babbage’s theoretical Turing-complete mechanical computer.",
        "Turing Machine – Mathematical model of computation.",
        "Colossus – First programmable, electronic, digital computer (UK).",
        "Harvard Mark I – IBM Automatic Sequence Controlled Calculator (ASCC).",
        "ENIAC – First general-purpose electronic digital computer.",
        "EDVAC – Early computer designed to use binary rather than decimal.",
        "UNIVAC I – First commercial computer in the US; predicted the 1952 election.",
        "Manchester Baby – First electronic stored-program computer.",
        "IBM System/360 – The mainframe that revolutionized the industry with architecture families.",
        "DEC PDP-11 – Highly influential minicomputer; birthplace of C and Unix.",
        "Cray-1 – Iconic C-shaped supercomputer.",
        "Magnetic Core Memory – Early form of RAM using magnetic rings.",
        "The Transistor – Replaced vacuum tubes; revolutionized electronics.",
        "Integrated Circuit (Microchip) – Multiple transistors on a single silicon chip.",
        "Intel 4004 – The world's first commercially produced microprocessor.",
        "Intel 8086 – Genesis of the x86 architecture.",
        "MOS Technology 6502 – Cheap, powerful chip that powered the Apple II and C64.",
        "ARM Architecture – Reduced Instruction Set chip that powers modern smartphones.",
        "Machine Code – Raw binary instructions executed directly by the CPU.",
        "Assembly Language – Low-level language using mnemonics (e.g., MOV, ADD).",
        "FORTRAN – Formula Translation; the first widely used high-level language.",
        "LISP – List Processing; the standard language for early AI research.",
        "ALGOL 60 – Highly influential language; introduced lexical scoping.",
        "COBOL – Common Business-Oriented Language; built for commerce and finance.",
        "BASIC – Beginner's All-purpose Symbolic Instruction Code; democratized computing.",
        "C Language – Dennis Ritchie's system language; the foundation of modern software.",
        "SQL – Structured Query Language; the standard for relational databases.",
        "C++ – Bjarne Stroustrup's \"C with Classes.\"",
        "Python (1.0) – Guido van Rossum's readable, general-purpose language.",
        "Java – \"Write once, run anywhere\" OOP language by Sun Microsystems.",
        "JavaScript (Mocha/LiveScript) – The scripting language of the Web.",
        "HTML (HyperText Markup Language) – The structure of the Web.",
        "XML (eXtensible Markup Language) – Standard data representation format.",
        "JSON (JavaScript Object Notation) – Lightweight data-interchange format.",
        "CSS (Cascading Style Sheets) – The presentation and styling of the Web.",
        "Unix – The foundational OS created at Bell Labs.",
        "Linux Kernel – Open-source Unix-like kernel by Linus Torvalds.",
        "macOS (Classic Mac OS) – First commercially successful OS with a GUI.",
        "MS-DOS – Microsoft Disk Operating System; dominated early IBM PCs.",
        "Windows 95 – Introduced the Start Menu, Taskbar, and modern Windows UI.",
        "iOS (iPhone OS) – Apple's revolutionary mobile operating system.",
        "Android – Google's open-source, Linux-based mobile operating system.",
        "Git – Distributed version control system by Linus Torvalds.",
        "Docker – Revolutionized software deployment via containerization.",
        "MySQL – The world's most popular open-source relational database.",
        "ARPANET – The precursor to the Internet, funded by the US DoD.",
        "TCP/IP – The foundational protocol suite of the Internet.",
        "DNS (Domain Name System) – The \"phonebook\" of the Internet.",
        "HTTP (Hypertext Transfer Protocol) – The foundation of data communication for the Web.",
        "Ethernet – Standard for wired Local Area Networks (LAN).",
        "Wi-Fi (IEEE 802.11) – Standard for wireless networking.",
        "World Wide Web – The system of linked hypertext documents on the Internet.",
        "Web 2.0 – The era of user-generated content and social media.",
        "Cloud Computing (AWS, Azure, GCP) – On-demand availability of computer systems over the internet.",
        "Apple II – One of the first highly successful mass-produced microcomputers.",
        "IBM PC (5150) – The machine that established the PC standard and MS-DOS dominance.",
        "Macintosh 128k – The first successful mass-market mouse-and-GUI computer.",
        "GPU (Graphics Processing Unit) – Dedicated chip for rendering graphics (e.g., 3dfx Voodoo, Nvidia GeForce).",
        "Motherboard – The central printed circuit board of a computer.",
        "Moore's Law – The observation that transistors on a chip double every ~2 years.",
        "Von Neumann Architecture – CPU, memory, and I/O; data and code share memory.",
        "Object-Oriented Programming (OOP) – Paradigm based on \"objects\" (data + methods).",
        "Open Source Software – Code released with a license allowing anyone to edit/distribute.",
        "Machine Learning / Neural Networks – AI mimicking the human brain's interconnected neurons.",
        "ChatGPT / LLMs (Large Language Models) – The current revolution in generative AI and natural language processing."
    ];

    window.onload = function() {
        // Create Reset Button dynamically so we don't touch HTML/CSS
        if (!document.getElementById("reset-btn")) {
            let resetBtn = document.createElement("button");
            resetBtn.id = "reset-btn";
            resetBtn.innerText = "Reset Puzzle";
            resetBtn.style.marginLeft = "20px"; // Spaces it out from the Level text
            resetBtn.style.padding = "5px 15px";
            resetBtn.style.fontSize = "16px";
            resetBtn.style.cursor = "pointer";
            
            // Clicking it simply restarts the current level from scratch
            resetBtn.onclick = function() {
                initLevel(); 
            };
            
            // Attach it directly inside the Level Title header
            document.getElementById("level-title").appendChild(resetBtn);
        }

        initLevel();
    }

    function initLevel() {
        // Reset the board and UI for the new level
        document.getElementById("board").innerHTML = "";
        turns = 0;
        document.getElementById("turns").innerText = turns;
        document.getElementById("level").innerText = currentLevel;
        document.querySelector(".info-text").innerText = "Solve the puzzle to reveal the hidden info!";

        // Remove the next button if it exists from the previous level
        let existingBtn = document.getElementById("next-btn");
        if (existingBtn) {
            existingBtn.remove();
        }

        // Load the reference image dynamically
        let refImgPath = "PUZZLE/Puzzle_" + currentLevel + "/" + currentLevel + ".jpg";
        document.getElementById("reference_image").innerHTML = "<img src='" + refImgPath + "'>";

        // Dynamically create the imgOrder array
        var layoutString = levelData[currentLevel - 1];
        var imgOrder = [];
        for (let i = 0; i < layoutString.length; i++) {
            imgOrder.push("PUZZLE/Puzzle_" + currentLevel + "/" + currentLevel + "_" + layoutString[i]);
        }

        // Build the board
        for (let i=0; i<rows;i++) {
            for (let j=0; j<columns; j++){
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

    function dragStart() {
        currTile = this;
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
    }

    function dragLeave() {
    }

    function dragDrop() {
        otherTile = this; 
    }

    function dragEnd() {
        if(!otherTile.src.includes("_C.jpg")) {
            return;
        }

        let currCoords = currTile.id.split("-");
        let i = parseInt(currCoords[0]);
        let j = parseInt(currCoords[1]);

        let otherCoords = otherTile.id.split("-");
        let i2 = parseInt(otherCoords[0]);
        let j2 = parseInt(otherCoords[1]);

        let moveLeft = i == i2 && j2 == j-1;
        let moveRight = i == i2 && j2 == j+1;
        let moveUp = j == j2 && i2 == i-1;
        let moveDown = j == j2 && i2 == i+1;

        let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

        if (isAdjacent) {
            let currImg = currTile.src;
            let otherImg = otherTile.src;

            currTile.src = otherImg;
            otherTile.src = currImg;

            turns ++;
            document.getElementById("turns").innerText = turns;

            // Check if they won after every valid move
            checkWin();
        }
    }

    function checkWin() {
        let tiles = document.getElementById("board").children;
        // The target state you defined earlier: A, B, C, D, E, F, G, H, I
        let correctOrder = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
        let isWin = true;

        for (let i = 0; i < 9; i++) {
            if (!tiles[i].src.includes("_" + correctOrder[i] + ".jpg")) {
                isWin = false;
                break;
            }
        }

        if (isWin) {
            // Reveal the level information
            document.querySelector(".info-text").innerText = levelInfo[currentLevel - 1];

            // Prevent spamming multiple buttons if they keep clicking tiles after winning
            if (!document.getElementById("next-btn")) {
                let nextBtn = document.createElement("button");
                nextBtn.id = "next-btn";
                nextBtn.innerText = "Next Level";
                nextBtn.style.marginTop = "20px";
                nextBtn.style.padding = "10px 20px";
                nextBtn.style.fontSize = "16px";
                nextBtn.style.cursor = "pointer";

                nextBtn.onclick = function() {
                    currentLevel++;
                    if (currentLevel > 100) {
                        alert("You beat all 100 levels!");
                        currentLevel = 1; // Reset or do something else
                    }
                    initLevel(); // Rebuild for the next level
                };

                document.getElementById("info").appendChild(nextBtn);
            }
        }
    }