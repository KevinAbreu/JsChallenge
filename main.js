//sum part the right way (?)
var prices = [33, 26, 99, 120,12,45]; // array of numbers
var sum = 0; //plugging in 0 for sum. Since it is a var instead of const, it can be changed
for (var i = 0; i < prices.length; i++) { //i is a placeholder variable for the array. This is saying if the number in "i" is less than the array length, increase the amount until the max length is acheived
  sum += prices[i]; // This is the same as prices[0] + prices[1] + prices[2], and so on.
}
document.write("The sum is:", sum)// we plug it in

// time for a song!

//JavaScript OST - Let's loop until the crows go home!

for (i = 99; i > 1; i--) {
  console.log(`${i} crows on the wall. ${i} crows.\n1 fell down and became a wight.\n${i-1} crows on the wall`)
  document.write(`${i} crows on the wall. ${i} crows.\n1 fell down and became a wight.\n${i-1} crows on the wall`)

}
if (i <= 1){
  console.log(`${i} crow on the wall. ${i} single crow.\n It fell down and became a wight. There's no one left to defend Westeros now.`)
  document.write(`${i} crow on the wall. ${i} single crow.\n It fell down and became a wight. There's no one left to defend Westeros now.`)
}
