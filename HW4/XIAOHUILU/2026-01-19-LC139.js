// word break
function wordBreak(s, wordDict){
    const set = new Set();
    for(const word of wordDict) {
        set.add(word);
    }
    let canbreak = [s.length];
    for (let i = 0; i< s.length; i++ ) {
        let sub = s.substring(0, i+ 1);
        if (set.has(sub)) {
            canbreak[i] = true;
            continue;
        }
        for (let j = i; j >= 1; j--) {
            let prevSub = s.substring(j, i + 1);
            if (set.has(prevSub) && canbreak[j - 1]) {
                canbreak[i] = true;
                break;
            }
        }
    }

    return canbreak[s.length - 1];
}

let s = "applepenapple";
let wordDict = ["apple", "pen"];
console.log(wordBreak(s, wordDict));