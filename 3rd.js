function deleteInvalids(array) {

if (!Array.isArray(array) ){
    console.log(array)
   return "Invalid Array"; 
}
return array.filter(
    function(item){
        return typeof item === "number" && !isNaN(item);

    });
    

}
const array = [ NaN, 1, 12,0 ,-1 , undefined];
console.log(deleteInvalids(array));