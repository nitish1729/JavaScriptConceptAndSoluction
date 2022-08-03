var FibNum1 = 0;
var FibNum2 = 1;
var FibNum3;

console.log(FibNum1);
console.log(FibNum2);
for(var i = 0; i < 10; i++)
{

FibNum3 = FibNum1 + FibNum2;

console.log(FibNum3);
FibNum1 = FibNum2;
FibNum2 = FibNum3;
}
