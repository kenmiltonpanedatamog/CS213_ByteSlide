var rows = 3;
var columns = 3;

var currTile;
var otherTile; // blank tile

var turns = 0;
var currentLevel = 1;

// Define setups for multiple levels
const levels = {
    1: {
        folder: "PUZZLE/Puzzle_1/",
        prefix: "1_",
        blankTile: "1_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    2: {
        folder: "PUZZLE/Puzzle_2/",
        prefix: "2_",
        blankTile: "2_C.jpg",
        imgOrder: ["H", "A", "B", "G", "F", "E", "C", "D", "I"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    3: {
        folder: "PUZZLE/Puzzle_3/",
        prefix: "3_",
        blankTile: "3_C.jpg",
        imgOrder: ["E", "A", "B", "G", "F", "H", "C", "D", "I"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    4: {
        folder: "PUZZLE/Puzzle_4/",
        prefix: "4_",
        blankTile: "4_C.jpg",
        imgOrder: ["I", "H", "G", "F", "E", "D", "C", "B", "A"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    5: {
        folder: "PUZZLE/Puzzle_5/",
        prefix: "5_",
        blankTile: "5_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    6: {
        folder: "PUZZLE/Puzzle_6/",
        prefix: "6_",
        blankTile: "6_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    7: {
        folder: "PUZZLE/Puzzle_7/",
        prefix: "7_",
        blankTile: "7_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    8: {
        folder: "PUZZLE/Puzzle_8/",
        prefix: "8_",
        blankTile: "8_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    9: {
        folder: "PUZZLE/Puzzle_9/",
        prefix: "9_",
        blankTile: "9_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    10: {
        folder: "PUZZLE/Puzzle_10/",
        prefix: "10_",
        blankTile: "10_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    11: {
        folder: "PUZZLE/Puzzle_11/",
        prefix: "11_",
        blankTile: "11_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    12: {
        folder: "PUZZLE/Puzzle_12/",
        prefix: "12_",
        blankTile: "12_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    13: {
        folder: "PUZZLE/Puzzle_13/",
        prefix: "13_",
        blankTile: "13_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    14: {
        folder: "PUZZLE/Puzzle_14/",
        prefix: "14_",
        blankTile: "14_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    15: {
        folder: "PUZZLE/Puzzle_15/",
        prefix: "15_",
        blankTile: "15_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    16: {
        folder: "PUZZLE/Puzzle_16/",
        prefix: "16_",
        blankTile: "16_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    17: {
        folder: "PUZZLE/Puzzle_17/",
        prefix: "17_",
        blankTile: "17_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    18: {
        folder: "PUZZLE/Puzzle_18/",
        prefix: "18_",
        blankTile: "18_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    19: {
        folder: "PUZZLE/Puzzle_19/",
        prefix: "19_",
        blankTile: "19_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    20: {
        folder: "PUZZLE/Puzzle_20/",
        prefix: "20_",
        blankTile: "20_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    }
};

window.onload = function () {
    loadLevel(currentLevel);
}

function loadLevel(levelNum) {
    let levelData = levels[levelNum];

    document.getElementById("level").innerText = levelNum;

    let refImage = document.getElementById("actualImage");
    if (refImage) {
        refImage.src = levelData.folder + levelNum + ".jpg";
    }

    let titleElement = document.getElementById("puzzleTitle");
    if (titleElement) {
        fetch(levelData.folder + levelNum + ".txt")
            .then(response => {
                if (!response.ok) throw new Error("Could not load text file");
                return response.text();
            })
            .then(text => {
                let firstLine = text.split('\n')[0];
                titleElement.innerText = firstLine.replace(/^###\s*/, '');
            })
            .catch(error => console.error("Error loading title:", error));
    }

    turns = 0;
    document.getElementById("turns").innerText = turns;

    let board = document.getElementById("board");
    board.innerHTML = "";

    let currentImgOrder = [...levelData.imgOrder];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let tile = document.createElement("img");
            tile.id = i.toString() + "-" + j.toString();

            tile.src = levelData.folder + levelData.prefix + currentImgOrder.shift() + ".jpg";

            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);

            board.append(tile);
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
    let levelData = levels[currentLevel];

    if (!otherTile.src.includes(levelData.blankTile)) {
        return;
    }

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

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns++;
        document.getElementById("turns").innerText = turns;

        setTimeout(checkWin, 100);
    }
}

function checkWin() {
    let board = document.getElementById("board");
    let tiles = board.getElementsByTagName("img");
    let levelData = levels[currentLevel];
    let isSolved = true;

    for (let i = 0; i < tiles.length; i++) {
        let srcParts = tiles[i].src.split('_');
        let letter = srcParts[srcParts.length - 1].split('.')[0];

        if (letter !== levelData.solvedOrder[i]) {
            isSolved = false;
            break;
        }
    }

    if (isSolved) {
        alert("Puzzle Solved in " + turns + " turns! Moving to the next level.");

        if (levels[currentLevel + 1]) {
            currentLevel++;
        } else {
            currentLevel = 1;
        }
        loadLevel(currentLevel);
    }
}

function skipLevel() {
    if (levels[currentLevel + 1]) {
        currentLevel++;
    } else {
        currentLevel = 1;
    }
    loadLevel(currentLevel);
}