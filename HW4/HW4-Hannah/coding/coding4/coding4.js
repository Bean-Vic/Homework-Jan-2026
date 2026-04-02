function lengthOfLongestSubstring(s) {
    s = s.trim().toLowerCase().replace(/\s+/g, ' ');
    const lastIndex = new Map();
    let left = 0;
    let best = 0;

    for (let right = 0; right < s.length; right++){
        const ch = s.charAt(right);
        if (lastIndex.has(ch) && left <= lastIndex.get(ch)){
            left = lastIndex.get(ch) + 1;
        }

        lastIndex.set(ch, right);
        best = Math.max(best, right - left + 1);
    }

    return best;
};

const inputEl = document.getElementById("sInput");
//console.log("Input element:", inputEl);
const btn = document.getElementById("submitBtn");
//console.log("Button element:", btn);
const outputEl = document.getElementById("outputLen");

function handleSubmit() {
    const s = inputEl.value;
    const len = lengthOfLongestSubstring(s);
    outputEl.textContent = len;
}

btn.addEventListener("click", handleSubmit);

inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleSubmit();
    }
});