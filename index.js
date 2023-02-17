const containerElement = document.querySelector(".container");
const newButton = document.getElementById("new");

//create the container for color
for(let i = 0; i < 50; i++){
    let dynamicColorContainer = document.createElement("div");
    dynamicColorContainer.classList.add("color-container");
    containerElement.appendChild(dynamicColorContainer);
}

const dynamicColorContainers = document.querySelectorAll(".color-container");


//generate random color 
const getRandomColor = ()=>{
    let colorCharacter = "0123456789abcdef";
    let colorCodeLength = 6;
    let colorCode = '';
    
    for(let i = 0; i < colorCodeLength; i++){
        let randomColorNum = Math.floor(Math.random() * colorCharacter.length);
        colorCode += colorCharacter.substring(randomColorNum, randomColorNum + 1);
    }
    return colorCode;
}


//add random color to the container
const addRandomColor = ()=>{
    dynamicColorContainers.forEach((dynamicColorContainer)=>{
        let randomColor = getRandomColor();
        dynamicColorContainer.style.backgroundColor = "#" + randomColor;
        dynamicColorContainer.innerHTML = "#" + randomColor;
    });
}
addRandomColor();


//refresh the page
newButton.addEventListener("click", ()=>{
    window.location.reload();
})


