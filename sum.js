const theSum = (...nums) => {
//    return (num1 || 0) + ( num2 || 0 ) + ( num3 || 0 ) + ( num4 || 0 );
   return nums.reduce((prev, current) => prev + current, 0);
}

module.exports = theSum