/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let k=needle.length;
    for(let i=0;i<=haystack.length-k;i++){
        let window=haystack.substring(i,i+k);
        if(window===needle){
            return i;
        }
    }
    return -1;


    
};