var Number = 100;
console.log("Print all even between 1 to 100");
for(var i = 0; i<Number; i++)
{
    if( i % 2 == 1)
    {
        continue;
    }
   console.log(i);
}

// Print all the odd Number between 1 to 100;
console.log("Print all odd between 1 to 100");
var Number1 = 100;
for(var i = 0; i<Number; i++)
{
    if( i % 2 == 0)
    {
        continue;
    }
   console.log(i);
}
