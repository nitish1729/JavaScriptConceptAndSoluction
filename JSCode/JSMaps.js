// JavaScript Maps
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

   // Create a Map
//    You can create a JavaScript Map by:
//    Passing an Array to new Map()
//    Create a Map and use Map.set()
         // Create a Map
         const Employee = new Map([
            ["EmpID", 369],
            ["FirstName", "Nitish"],
            ["LastName", "Mehta"],
            ["Address", "BTM Layout 1st Stage"],
            ["PhoneNo.", "8252669501"],
            ["Emial ID", "MehtaN@gmail.com"],
            ["Sub", "Math,Physics,Chemisty,English,Computer Science"]
          ]);

  console.log(Employee);
  console.log("'>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'");
      // The set() Method
      // Add elements to a Map with the set() method:
      console.log("Add elements to a Map with the set() method:");
      // Create a Map
      const student = new Map();
     // Set Map Values
     student.set("Roll_No", 171);
     student.set("Name", "Gungun Mehta");
     student.set("Standard", 12); 
     student.set("Marks", 460);
   
     console.log("'>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'");
    //  console.log(student);
     
    //  console.log(student);
    //  console.log(student);
     console.log(student);
     //The get() Method
     // The set() method can also be used to change existing Map values:
     console.log(student.set("Sub", "Math,Physics,Chemisty,English,Computer Science"));
     
     console.log("'>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'");
     //The get() Method
     //The get() method gets the value of a key in a Map:
     student.set("Sub");
     console.log("'>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'");
    //  The size Property
    //  The size property returns the number of elements in a Map: 
     console.log(student.size);
    console.log("'>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'");
    // The delete() Method
    // The delete() method removes a Map element:
    console.log(student.delete("Sub"));
    console.log("'>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'");

    // The has() Method
    // The has() method returns true if a key exists in a Map:
  console.log(student.has("Sub"));

