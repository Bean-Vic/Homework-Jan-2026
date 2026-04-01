var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;
    const len = word.length;

    function dfs(r, c, idx) {
        if (idx === len) return true;

        if (
            r < 0 || r >= rows ||
            c < 0 || c >= cols ||
            board[r][c] !== word[idx]
        ) {
            return false;
        }

        const temp = board[r][c];
        board[r][c] = '#'; // 标记已访问

        const found =
            dfs(r + 1, c, idx + 1) ||
            dfs(r - 1, c, idx + 1) ||
            dfs(r, c + 1, idx + 1) ||
            dfs(r, c - 1, idx + 1);

        board[r][c] = temp; // 恢复

        return found;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};
