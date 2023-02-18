
/*document.getElementById("button").onclick = myFunction;

        function myFunction(arg) {
            console.log(arg);
        }
        myFunction(10);
        console.log("End of the program");*/

        function myDisplayer(shiji) {
            document.getElementById("demo").innerHTML = shiji;
          }

        function myCalculator(num1, num2) {
            let sum = num1 + num2;
            return sum;
          }
          let shiji = (myCalculator(47,8));
          
          myDisplayer(shiji);