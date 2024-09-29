function calculateMoney(ticketSale) {
   
    const selltk =120 
    const forGuard = 500
    const stuff = 8 
    const stuffFood = 50
   
    const save = (ticketSale*selltk)-(forGuard+(stuff*stuffFood))
    if (ticketSale<0){
        
        return "invalid number";
    }
   
    return save;
    
}
const get = calculateMoney(-10)
console.log(get)

