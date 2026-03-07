const PI = 3.14;

function Circumference(){
    let radius = Number(document.getElementById("radius").value);
    let Result = 2 * PI * radius;
    console.log(radius);
    document.getElementById("answer").innerHTML = Result;
    console.log(Result);
}

function Area(){
    let radius = Number(document.getElementById("radius").value);
    let Result = PI * radius * radius;
    console.log(radius);
    document.getElementById("answer").innerHTML = Result;
    console.log(Result);
}

function Diameter(){
    let radius = Number(document.getElementById("radius").value);
    let Result =  2 * radius ;
    console.log(radius);
    document.getElementById("answer").innerHTML = Result;
    console.log(Result);
    
}

function Arc_length(){
    let radius = Number(document.getElementById("radius").value);
    let tetha = Number(document.getElementById("tetha").value);
    
    if (!tetha) {
        alert("Tetha is required")
    } else {
    let Result =  (tetha/360) * 2 * PI * radius ;

    console.log(radius);
    document.getElementById("answer").innerHTML = Result;
    console.log(Result);
    }
}

function Sector_Area(){
    let radius = Number(document.getElementById("radius").value);
    let tetha = Number(document.getElementById("tetha").value);
    
     if (!tetha) {
        alert("Tetha is required")
    } else {
    let Result =  (tetha/360) * PI * radius * radius ;

    console.log(radius);
    document.getElementById("answer").innerHTML = Result;
    console.log(Result);
    }
}

function Chord_length(){
    let radius = Number(document.getElementById("radius").value);
    let tetha = Number(document.getElementById("tetha").value);
    
 if (!tetha) {
     alert("Tetha is required")
 } else {
    let Result = 2 * radius * Math.sin((tetha * PI / 180) / 2) ;
    console.log(Math.sin((tetha * PI / 180) / 2));
    console.log(radius);
    document.getElementById("answer").innerHTML = Result;
    console.log(Result);
 }
}


function Calculate(){
    let Action = document.getElementById("Action").value;
    console.log(Action);


    if(Action === "Circumference"){
        Circumference();
    } else  if(Action === "Area"){
        Area();
    } else  if(Action === "Diameter"){
        Diameter();
    } else  if(Action === "Circumference"){
        Circumference();
    } else  if(Action === "Arc Length"){
        Arc_length();
    } else  if(Action === "Sector Area"){
        Sector_Area();
    } else  if(Action === "Chord length"){
        Chord_length();
    } 
}




