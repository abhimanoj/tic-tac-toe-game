/**
* This program is a boilerplate code for the standard tic tac toe game
* Here the “box” represents one placeholder for either a “X” or a “0”
* We have a 2D array to represent the arrangement of X or O is a grid
* 0 -> empty box
* 1 -> box with X
* 2 -> box with O
*
* Below are the tasks which needs to be completed:
* Imagine you are playing with the computer so every alternate move should be done by the computer
* X -> player
* O -> Computer
*
* Winner needs to be decided and has to be flashed
*
* Extra points will be given for approaching the problem more creatively
* 
*/

const grid = [];
const GRID_LENGTH = 3;
let turn = 'X';
let M=0,ML=0,MR=0,MT=0,MB=0,MTL=0,MTR=0,MBL=0,MBR=0;

function initializeGrid() {
    for (let colIdx = 0;colIdx < GRID_LENGTH; colIdx++) {
        const tempArray = [];
        for (let rowidx = 0; rowidx < GRID_LENGTH;rowidx++) {
            tempArray.push(0);
        }
        grid.push(tempArray);
    }
}

function getRowBoxes(colIdx) {
    let rowDivs = '';
    
    for(let rowIdx=0; rowIdx < GRID_LENGTH ; rowIdx++ ) {
        let additionalClass = 'darkBackground';
        let content = '';
        const sum = colIdx + rowIdx;
        if (sum%2 === 0) {
            additionalClass = 'lightBackground'
        }
        const gridValue = grid[colIdx][rowIdx];
        if(gridValue === 1) {
            content = '<span class="cross">X</span>';
        }
        else if (gridValue === 2) {
            content = '<span class="cross">O</span>';
        }
        rowDivs = rowDivs + '<div colIdx="'+ colIdx +'" rowIdx="' + rowIdx + '" class="box ' +
            additionalClass + '">' + content + '</div>';
    }
    return rowDivs;
}

function getColumns() {
    let columnDivs = '';
    for(let colIdx=0; colIdx < GRID_LENGTH; colIdx++) {
        let coldiv = getRowBoxes(colIdx);
        coldiv = '<div class="rowStyle">' + coldiv + '</div>';
        columnDivs = columnDivs + coldiv;
    }
    return columnDivs;
}

function renderMainGrid() {
    const parent = document.getElementById("grid");
    const columnDivs = getColumns();
    parent.innerHTML = '<div class="columnsStyle">' + columnDivs + '</div>';
}

function onBoxClick() {
	
   var rowIdx = this.getAttribute("rowIdx");
   var colIdx = this.getAttribute("colIdx");
	 
 if(grid[colIdx][rowIdx]==0){
    let newValue = 1;
    grid[colIdx][rowIdx] = newValue;
  
    //put logic here...
    var iDX = getRowAndColIdx(colIdx,rowIdx);
    if(iDX[0]!=GRID_LENGTH){
		   grid[iDX[0]][iDX[1]] = 2;
		
		


	//Statement 1nd...
	//Case_1
	if((grid[0][0]==2) && (grid[0][1]==2) && (grid[0][2]==2)){

		//winner 
		alert('Computer Win');

	}
	//Case_2
	if((grid[0][0]==2) && (grid[1][0]==2) && (grid[2][0]==2)){

		//winner 
		alert('Computer Win');

	}
	//Case_3
	if((grid[0][0]==2) && (grid[1][1]==2) && (grid[2][2]==2)){

		//winner 
		alert('Computer Win');

	}
	//Case_4
	if((grid[1][0]==2) && (grid[1][1]==2) && (grid[1][2]==2)){

		//winner 
		alert('Computer Win');

	}
	//Case_5
	if((grid[0][1]==2) && (grid[1][1]==2) && (grid[2][1]==2)){

		//winner 
		alert('winnComputer Winer');

	}
	//Case_6
	if((grid[2][0]==2) && (grid[1][1]==2) && (grid[0][2]==2)){

		//winner 
		alert('Computer Win');

	}
	//Case_7
	if((grid[0][2]==2) && (grid[1][2]==2) && (grid[2][2]==2)){

		//winner 
		alert('Computer Win');

	}
	//Case_8
	if((grid[2][0]==2) && (grid[2][1]==2) && (grid[2][2]==2)){

		//winner 
		alert('Computer Win');

	}

		}
 
    renderMainGrid();
    addClickHandlers();
 

}
}

function addClickHandlers() {
    var boxes = document.getElementsByClassName("box");
    for (var idx = 0; idx < boxes.length; idx++) {
        boxes[idx].addEventListener('click', onBoxClick, false);
    }
}


