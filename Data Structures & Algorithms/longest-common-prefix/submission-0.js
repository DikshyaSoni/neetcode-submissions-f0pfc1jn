class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {


    
 if (strs.length === 0) return "";

    let prefix = "";

    // Take first string as reference
    let first = strs[0];

    for (let j = 0; j < first.length; j++) {

        // Check this character with all other strings
        for (let i = 1; i < strs.length; i++) {

            // If mismatch OR index out of bounds
            if (j >= strs[i].length || strs[i][j] !== first[j]) {
                return prefix;
            }
        }

        // If all matched, add character to prefix
        prefix += first[j];
    }

    return prefix;
    }
    }

