let userAmount;

function deposit(amt){
    return userAmount + parseFloat(amt); 
}

function withdraw(amt){
    if (userAmount - amt < 0 ){
            console.log("User can not withdraw this amount. your balance is "+ userAmount);
    }
    else if(amt>10000){
        console.log("User can not withdraw this amount of money.")
    }
    else{
        return userAmount - amt;
    }
}

function balance(){
    return userAmount;
}

function transfer (amt){
    if (userAmount - amt < 0 ){
        console.log("User can not withdraw this amount. your balance is "+ userAmount);
    }
    else{
        return userAmount - amt;
    }
}

(function(){
    userAmount = 1000;
    let ask = prompt("Welcome, What do you want to perform. \r\n 1. Balance \r\n 2. Withdraw \r\n 3. Deposit \r\n 4. Transfer");
    if(ask == 1){
        console.log("Your account balance is: "+balance());    
    }
    if (ask == 2){
        let asked = prompt("How much money do you want to withdraw?");
        withdraw(asked);
        console.log("YOu have successfully withdrawn " + asked + " amount of money.")
        console.log("Your current account balance is: "+balance());    
        
    }
    if (ask == 3){
        let asked = prompt("How much money do you want to Deposit?");
        deposit(asked);
    }
    if (ask == 4){
        let asked = prompt("How much money do you want to Transfer?");
        transfer(asked);
    }
if(ask == 5){
    let amt = prompt("How much money do you want to withdraw?");
    if (userAmount - amt < 0 ){
        console.log("User can not withdraw this amount. your balance is "+ userAmount);
}
else if(amt>10000){
    console.log("User can not withdraw this amount of money.")
}
else{
    console.log(userAmount - amt) ;
}
}

})();