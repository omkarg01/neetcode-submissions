class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let set = new Set()

        for (let i = 0; i < board.length; i++){
            for (let j = 0; j < board.length; j++){
                if (board[i][j] === '.') continue
                let rowKey = `${board[i][j]} exist in row ${i}`;
                let colKey = `${board[i][j]} exist in col ${j}`;
                let boxKey = `${board[i][j]} exist in box ${Math.floor(i/3)} x ${Math.floor(j/3)}`;

                if (set.has(rowKey) || set.has(colKey) || set.has(boxKey)){
                    return false
                }

                set.add(rowKey)
                set.add(colKey)
                set.add(boxKey)

            }
        }

        return true
    }
}
