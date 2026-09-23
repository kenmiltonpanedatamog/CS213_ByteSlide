    var rows = 3;
    var columns = 3;

    var currTile;
    var otherTile; //blank tile

    var turns = 0;

    // image order array to be created sa future pra maraming order magawa 
    // note: may chance na baka mali kaya research muna
    // var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; // original order
    var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"]; //mixed order

    // basta buo na toh to load the image
    window.onload = function() {
        for (let i=0; i<rows;i++) {
            for (let j=0; j<columns; j++){

                let tile = document.createElement("img");
                tile.id = i.toString() + "-" + j.toString();
                tile.src = imgOrder.shift() + ".jpg";

                // drag functionality
                tile.addEventListener("dragstart", dragStart); //click an image to drag
                tile.addEventListener("dragover", dragOver);    //moving image around while clicked
                tile.addEventListener("dragenter", dragEnter); //dragging image onto another one
                tile.addEventListener("dragleave", dragLeave); //dragged image leaving another image
                tile.addEventListener("drop", dragDrop);    //drag an image over another image, drop the image
                tile.addEventListener("dragend", dragEnd);  //after drag drp, swap two tiles

                document.getElementById("board").append(tile);
         
            }
        }
    }

    function dragStart() {
        currTile = this; // current tile being dragged
    }

    function dragOver(e) {
        e.preventDefault();
    }
    function dragEnter(e) {
        e.preventDefault();
    }
    function dragLeave(){

    }
    function dragDrop(){
        otherTile = this; // img tile being dropped on
    }
    function dragEnd() {
        if(!otherTile.src.includes("3.jpg")) {
            return;
        }
        // checks coords of tiles
        let currCoords = currTile.id.split("-");
        let i = parseInt(currCoords[0]);
        let j = parseInt(currCoords[1]);

        let otherCoords = otherTile.id.split("-");
        let i2 = parseInt(otherCoords[0]);
        let j2 = parseInt(otherCoords[1]);

        // checks adjcency
        let moveLeft = i == i2 && j2 == j-1;
        let moveRight = i == i2 && j2 == j+1;
        let moveUp = j == j2 && i2 == i-1;
        let moveDown = j == j2 && i2 == i+1;

        let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

        // swapping
        if (isAdjacent) {
            let currImg = currTile.src;
            let otherImg = otherTile.src;

            currTile.src = otherImg;
            otherTile.src = currImg;

            // add 1 to turns
            turns ++;
            document.getElementById("turns").innerText = turns;
        }
        
    }