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
        idcrd = `#crd${i}`              
        document.querySelector(idcrd).innerHTML = `<img src="imgs/img${imgs[i]}.jpg">`
        console.log("iii",i)            
        
        open++;
        
        if (open%2==0){ 
            document.querySelector('#try').innerHTML = `נסיון מספר ${open/2} ` 
            if (imgs[i]==imgs[guess1]){                
                    // alert("great u")
                    cards[guess1].canopen=false;
                    score++;
                    guess1=-1; 
            }   
            else{
                   cards[i].canopen=true;
                   cards[guess1].canopen=true;
                   setTimeout(()=>casefalse(i),120)                    
            }         
        }  
        else{
            guess1=i;
            cards[i].canopen=false; 
        }     
    }   
}      

function casefalse(i){
    alert ("אויויוויי")    
    document.querySelector(`#crd${i}`).innerHTML = ''
    document.querySelector(`#crd${guess1}`).innerHTML = ''
    // guess1=-1;
   
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
