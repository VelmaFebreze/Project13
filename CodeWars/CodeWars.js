function flickSwitch(arr) {
    let switchValue = true;
    return arr.map(item => {
      if (item === 'flick') {
        switchValue = !switchValue;
      }
      return switchValue;
    });
  }
  
  // Test cases
  console.log(flickSwitch(['codewars', 'flick', 'code', 'wars'])); 
  console.log(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine'])); 
  console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick'])); 
  