function spyOn (func) {
    // I spy with my little eye… your code here
    let arr = [], count = 0, val;
    
    const spy = function () {
      count++;
      arr.push(...arguments);
      val = func.apply(null, arguments);
      
      return val
    }
    
    spy.callCount = () => count;
    spy.returned = (item) => item === val;
    spy.wasCalledWith = (item) => arr.some( items => items === item);
    
    return spy;
  }