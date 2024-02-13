const s = "abcabcbb"

var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let current = "";
    for (let i = 0; i < s.length; i++) {
        let index = current.indexOf(s[i]);
        if (index !== -1) {
            current = current.slice(index + 1);
        }
        current += s[i];
        longest = Math.max(longest, current.length);
    }
    return longest;
};

console.log(lengthOfLongestSubstring(s)) // 3