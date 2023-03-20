function filter(sourceArray, conditionFunc){
   let newArray = [];

   for ( let i = 0; i < sourceArray.length; i++){
     let currentItem = sourceArray[i];
     const conditionPassed = conditionFunc(currentItem)
     if (conditionPassed) {
        newArray.push(currentItem)
     }
   }
   return newArray;
}

const startsWithsh = (item) => item.startsWith('sh')
const endsWitht = (item) => item.endsWith('t')
const filtered = filter(['shoe', 'clothes', 'bag', 'pant', 'bag', 'shit'], endsWitht)

console.log(filtered)