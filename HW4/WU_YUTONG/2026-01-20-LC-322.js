var coinChange = function(coins, amount) {
    const memo = new Map();

    function dfs(i, rest) {
        if (rest === 0) return 0;
        if (i < 0 || rest < 0) return Infinity;

        const key = i + "," + rest;
        if (memo.has(key)) return memo.get(key);

        let a = dfs(i - 1, rest);
        let b = dfs(i, rest - coins[i]) + 1;

        const res = Math.min(a, b);
        memo.set(key, res);
        return res;
    }

    const ans = dfs(coins.length - 1, amount);
    return ans === Infinity ? -1 : ans;
};