function getRowAndColIdx(c,r){
 
	var iDX = [GRID_LENGTH, GRID_LENGTH];

	const gridValue = grid[c][r];





	//Statement 1nd...
	//Case_1
	if((grid[0][0]==1) && (grid[0][1]==1) && (grid[0][2]==1)){

		//winner 
		alert('You Win');

	}
	//Case_2
	if((grid[0][0]==1) && (grid[1][0]==1) && (grid[2][0]==1)){

		//winner 
		alert('You Win');

	}
	//Case_3
	if((grid[0][0]==1) && (grid[1][1]==1) && (grid[2][2]==1)){

		//winner 
		alert('You Win');

	}
	//Case_4
	if((grid[1][0]==1) && (grid[1][1]==1) && (grid[1][2]==1)){

		//winner 
		alert('You Win');

	}
	//Case_5
	if((grid[0][1]==1) && (grid[1][1]==1) && (grid[2][1]==1)){

		//winner 
		alert('You Win');

	}
	//Case_6
	if((grid[2][0]==1) && (grid[1][1]==1) && (grid[0][2]==1)){

		//winner 
		alert('You Win');

	}
	//Case_7
	if((grid[0][2]==1) && (grid[1][2]==1) && (grid[2][2]==1)){

		//winner 
		alert('You Win');

	}
	//Case_8
	if((grid[2][0]==1) && (grid[2][1]==1) && (grid[2][2]==1)){

		//winner 
		alert('You Win');

	}


	//Statement 2nd...

//Case_1
	if((grid[0][0]==1) && (grid[0][1]==1) && (grid[0][2]==0)){
		iDX[0]=0;
		iDX[1]=2;
		return iDX;

	}else if((grid[0][0]==1) && (grid[0][1]==0) && (grid[0][2]==1)){
		iDX[0]=0;
		iDX[1]=1;
		return iDX;

	}else if((grid[0][0]==0) && (grid[0][1]==1) && (grid[0][2]==1)){
		iDX[0]=0;
		iDX[1]=0;
		return iDX;

	}


	//Case_2
	if((grid[0][0]==0) && (grid[1][0]==1) && (grid[2][0]==1)){
		iDX[0]=0;
		iDX[1]=0;
		return iDX;
	}else if((grid[0][0]==1) && (grid[1][0]==0) && (grid[2][0]==1)){
		iDX[0]=1;
		iDX[1]=0;
		return iDX;
	}else if((grid[0][0]==1) && (grid[1][0]==1) && (grid[2][0]==0)){
 
		iDX[0]=2;
		iDX[1]=0;
		return iDX;
	}



	//Case_3
	if((grid[0][0]==0) && (grid[1][1]==1) && (grid[2][2]==1)){

		iDX[0]=0;
		iDX[1]=0;
		return iDX;

	}else if((grid[0][0]==1) && (grid[1][1]==0) && (grid[2][2]==1)){

		iDX[0]=1;
		iDX[1]=1;
		return iDX;

	}else if((grid[0][0]==1) && (grid[1][1]==1) && (grid[2][2]==0)){

		iDX[0]=2;
		iDX[1]=2;
		return iDX;

	}


	//Case_4
	if((grid[1][0]==0) && (grid[1][1]==1) && (grid[1][2]==1)){

		iDX[0]=1;
		iDX[1]=0;
		return iDX;

	}else 	if((grid[1][0]==1) && (grid[1][1]==0) && (grid[1][2]==1)){

		iDX[0]=1;
		iDX[1]=1;
		return iDX;

	}else 	if((grid[1][0]==1) && (grid[1][1]==1) && (grid[1][2]==0)){

		iDX[0]=1;
		iDX[1]=2;
		return iDX;

	}
	


	//Case_5
	if((grid[0][1]==0) && (grid[1][1]==1) && (grid[2][1]==1)){

		iDX[0]=0;
		iDX[1]=1;
		return iDX;

	}else if((grid[0][1]==1) && (grid[1][1]==0) && (grid[2][1]==1)){

		iDX[0]=1;
		iDX[1]=1;
		return iDX;

	}else if((grid[0][1]==1) && (grid[1][1]==1) && (grid[2][1]==0)){

		iDX[0]=2;
		iDX[1]=1;
		return iDX;

	}


	//Case_6
	if((grid[2][0]==0) && (grid[1][1]==1) && (grid[0][2]==1)){
		iDX[0]=2;
		iDX[1]=0;
		return iDX;

	}else if((grid[2][0]==1) && (grid[1][1]==0) && (grid[0][2]==1)){
		iDX[0]=1;
		iDX[1]=1;
		return iDX;

	}else if((grid[2][0]==1) && (grid[1][1]==1) && (grid[0][2]==0)){
		iDX[0]=0;
		iDX[1]=2;
		return iDX;

	}

	//Case_7
	if((grid[0][2]==0) && (grid[1][2]==1) && (grid[2][2]==1)){
		iDX[0]=0;
		iDX[1]=2;
		return iDX;

	}else if((grid[0][2]==1) && (grid[1][2]==0) && (grid[2][2]==1)){
		iDX[0]=1;
		iDX[1]=2;
		return iDX;

	}else if((grid[0][2]==1) && (grid[1][2]==1) && (grid[2][2]==0)){
		iDX[0]=2;
		iDX[1]=2;
		return iDX;

	}

	//Case_8
	if((grid[2][0]==0) && (grid[2][1]==1) && (grid[2][2]==1)){
		iDX[0]=2;
		iDX[1]=0;
		return iDX;

	}else if((grid[2][0]==1) && (grid[2][1]==0) && (grid[2][2]==1)){
		iDX[0]=2;
		iDX[1]=1;
		return iDX;

	}else if((grid[2][0]==1) && (grid[2][1]==1) && (grid[2][2]==0)){
		iDX[0]=2;
		iDX[1]=2;
		return iDX;
	}



	//Statement 3rd...

	//Case_1
	if((grid[0][0]==1) && (grid[0][1]==0 || grid[0][2]==0)){

		if(grid[0][1]==0){
			iDX[0]=0;
			iDX[1]=1;
		}else if(grid[0][2]==0){
			iDX[0]=0;
			iDX[1]=2;
		}
		return iDX;

	}else if((grid[0][1]==1) && (grid[0][0]==0 || grid[0][2]==0)){
		if(grid[0][0]==0){
			iDX[0]=0;
			iDX[0]=1;
		}else if(grid[0][2]==0){
			iDX[0]=0;
			iDX[1]=2;
		}
		return iDX;

	}else if((grid[0][0]==0 || grid[0][1]==0) && (grid[0][2]==1)){
		if(grid[0][0]==0){
			iDX[0]=0;
			iDX[1]=0;
		}else if(grid[0][1]==0){
			iDX[0]=0;
			iDX[1]=1;
		}
		return iDX;

	}


	//Case_2
	if((grid[0][0]==1) && (grid[1][0]==0 || grid[2][0]==0)){
		if(grid[1][0]==0){
			iDX[0]=1;
			iDX[1]=0;
		}else if(grid[2][0]==0){
			iDX[0]=2;
			iDX[1]=0;
		}
		return iDX;
	}else if((grid[1][0]==1) && (grid[0][0]==0 || grid[2][0]==0)){
		if(grid[0][0]==0){
			iDX[0]=0;
			iDX[1]=0;
		}else if(grid[2][0]==0){
			iDX[0]=2;
			iDX[1]=0;
		}
		return iDX;
	}else if((grid[0][0]==0 || grid[1][0]==0) && (grid[2][0]==1)){
		if(grid[0][0]==0){
			iDX[0]=0;
			iDX[1]=0;
		}else if(grid[1][0]==0){
			iDX[0]=1;
			iDX[1]=0;
		}
		return iDX;
	}



	//Case_3
	if((grid[0][0]==1) && (grid[1][1]==0 || grid[2][2]==0)){

		if(grid[1][1]==0){
			iDX[0]=1;
			iDX[1]=1;
		}else if(grid[2][2]==0){
			iDX[0]=2;
			iDX[1]=2;
		}
		return iDX;

	}else if((grid[1][1]==1) && (grid[0][0]==0 || grid[2][2]==0)){

		if(grid[0][0]==0){
			iDX[0]=0;
			iDX[1]=0;
		}else if(grid[2][2]==0){
			iDX[0]=2;
			iDX[1]=2;
		}
		return iDX;

	}else if((grid[0][0]==1) && (grid[1][1]==1) || (grid[2][2]==0)){

		if(grid[0][0]==0){
			iDX[0]=0;
			iDX[1]=0;
		}else if(grid[1][0]==0){
			iDX[0]=1;
			iDX[1]=0;
		}
		return iDX;

	}


	//Case_4
	if((grid[1][0]==1) && (grid[1][1]==0 || grid[1][2]==0)){
		if(grid[1][1]==0){
			iDX[0]=1;
			iDX[1]=1;
		}else if(grid[1][2]==0){
			iDX[0]=1;
			iDX[1]=2;
		}
		return iDX;

	}else if((grid[1][1]==1)  && (grid[1][0]==0 || grid[1][2]==0)){

		if(grid[1][0]==0){
			iDX[0]=1;
			iDX[1]=0;
		}else if(grid[1][2]==0){
			iDX[0]=1;
			iDX[1]=2;
		}
		return iDX;

	}else if((grid[1][0]==0 || grid[1][1]==0) && (grid[1][2]==1)){

		if(grid[1][0]==0){
			iDX[0]=1;
			iDX[1]=0;
		}else if(grid[1][1]==0){
			iDX[0]=1;
			iDX[1]=1;
		}
		return iDX;

	}



	//Case_5
	if((grid[0][1]==1) && (grid[1][1]==0 || grid[2][1]==0)){

		if(grid[1][1]==0){
			iDX[0]=1;
			iDX[1]=1;
		}else if(grid[2][1]==0){
			iDX[0]=2;
			iDX[1]=1;
		}
		return iDX;

	}else if((grid[1][1]==1) && (grid[0][1]==0 || grid[2][1]==0)){

		if(grid[0][1]==0){
			iDX[0]=0;
			iDX[1]=1;
		}else if(grid[2][1]==0){
			iDX[0]=2;
			iDX[1]=1;
		}
		return iDX;

	}else if((grid[0][1]==0 || grid[1][1]==0) && (grid[2][1]==1)){

		if(grid[0][1]==0){
			iDX[0]=0;
			iDX[1]=1;
		}else if(grid[1][1]==0){
			iDX[0]=1;
			iDX[1]=1;
		}
		return iDX;

	}


	//Case_6
	if((grid[2][0]==1) && (grid[1][1]==0 || grid[0][2]==0)){
		if(grid[1][1]==0){
			iDX[0]=1;
			iDX[1]=1;
		}else if(grid[0][2]==0){
			iDX[0]=0;
			iDX[1]=2;
		}
		return iDX;

	}else if((grid[1][1]==1)  && (grid[2][0]==0 || grid[0][2]==0)){
		if(grid[0][1]==0){
			iDX[0]=0;
			iDX[1]=1;
		}else if(grid[1][1]==0){
			iDX[0]=1;
			iDX[1]=1;
		}
		return iDX;

	}else if((grid[2][0]==0 || grid[1][1]==0) && (grid[0][2]==1)){
		if(grid[2][0]==0){
			iDX[0]=2;
			iDX[1]=0;
		}else if(grid[1][1]==0){
			iDX[0]=1;
			iDX[1]=1;
		}
		return iDX;

	}

	//Case_7
	if((grid[0][2]==1) && (grid[1][2]==0 || grid[2][2]==0)){
		if(grid[2][0]==0){
			iDX[0]=2;
			iDX[1]=0;
		}else if(grid[1][1]==0){
			iDX[0]=1;
			iDX[1]=1;
		}
		return iDX;

	}else if((grid[1][2]==1) && (grid[0][2]==0 || grid[2][2]==0)){
		if(grid[0][2]==0){
			iDX[0]=0;
			iDX[1]=2;
		}else if(grid[2][2]==0){
			iDX[0]=2;
			iDX[1]=2;
		}
		return iDX;

	}else if((grid[0][2]==0 || grid[1][2]==0) && (grid[2][2]==1)){
		if(grid[0][2]==0){
			iDX[0]=0;
			iDX[1]=2;
		}else if(grid[1][2]==0){
			iDX[0]=1;
			iDX[1]=2;
		}
		return iDX;

	}

	//Case_8
	if((grid[2][0]==1) && (grid[2][1]==0 || grid[2][2]==0)){
		if(grid[2][1]==0){
			iDX[0]=2;
			iDX[1]=1;
		}else if(grid[2][2]==0){
			iDX[0]=2;
			iDX[1]=2;
		}
		return iDX;

	}else if((grid[2][1]==1) && (grid[2][0]==0 || grid[2][2]==0)){
		if(grid[2][0]==0){
			iDX[0]=2;
			iDX[1]=0;
		}else if(grid[2][2]==0){
			iDX[0]=2;
			iDX[1]=2;
		}
		return iDX;

	}else if((grid[2][0]==0 || grid[2][1]==0) && (grid[2][2]==1)){
		if(grid[2][0]==0){
			iDX[0]=2;
			iDX[1]=0;
		}else if(grid[2][1]==0){
			iDX[0]=2;
			iDX[1]=1;
		}
		return iDX;
	}

	return iDX; 
}

initializeGrid();
renderMainGrid();
addClickHandlers();
