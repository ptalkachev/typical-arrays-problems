
exports.min = function min (array) {

  if(typeof(array) == 'object' && typeof(array[0]) == 'number') {
      return Math.min(...array);
    }else{
      return 0;
    }
}

exports.max = function max (array) {

  if(typeof(array) == 'object' && typeof(array[0]) == 'number'){
    return Math.max.apply(null, array);
  }else{
    return 0;
  }

}

exports.avg = function avg (array) {
  
  let sum = 0;
  if(typeof(array) == 'object' && typeof(array[0]) == 'number'){
    for(let i = 0; i < array.length; i++){
      sum += array[i];
    }
    return sum / array.length;
  }else{
    return 0;
  }
  
}
