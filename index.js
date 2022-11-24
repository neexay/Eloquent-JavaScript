//Решение первой задачи
document.getElementById("triangle").onclick =function () {
    let result="#";
    for (let i=0;i<=7;i++){
        console.log(result);
        result+="#";
    }
}
//----------------------------------------------------------------------------------------------------------------------
//Решение второй задачи
document.getElementById("FizzBuzz").onclick =function () {
    for (let i=1;i<=100;i++){
        let result="";
        if (i % 3===0){
           result+="Fizz";
        }
        if(i % 5===0){
           result+="Buzz";
        }
        if (result.length<1){
            console.log(i);
        }else {
            console.log(result);
        }
    }
}
//----------------------------------------------------------------------------------------------------------------------
//Решение третей задачи
document.getElementById("chess").onclick =function () {
    let result="";
    for (let i=0;i<=7;i++){
       for (let j=0;j<=7;j++){
         if ((j+i)%2===0){
             result+="#";
         }else {
             result+=" ";
         }
       }
        result+="\n";
    }
    console.log(result);
}
//----------------------------------------------------------------------------------------------------------------------





