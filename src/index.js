const fibonacci = () => {
    const fiboArray = [];    
    let lastNum = 0;    
    let value = 0;
    let nextNum = 0;

    for (let index = 0; index <= 350; index = nextNum) {               
        fiboArray.push(nextNum);        
        lastNum = value;        
        value = nextNum;        
        nextNum = lastNum + value;        

        if (nextNum == 0) {
            nextNum = 1;
        }         
    }    

    return fiboArray;
}

const isFibonnaci = (num) => {
    const found = fibonacci().find(function(element) { 
        return element === num; 
        }); 
      
      if (found) {
          return true;
      } else {
          return false;
      }
}

console.log(isFibonnaci(5))


module.exports = {
    fibonacci,
    isFibonnaci
}