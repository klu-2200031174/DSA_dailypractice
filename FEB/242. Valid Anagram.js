/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length) 
    return false;
    let count={};
    for (ch of s){
        count[ch]=(count[ch]||0)+1;
    }
    for (ch of t){
        if (!count[ch]){
            return false;
        
        }
        count[ch]--;

    }
    return true;
   
};