function checkName(name) {
     const letter =['a', 'y', 'i' , 'e' , 'o' , 'u', 'w' ,'A' ,'Y','I','E','O','U','W'] ;

     const element = name[0];
     if ( letter.includes(element)){
        return "Bad Name" ;}

        else if(typeof name !=="string")
        {
            return "invalid";
        }

         return "Good Name";
        
}
const check = checkName("wowo")
console.log(check)


