
const cal = document.querySelector(".cal");
cal.addEventListener("click" , () => {
    console.log("clicked")
    const input = document.querySelector("#input");
    const output = document.querySelector(".output")
    let userInput = input.value;
    console.log(userInput)
    if(userInput == "" || userInput < 0 || isNaN(userInput))
    {
        alert("Please enter a valid number");
        return
    }
    userInput = parseFloat(userInput);

    const radians = (userInput * Math.PI) / 180;
    const sinValue = Math.sin(radians);
    const cosValue = Math.cos(radians);
    const tanValue = Math.tan(radians);
    const secValue = 1 / cosValue; 
    const cosecant = 1 / sinValue;
    const cot = 1 / tanValue

    console.log(`The sine of ${userInput} degrees is: ${sinValue}`);
    console.log(`The cosine of ${userInput} degrees is: ${cosValue}`);
    console.log(`The tangent of ${userInput} degrees is: ${tanValue}`);
    console.log(`The secant of ${userInput} degrees is: ${secValue}`);
    console.log(`The cosecant of ${userInput} degrees is: ${cosecant}`);
    console.log(`The cot of ${userInput} degrees is: ${cot}`)
    
    // Display output
    output.innerHTML = `
        <p>The sine of ${userInput} degrees is: ${sinValue.toFixed(4)}</p>
        <p>The cosine of ${userInput} degrees is: ${cosValue.toFixed(4)}</p>
        <p>The tangent of ${userInput} degrees is: ${tanValue.toFixed(4)}</p>
        <p>The secant of ${userInput} degrees is: ${secValue.toFixed(4)}</p>
        <p>The cosecant of ${userInput} degrees is: ${cosecant.toFixed(4)}</p>
        <p>The cot of ${userInput} degrees is: ${cot.toFixed(4)}</p>
       
    `;
})