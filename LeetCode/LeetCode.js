function argumentsLength(...args) {
    return args.length;
  }
  
  // Example 1
  const example1Args = [5];
  const example1Result = argumentsLength(...example1Args);
  console.log(example1Result); 
  
  // Example 2
  const example2Args = [{}, null, "3"];
  const example2Result = argumentsLength(...example2Args);
  console.log(example2Result); 
  