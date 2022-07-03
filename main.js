let cards = []
let guess1= -1
let score = 0
let open = 0

class Card{
    constructor (imgnum){
        this.canopen = true;
        this.imgnum = imgnum
    }

    addtoboard(i,imgnum){
        // let card=document.createElement("button");
        let card=document.createElement("div");
        card.classList.add("card");
        card.id='crd'+i.toString();
        // card.innerHTML = `<img src="imgs/img${imgnum}.jpg">`
        card.onclick = function(){
            opencard(i);
        }
        document.querySelector('.board').appendChild(card)
    }
}


function opencard(i){
    if (cards[i].canopen){
        console.log("iiiii")
        console.log((i))        
        idcrd = `#crd${i}`
        document.querySelector(`#crd${i}`).innerHTML = `<img src="imgs/img${imgs[i]}.jpg">` 
        // document.querySelector(`#crd${i}`).innerHTML = `3`       
        cards[i].canopen=false;
        open++;
        console.log("open")
        console.log(open)
        if (guess1==-1){
            guess1=i; 
        } 
        if (open%2==0){ 
            document.querySelector('#try').innerHTML = `נסיון מספר ${open/2} ` 
            if (imgs[i]==imgs[guess1]){                
                    // alert("great u")
                    cards[guess1].canopen=false;
                    score++;
                    guess1=-1; 
            }   
            else{
                    setTimeout(()=>casefalse(i),30)
                    cards[i].canopen=true;
                    cards[guess1].canopen=true;
            }                                     
                    
        }       
    }   
}      

function casefalse(i){
    alert ("אויויוויי")    
    document.querySelector(`#crd${i}`).innerHTML = ''
    document.querySelector(`#crd${guess1}`).innerHTML = ''
    guess1=-1;
    console.log(guess1)
}

function alertthis(x){
    alert(x)
}

function makecards(){
    imgs=[]
    for (i=0;i<18;i++){
        imgs[i]=i%9+1
    }
imgs.sort(()=>0.5-Math.random())

    console.log(imgs)
    for (i=0;i<18;i++){
        let cardd= new Card(imgs[i]);
        cardd.addtoboard(i,imgs[i]);
        cards[i] = cardd
    }
}

window.onload = ()=>{
    makecards();
}
