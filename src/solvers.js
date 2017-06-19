/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


window.findNRooksSolution = function(n) {
  var solution = new Board({
    n: n
  });
  //recursive function
  var callback = function(row) {
    //base case: stop the search when row is equal to n
    if (row === n) {
      return solution;
    }
    //iterate through n staring at the first column
    for (var colIndex = 0; colIndex < n; colIndex++) {
      //toggle the piece at that coordinate
      solution.togglePiece(row, colIndex);
      //check if toggling that piece creates any rooks conflicts
      if (solution.hasAnyRooksConflicts()) {
        //if it does, toggle that piece back
        solution.togglePiece(row, colIndex);
        //else call inner recursive function on the next row
      } else {
        callback(row + 1);
      }
    }

  };
  //call recursive function on row 0
  callback(0);


  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  var solutionCount = 0; //fixme
  var solution = new Board({
    n: n
  });
  // instaniate a function / sub-routine, pass in the board
  var callback = function(row) {
    //base case: once i hit n, increase solution count
    if (row === n) {
      solutionCount++;
      return;
    }

    //iterate through n staring at the first column
    for (var colIndex = 0; colIndex < n; colIndex++) {

      //place piece and check for conflicts
      solution.togglePiece(row, colIndex);

      if (!solution.hasAnyRooksConflicts()) {
        callback(row + 1);
      }
      //unplace piece
      solution.togglePiece(row, colIndex);
    }
  };

  //call recursive function on row 0
  callback(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var solution = new Board({
    n: n
  });
  //recursive function
  var callback = function(row) {
    //base case: stop the search when row is equal to n
    if (row === n) {
      return solution;
    }
    //iterate through n staring at the first column
    for (var colIndex = 0; colIndex < n; colIndex++) {
      //toggle the piece at that coordinate
      solution.togglePiece(row, colIndex);
      //check if toggling that piece creates any rooks conflicts
      if (solution.hasAnyQueensConflicts()) {
        //if it does, toggle that piece back
        solution.togglePiece(row, colIndex);
        //else call inner recursive function on the next row
      } else {
        callback(row + 1);
      }
    }

  };
  //call recursive function on row 0
  callback(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var blankBoard = new Board({
    n: n
  });
  //recursive function
  var callback = function(row) {
    //base case: stop the search when row is equal to n
    if (row === n) {
      solutionCount++;
      return;
    }
    //iterate through n staring at the first column
    for (var colIndex = 0; colIndex < n; colIndex++) {
      // toggle the piece at that coordinate
      blankBoard.togglePiece(row, colIndex);
      //check if there are any queens conflicts
      if (!blankBoard.hasAnyQueensConflicts()) {
        //if there aren't any conflicts, call inner recursive function on the next row
        callback(row + 1);
      }
      // unplace piece at that coordinate
      blankBoard.togglePiece(row, colIndex);
    }

  };
  //call recursive function on row 0
  callback(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
