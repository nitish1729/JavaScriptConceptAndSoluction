        // Arrat
        const ArrayName = ["Nitish Mehta",1729,3.80,10,20,30,40,60,7,70,50,];
        const NewArray = new Array(3.14,6.6743,9.8,"Nitish Mehta",90,95,80,85,94);
        console.log(NewArray);
        console.log(ArrayName);
        console.log(ArrayName.length);
        console.log(ArrayName.length-1);
        console.log(ArrayName.length-5);
        console.log();

       
       // 1. push()
        // The push() method adds a new element to an array (at the end):
        console.log("before added new element in Array- ArraYName"); 
        console.log(ArrayName); 
        console.log("Array Length : "+ ArrayName.length);
        console.log(ArrayName.push("Bridgelabz"));
        console.log("added new element in by using (push Method) Array- ArraYName"); 
        console.log(ArrayName); // added new element in the array list
        console.log("Array Length : "+ArrayName.length);
        let length = ArrayName.push("Bridgelabz");


    // Use pop() or shift() method to delete element from Array instead of Delete
    // bz delete leaves undefined holes in the array.
        // 2. pop()
        //  The pop() method removes the last element from an array:
        console.log("The pop() method removes the last element from an array:");
        console.log("removing [BridgeLazs] by using pop method from ArrayName");
        console.log("Array Length : "+ArrayName.length);
        console.log("'''''''''''''''''''''''''''''");
        console.log(ArrayName.pop("bridelabz"));
        ArrayName.pop();
       
        console.log(ArrayName.pop());
        console.log("Array Length : "+ArrayName.length);
        console.log(ArrayName);
       
       // 3. unshift()
        // The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
        console.log("'''''''''''''''''''''''''''''");
        console.log(ArrayName.unshift("Lemon"));
        console.log(ArrayName);

       
      
       // 4. shift()
        // The shift() method removes the first array element and "shifts" all other elements to a lower index.
        console.log("Array Length : "+ArrayName.length);
        console.log(ArrayName);
        ArrayName.shift(); // method removes the first array element
        console.log("removes the first array element  "+ArrayName.shift());
        console.log("Array Length : "+ArrayName.length);
        // The shift() method returns the value that was "shifted out":
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        console.log(fruits.shift());
        fruits[0] = {fruits:20}
        console.log(fruits);

        // 5. concat() 
        //Merging (Concatenating) Arrays
       // The concat() method creates a new array by merging (concatenating) existing arrays:
       console.log("'>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'");
       console.log("The concat() method creates a new array by merging (concatenating) existing arrays:");
       const Merging1 = ["Emp Id : 280880,  "+"Name: Nitish Mehta",];
       const Merging2 = new Array("Compay : Axa Business Serive,  " + "Salary : 22000");
       const Merging3 = new Array("City : Bangalore,  "+ " Area : Manayata Tech Park");

       console.log("Merging Three Arrays by concat() method");// Merging Three Arrays
        const Details = Merging1.concat(Merging2,Merging3);
        console.log(Details);
        console.log("'>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'");
        const Details1 = Merging2.concat(Merging1,Merging3);
        console.log(Details);
        console.log("'>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'");
        const Details2 = Merging3.concat("State : karnataka");
        console.log(Details2);
        //  const Details4 = Merging1.concat(Merging2,Merging3);
        //  console.log(Details4);

        const arr1 = ["Cecilie", "Lone"];
        const arr2 = ["Emil", "Tobias", "Linus"];
        const arr3 = ["Robin", "Morgan"];
        const myChildren = arr1.concat(arr2, arr3);
        console.log(myChildren);

        // Splicing and Slicing Arrays
        console.log("'>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'");
        console.log("Splicing and Slicing Arrays");
       
        const Merging5 = ["Emp Id : 280880,  "+"Name: Nitish Mehta",];
        console.log(Merging5);
        console.log("The splice() method adds new items to an array")
        //The first parameter (2) defines the position where new elements should be added (spliced in)
        //The second parameter (0) defines how many elements should be removed.
        Merging5.splice(1, 2, "Woring Days : 5");
        console.log(Merging5.splice( 1,1, "Woring Days : 5"+ ""));
        console.log(Merging5);

         // Using splice() to Remove Elements
         // With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

         const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
        //  The first parameter (0) defines the position where new elements should be added (spliced in).

        //  The second parameter (1) defines how many elements should be removed.
         console.log(fruits1.splice(0, 1));  
         console.log(fruits1); 

         console.log("'>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'");
        //JavaScript Array slice()
        // The slice() method slices out piece of an array into a new array.
        // The slice() method creates a new array.

        // The slice() method does not remove any elements from the source array.
        console.log("The slice() method does not remove any elements from the source array.\n"+ "The slice() method creates a new array.");
        
        const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
        console.log(fruits2);
        const citrus = fruits2.slice(1); // new array
        const citrus1 = fruits.slice(1, 3); 
        const citrus2 = fruits.slice(1);
        console.log(citrus);
        console.log(citrus1);
        console.log(citrus2);


    //     const Merging1 = ["Emp Id : 280880,  "+"Name: Nitish Mehta",];
    //    const Merging2 = new Array("Compay : Axa Business Serive,  " + "Salary : 22000");
    //    const Merging3 = new Array("City : Bangalore,  "+ " Area : Manayata Tech Park");
    console.log("'>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'");
    //    Automatic toString()
          console.log(Merging1.toString());
          console.log(Merging2.toString());
          console.log(Merging3.toString());
          const Details4 = Merging1.concat(Merging2,Merging3);
          console.log("'>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'");
          console.log(Details4);
          console.log("'>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'");
          console.log(Details4.toString());
         // console.log(Merging1);

         //  JavaScript Sorting Arrays
         console.log("'>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'");
         // The sort() method sorts an array alphabetically:
         console.log("Sorting an Array");
         console.log("Sorting an Array : - The sort() method sorts an array alphabetically:");
         console.log(Details4.sort());

         // Reversing an Array
         // The reverse() method reverses the elements in an array.
         console.log("Reversing an Array");
         console.log ("The reverse() method reverses the elements in an array");
         console.log(Details4.reverse());
       //  console.log(Details4.reduce());
       //  console.log(Details4.reduceRight());
       //  console.log(Details4.map());
       console.log("Sorting an Array : - The sort() method sorts an array alphabetically:");
       const points = [40, 100, 1, 5, 25, 10];
       console.log.sort(function(a, b){return a - b});