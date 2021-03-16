// Implement the following functions

const stringLib = () => { 

  function add(a, b){
    return a+b;
  }

  function sub(a, b){
    // sub a from b
    return b-a;
  }

  function mul(a, b){
    // mul a by b
    return a*b;
  }

  function div(a, b){
    // dib a by b
    return a/b;
  }

  function Exponentiation(a, b){
    // expont a of b
    return a**b;
  }

  function Increment(a, b){
    // inc a by b
    return add(a,b);
  }

  
  function Decrement(a, b){
    // dec a by b
    return sub(a,b);
  }
  
  function NumberListA(start,end){
    // return list of numbers starting at start and ending at end
    let resultArr = [];
    if(end>=start){
        for(i=start; i<=end; i++){
        resultArr.push(i);
      }
    }
    return resultArr;

  }

  function NumberListB(start,end, skipEvery){
    // return list of numbers starting at start and ending at end but skipping every N (ie: skip every 2, or skip every 3)
    let resultArr = [];
    let count = 0;
    if(end>=start){
      for(i=start; i<=end; i++){
        if(count!=skipEvery){
          resultArr.push(i);
          count++;
        }else{
          count = 0;
        }
      }
    }
    return resultArr;
  }

  function NumberListC(start,count, shouldBeRandomOrNot){
    // return list of numbers starting, continuing for (count) and a boolean to determine if the list of numbers should be random or not
    let resultArr = [];
    for(i=start; i<=start+count; i++){
      resultArr.push(i);
    }
    if(shouldBeRandomOrNot){
      resultArr.sort(()=>{return Math.random()-0.5});
      return resultArr;
    }else{
      return resultArr
    }
  }

  function IsOdd(aNumber){
    // is a number odd? true false
    if(aNumber%2 != 0){
      return true;
    }else{
      return false;
    }
  }        

  function IsEven(aNumber){
    // is a number even? true false
    if(aNumber%2 == 0){
      return true;
    }else{
      return false;
    }
  }        

  function RandomNumberList(start,end){
    // return list of random numbers between start and end
    let resultArr = [];
    if(end>=start){
      for(i=start; i<=end; i++){
        resultArr.push(i);
      }
      return resultArr.sort(()=>{Math.random()-0.5});
    }

  }        

  function RandomNumberList(start,end,count, allowDuplicates){
    // return count number of random numbers, between start and end. use allowDuplicates to choose if we should allow duplicates in the list or not
    let tempArr = [];
    let resultArr = [];
    let listLength = end-start+1;
    if(end>=start && listLength>=count){
      for(i=start; i<=end; i++){
        tempArr.push(i);
      }
      if(allowDuplicates){
        for(i=0; i<count; i++){
          let length = tempArr.length-1;
          let index = Math.floor(Math.random()*length);
          resultArr.push(tempArr[index]);
        }
      }else{
        for(i=0; i<count; i++){
          let length = tempArr.length-1;
          let index = Math.floor(Math.random()*length);
          resultArr.push(tempArr[index]);
          tempArr.splice(index,1);
        }
      }
      return resultArr;
    }
  }        


}