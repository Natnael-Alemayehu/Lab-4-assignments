let sub = function(a,b){
    return a - b;
}

let div = function(a,b){
    return a/b;
}

(function () {
        // // let choose = prompt("Write your operation");
        // switch (choose){
        //     case "+":
        //         let ch = prompt("Wow many operands do u want : ")
        //         let arr = new Array();
        //         for(let i ; i < parseInt(ch) ; i++){
        //                  arr[i] = prompt(`Enter the ${i+1} number : `)
        //         }
        //         arr.forEach(function(numbers){
        //             numbers = 0;
        //             numbers += numbers;
        //         });
        //         };
// })();

(function(){
    let choose = prompt("Write your operation");
    switch (choose){
        case "+":
             let ch = prompt("Wow many operands do u want : ")
             let arr = new Array();
             for(let i ; i < parseInt(ch) ; i++){
                      arr[i] = prompt(`Enter the ${i+1} number : `)
             }
             arr.forEach(function(numbers){
                 numbers = 0;
                 numbers += numbers;
             });
             };
})(); 