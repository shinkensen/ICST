let rocket= document.getElementById("rocket");
let height=0;
let start=false;
let asteroidsX=[],asteroidsY=[],asteroidsSize=[]
document.addEventListener("keydown",function(event){
    if ((event.key=== 's')&&height<540){
        height+=10;
        rocket.style.marginTop = `${height}px`;
    }
    if (event.key=== 'w' &&height>0){
        height-=10;
        rocket.style.marginTop = `${height}px`;
    }
})