function isSantaClausable(obj) {
    let arr = ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'];  
  
    if(typeof obj[arr[0]] === 'function' && typeof obj[arr[1]] === 'function' && typeof obj[arr[2]] === 'function') {
      return true;
    }
  
    return false;
  }