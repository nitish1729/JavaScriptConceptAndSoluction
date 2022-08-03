
var PrimeNum= 14; count = 0;
for(i = 1; i<=PrimeNum; i++)
{
  if( PrimeNum % i == 0)
  {
    count++;
  }
}
if(count ==2)
{
    console.log("Given number is prime");
}
else
{
    console.log("Given number is not prime number");
}