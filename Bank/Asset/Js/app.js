(function(){
    userAmount = 1000;
    let ask = prompt("Welcome, What do you want to perform. \r\n 1. Balance \r\n 2. Withdraw \r\n 3. Deposit \r\n 4. Transfer");
    if(ask == 1){
        console.log("Your account balance is: "+userAmount);    
    }
    else if(ask == 2){
        let amt = prompt("How much money do you want to withdraw? \r\nMaximum: 10,000 ");
        parseFloat(amt);
        if (userAmount - amt < 0 ){
            console.log("User can not withdraw this amount. your balance is "+ userAmount);
        }
        else if(amt>10000){
            console.log("User can not withdraw this amount of money.")
        }
        else{
            let newUserAmount = userAmount - amt;
            console.log("You have successfully withdrawn " + amt + " birr.") ;
            console.log("Current balance " + newUserAmount)
        }
    }
    else if (ask == 3){
        let amt = prompt("How much money do you want to Deposit? ");
        let newUserAmount = userAmount + parseFloat(amt); 
        console.log("You have successfully deposited "+ amt + " birr");
        console.log("Your current account balance: " + newUserAmount);
    }
    else if (ask == 4){
        let amt = prompt("How much money do you want to Transfer?");
        let acc = prompt("Enter the account number: \r\ni.e. account number is 10 digits");
        if (acc.length != 10){
            console.log("Bank account number is invalid");
        }
        else if (userAmount - amt < 0 ){
            console.log("User can not withdraw this amount. your balance is "+ userAmount);
        }
        else{
            let newBalance = userAmount - parseFloat(amt);
            console.log("You have transferred amount " + amt+ " to " + parseInt(acc));
            console.log("Your current balance: "+ newBalance);
        }
    }
    else{
        console.log("Incorrect input.")
    }

})();
