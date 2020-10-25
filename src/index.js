
module.exports = function towelSort (matrix) {
  if(matrix === undefined){
    return []
  }
  let flattened
  if (Array.isArray(matrix[0])){
    flattened = matrix.reduce((acc, curVal,ind) => {
      if (ind%2==0){
        return acc.concat(curVal)
      }
      else {
        return acc.concat(curVal.reverse())
      }
      
      }, []);
      
  }
  else { 
    return []
  }
  
 return flattened 
}
