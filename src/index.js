module.exports = function reverse (n) {
    let positiveNum;
    if (n < 0) {
      positiveNum = Math.abs(n);
    } else {
        positiveNum = n
    }
    let nStr = positiveNum.toString();
    let rev = '';
    
    for (let i = 0; i < nStr.length; i++) {
      rev = nStr[i] + rev;
    }
    return Number(rev);
}
