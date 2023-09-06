
// var a = prompt("enter your value")
// do
// {
//     document.write("hello" + "<br>");
//     a++;
// }
// while(a<= 10)

    let sum = 0
    function myFunction(x, ...numbers){
        for (a in numbers)
        {
            sum += numbers[a]
        }
        console.log(sum)
    }

myFunction("appp" , 34 , 6)