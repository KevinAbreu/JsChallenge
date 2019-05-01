// sum part the "right" way
var prices = [33,26,99,120,12,45];
var sum = 0;
for (sum = 0; sum < prices.length;) {
  sum= prices[0] + prices[1] + prices[2] + prices[3] + prices[4] + prices[5];
}
console.log("The sum is:", sum);
console.log("to be honest, I felt like I could have done do a bit better")
document.write("The sum is:", sum);
//end of sum part
//sum part the right way (?)
var prices1 = [33, 26, 99, 120,12,45]; // array of numbers
var sum1 = 0; //plugging in 0 for sum. Since it is a var instead of const, it can be changed
for (var i = 0; i < prices.length; i++) { //i is a placeholder variable for the array. This is saying if the number in "i" is less than the array length, increase the amopunt until the max length is acheived
  sum1 += prices[i]; // This is the same as prices[0] + prices[1] + prices[2], and so on.
}
document.write("The sum is:", sum1);// we plug it in

// time for a song!
