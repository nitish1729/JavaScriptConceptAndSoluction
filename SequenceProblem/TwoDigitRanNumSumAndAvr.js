// declaring Variable
var randomNum ;
var Sum = 0;
var Avg = 0;

for(let i =1;i<=5;i++)
{   
   // Returns a two random integer between 10 to 99.
    randomNum = Math.floor(Math.random() * 99)+10;
    console.log(randomNum);
   
     if(randomNum<10)
     {
      console.log(randomNum);
     }
   Sum+=randomNum;
}

console.log("Sum of 5 two diigits random number of = "+Sum);

Avg = Sum/5;
console.log("Avg of 5 two diigits random number of = "+Avg);
