// Let's make a Cat constructor!
var Cat = (function () {
    // ... your code here.
    let length = 0, sum = 0;
    var cat = function (name, weight) {
      if(!name || !weight) {
        throw new Error('error');
      }
      
      length++;
      sum += weight;
      
      Object.defineProperty(this, 'weight',{set: function(v) {
      sum -= weight;
      sum += v;
      weight = v;
      }, get: function () {return weight}});
    }
    cat.averageWeight = () => {
       return sum / length;
     }
    return cat
   }());