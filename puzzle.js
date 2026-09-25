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
    },
    21: {
        folder: "PUZZLE/Puzzle_21/",
        prefix: "21_",
        blankTile: "21_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    22: {
        folder: "PUZZLE/Puzzle_22/",
        prefix: "22_",
        blankTile: "22_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    23: {
        folder: "PUZZLE/Puzzle_23/",
        prefix: "23_",
        blankTile: "23_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    24: {
        folder: "PUZZLE/Puzzle_24/",
        prefix: "24_",
        blankTile: "24_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    25: {
        folder: "PUZZLE/Puzzle_25/",
        prefix: "25_",
        blankTile: "25_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    26: {
        folder: "PUZZLE/Puzzle_26/",
        prefix: "26_",
        blankTile: "26_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    27: {
        folder: "PUZZLE/Puzzle_27/",
        prefix: "27_",
        blankTile: "27_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    28: {
        folder: "PUZZLE/Puzzle_28/",
        prefix: "28_",
        blankTile: "28_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    29: {
        folder: "PUZZLE/Puzzle_29/",
        prefix: "29_",
        blankTile: "29_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    30: {
        folder: "PUZZLE/Puzzle_30/",
        prefix: "30_",
        blankTile: "30_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    31: {
        folder: "PUZZLE/Puzzle_31/",
        prefix: "31_",
        blankTile: "31_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    32: {
        folder: "PUZZLE/Puzzle_32/",
        prefix: "32_",
        blankTile: "32_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    33: {
        folder: "PUZZLE/Puzzle_33/",
        prefix: "33_",
        blankTile: "33_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    34: {
        folder: "PUZZLE/Puzzle_34/",
        prefix: "34_",
        blankTile: "34_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    35: {
        folder: "PUZZLE/Puzzle_35/",
        prefix: "35_",
        blankTile: "35_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    36: {
        folder: "PUZZLE/Puzzle_36/",
        prefix: "36_",
        blankTile: "36_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    37: {
        folder: "PUZZLE/Puzzle_37/",
        prefix: "37_",
        blankTile: "37_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    38: {
        folder: "PUZZLE/Puzzle_38/",
        prefix: "38_",
        blankTile: "38_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    39: {
        folder: "PUZZLE/Puzzle_39/",
        prefix: "39_",
        blankTile: "39_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    40: {
        folder: "PUZZLE/Puzzle_40/",
        prefix: "40_",
        blankTile: "40_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    41: {
        folder: "PUZZLE/Puzzle_41/",
        prefix: "41_",
        blankTile: "41_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    42: {
        folder: "PUZZLE/Puzzle_42/",
        prefix: "42_",
        blankTile: "42_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    43: {
        folder: "PUZZLE/Puzzle_43/",
        prefix: "43_",
        blankTile: "43_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    44: {
        folder: "PUZZLE/Puzzle_44/",
        prefix: "44_",
        blankTile: "44_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    45: {
        folder: "PUZZLE/Puzzle_45/",
        prefix: "45_",
        blankTile: "45_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    46: {
        folder: "PUZZLE/Puzzle_46/",
        prefix: "46_",
        blankTile: "46_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    47: {
        folder: "PUZZLE/Puzzle_47/",
        prefix: "47_",
        blankTile: "47_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    48: {
        folder: "PUZZLE/Puzzle_48/",
        prefix: "48_",
        blankTile: "48_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    49: {
        folder: "PUZZLE/Puzzle_49/",
        prefix: "49_",
        blankTile: "49_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    50: {
        folder: "PUZZLE/Puzzle_50/",
        prefix: "50_",
        blankTile: "50_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    51: {
        folder: "PUZZLE/Puzzle_51/",
        prefix: "51_",
        blankTile: "51_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    52: {
        folder: "PUZZLE/Puzzle_52/",
        prefix: "52_",
        blankTile: "52_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    53: {
        folder: "PUZZLE/Puzzle_53/",
        prefix: "53_",
        blankTile: "53_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    54: {
        folder: "PUZZLE/Puzzle_54/",
        prefix: "54_",
        blankTile: "54_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    55: {
        folder: "PUZZLE/Puzzle_55/",
        prefix: "55_",
        blankTile: "55_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    56: {
        folder: "PUZZLE/Puzzle_56/",
        prefix: "56_",
        blankTile: "56_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    57: {
        folder: "PUZZLE/Puzzle_57/",
        prefix: "57_",
        blankTile: "57_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    58: {
        folder: "PUZZLE/Puzzle_58/",
        prefix: "58_",
        blankTile: "58_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    59: {
        folder: "PUZZLE/Puzzle_59/",
        prefix: "59_",
        blankTile: "59_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    60: {
        folder: "PUZZLE/Puzzle_60/",
        prefix: "60_",
        blankTile: "60_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    61: {
        folder: "PUZZLE/Puzzle_61/",
        prefix: "61_",
        blankTile: "61_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    62: {
        folder: "PUZZLE/Puzzle_62/",
        prefix: "62_",
        blankTile: "62_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    63: {
        folder: "PUZZLE/Puzzle_63/",
        prefix: "63_",
        blankTile: "63_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    64: {
        folder: "PUZZLE/Puzzle_64/",
        prefix: "64_",
        blankTile: "64_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    65: {
        folder: "PUZZLE/Puzzle_65/",
        prefix: "65_",
        blankTile: "65_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    66: {
        folder: "PUZZLE/Puzzle_66/",
        prefix: "66_",
        blankTile: "66_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    67: {
        folder: "PUZZLE/Puzzle_67/",
        prefix: "67_",
        blankTile: "67_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    68: {
        folder: "PUZZLE/Puzzle_68/",
        prefix: "68_",
        blankTile: "68_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    69: {
        folder: "PUZZLE/Puzzle_69/",
        prefix: "69_",
        blankTile: "69_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    70: {
        folder: "PUZZLE/Puzzle_70/",
        prefix: "70_",
        blankTile: "70_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    71: {
        folder: "PUZZLE/Puzzle_71/",
        prefix: "71_",
        blankTile: "71_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    72: {
        folder: "PUZZLE/Puzzle_72/",
        prefix: "72_",
        blankTile: "72_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    73: {
        folder: "PUZZLE/Puzzle_73/",
        prefix: "73_",
        blankTile: "73_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    74: {
        folder: "PUZZLE/Puzzle_74/",
        prefix: "74_",
        blankTile: "74_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    75: {
        folder: "PUZZLE/Puzzle_75/",
        prefix: "75_",
        blankTile: "75_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    76: {
        folder: "PUZZLE/Puzzle_76/",
        prefix: "76_",
        blankTile: "76_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    77: {
        folder: "PUZZLE/Puzzle_77/",
        prefix: "77_",
        blankTile: "77_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    78: {
        folder: "PUZZLE/Puzzle_78/",
        prefix: "78_",
        blankTile: "78_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    79: {
        folder: "PUZZLE/Puzzle_79/",
        prefix: "79_",
        blankTile: "79_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    80: {
        folder: "PUZZLE/Puzzle_80/",
        prefix: "80_",
        blankTile: "80_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    81: {
        folder: "PUZZLE/Puzzle_81/",
        prefix: "81_",
        blankTile: "81_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    82: {
        folder: "PUZZLE/Puzzle_82/",
        prefix: "82_",
        blankTile: "82_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    83: {
        folder: "PUZZLE/Puzzle_83/",
        prefix: "83_",
        blankTile: "83_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    84: {
        folder: "PUZZLE/Puzzle_84/",
        prefix: "84_",
        blankTile: "84_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    85: {
        folder: "PUZZLE/Puzzle_85/",
        prefix: "85_",
        blankTile: "85_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    86: {
        folder: "PUZZLE/Puzzle_86/",
        prefix: "86_",
        blankTile: "86_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    87: {
        folder: "PUZZLE/Puzzle_87/",
        prefix: "87_",
        blankTile: "87_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    88: {
        folder: "PUZZLE/Puzzle_88/",
        prefix: "88_",
        blankTile: "88_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    89: {
        folder: "PUZZLE/Puzzle_89/",
        prefix: "89_",
        blankTile: "89_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    90: {
        folder: "PUZZLE/Puzzle_90/",
        prefix: "90_",
        blankTile: "90_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    91: {
        folder: "PUZZLE/Puzzle_91/",
        prefix: "91_",
        blankTile: "91_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    92: {
        folder: "PUZZLE/Puzzle_92/",
        prefix: "92_",
        blankTile: "92_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    93: {
        folder: "PUZZLE/Puzzle_93/",
        prefix: "93_",
        blankTile: "93_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    94: {
        folder: "PUZZLE/Puzzle_94/",
        prefix: "94_",
        blankTile: "94_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    95: {
        folder: "PUZZLE/Puzzle_95/",
        prefix: "95_",
        blankTile: "95_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    96: {
        folder: "PUZZLE/Puzzle_96/",
        prefix: "96_",
        blankTile: "96_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    97: {
        folder: "PUZZLE/Puzzle_97/",
        prefix: "97_",
        blankTile: "97_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    98: {
        folder: "PUZZLE/Puzzle_98/",
        prefix: "98_",
        blankTile: "98_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    99: {
        folder: "PUZZLE/Puzzle_99/",
        prefix: "99_",
        blankTile: "99_C.jpg",
        imgOrder: ["D", "B", "H", "E", "A", "F", "G", "I", "C"],
        solvedOrder: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    },
    100: {
        folder: "PUZZLE/Puzzle_100/",
        prefix: "100_",
        blankTile: "100_C.jpg",
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
        refImage.src = `images/${levelNum}.jpg`;
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
