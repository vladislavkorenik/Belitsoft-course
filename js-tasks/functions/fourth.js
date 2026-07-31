// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
    let arr = string.split('.'), s = this;
    
    for (let i = 0; i <= arr.length - 1; i++) {
      if(arr[i] in s){
        s = s[arr[i]];
      }
      else {
        s = undefined;
        break;
      }
    }
    
      return s;
    }