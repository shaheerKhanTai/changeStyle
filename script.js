let text = "Hello My name is Shaheer."
let text2 = "Going to Lahore"
function changeHeading(){
    document.getElementById("button").addEventListener(
        "click", function(){
            document.getElementById("changeHead").innerHTML = text;
        })
}

function changePara(){
    document.getElementById("button").addEventListener(
        "click", function(){
            document.getElementById("changeP").innerHTML = text2;
        })
}

changeHeading();
changePara();

function changeColor(){
    document.getElementById("colorButton").addEventListener(
        "click", function(){
            document.getElementById("changeHead").style.backgroundColor = "purple";
            document.getElementById("changeHead").style.color = "white";
            document.getElementById("changeP").style.backgroundColor = "lightgreen";
            document.getElementById("changeP").style.color = "darkgreen";
        })
}

function changeFont(){
    document.getElementById("fontButton").addEventListener(
        "click", function(){
            document.getElementById("changeHead").style.fontFamily = "'Courier New', monospace";
            document.getElementById("changeP").style.fontFamily = "'Brush Script MT', cursive";
        })
}

function changeSize(){
    document.getElementById("sizeButton").addEventListener(
        "click", function(){
            document.getElementById("changeHead").style.fontSize = "48px";
            document.getElementById("changeP").style.fontSize = "32px";
        })
}

function changeCase(){
    document.getElementById("caseButton").addEventListener(
        "click", function(){
            let head = document.getElementById("changeHead");
            let para = document.getElementById("changeP");
            let makeUpper = head.innerHTML !== head.innerHTML.toUpperCase();
            head.innerHTML = makeUpper ? head.innerHTML.toUpperCase() : head.innerHTML.toLowerCase();
            para.innerHTML = makeUpper ? para.innerHTML.toUpperCase() : para.innerHTML.toLowerCase();
            this.textContent = makeUpper ? "Lower Case" : "Upper Case";
        })
}

function toggleTheme(){
    document.getElementById("themeButton").addEventListener(
        "click", function(){
            document.body.classList.toggle("dark-mode");
            this.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
        })
}

changeColor();
changeFont();
changeSize();
changeCase();
toggleTheme();