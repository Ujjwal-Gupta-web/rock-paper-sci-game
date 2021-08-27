var x=0;
var computer=0;
computer=Math.floor(Math.random() * 3)+1;
var compSelected='';
document.getElementById('selected-2').style.backgroundSize="150px 150px";
document.getElementById('selected-1').style.backgroundSize="150px 150px";

switch(computer){
    case 1:compSelected='stone-right.png';
    break;
    case 2:compSelected='paper-right.png';
    break;
    case 3:compSelected='sci-right.png';
    break;
}

// console.log(compSelected);

document.getElementById('stone-1').addEventListener('click',()=>{
    x=1;
    document.getElementById('player-1').classList.remove('start');
    document.getElementById('choices-1').innerHTML='Response recorded';
    document.getElementById('choices-2').innerHTML='Let\'s see who wins';
    setTimeout(display,5000);
    document.getElementById('selected-1').style.backgroundImage='url("loading.gif")';
    document.getElementById('selected-2').style.backgroundImage='url("loading.gif")';
    setTimeout(vanish,2500);
    
});

document.getElementById('paper-1').addEventListener('click',()=>{
    x=2;
    document.getElementById('player-1').classList.remove('start');
    document.getElementById('choices-1').innerHTML='Response recorded';
    document.getElementById('choices-2').innerHTML='Let\'s see who wins';
    setTimeout(display,5000);
    document.getElementById('selected-1').style.backgroundImage='url("loading.gif")';
    document.getElementById('selected-2').style.backgroundImage='url("loading.gif")';
    setTimeout(vanish,2500);
    
});

document.getElementById('sci-1').addEventListener('click',()=>{
    x=3;
    document.getElementById('player-1').classList.remove('start');
    document.getElementById('choices-1').innerHTML='Response recorded';
    document.getElementById('choices-2').innerHTML='Let\'s see who wins';
    setTimeout(display,5000);
    document.getElementById('selected-1').style.backgroundImage='url("loading.gif")';
    document.getElementById('selected-2').style.backgroundImage='url("loading.gif")';
    setTimeout(vanish,2500);
    
});

// also chnage the dialog box to none after 3s.
function vanish(){
    document.getElementById('choices-1').innerHTML='';
    document.getElementById('choices-2').innerHTML='';
}

// to displat corresponding images in #selected-1 and #selected-2
// rotate the loadding circle for 5s
function display(){
    
document.getElementById('selected-2').style.backgroundImage=`url(${compSelected})`;

    if(x==1){
        document.getElementById('selected-1').style.backgroundImage="url('stone-left.png')";
        
    }
    else if(x==2){
        document.getElementById('selected-1').style.backgroundImage="url('paper-left.png')";
        
        
    }
    else if(x==3){
        document.getElementById('selected-1').style.backgroundImage="url('sci-left.png')";
        
        
    }
    winner();
}


// displays winner to a particular person in #disp div-1

function winner(){
    if(x==computer){
        document.getElementById('out').innerHTML='Its a tie!!';
        console.log('tie');
    }
    else {
        if(x==1 && computer==2){
            document.getElementById('out').innerHTML='You lost it';
            setTimeout(()=>document.querySelector('.winner-2').innerHTML='<img src="./winner.gif"/>',1200);
            
            
            setTimeout(express,600,'Noooo!!!!','YEah....');
        console.log('computer');
    }
    else if(x==2 && computer==3){
        document.getElementById('out').innerHTML='You lost it';
        setTimeout(()=>document.querySelector('.winner-2').innerHTML='<img src="./winner.gif"/>',1200);
        
        
        setTimeout(express,600,'Noooo!!!!','YEah....');
        console.log('computer');
    }
    else if(x==3 && computer==1){
        document.getElementById('out').innerHTML='You lost it';
        setTimeout(()=>document.querySelector('.winner-2').innerHTML='<img src="./winner.gif"/>',1200);
        
        
        setTimeout(express,600,'Noooo!!!!','YEah....');
        console.log('computer');
    }
    else{
        document.getElementById('out').innerHTML='You WON';
        setTimeout(()=>document.querySelector('.winner-1').innerHTML='<img src="./winner.gif"/>',1200);
        
        
        setTimeout(express,600,'YEah....','Noooo!!!!');
        console.log('user');
    }
    }
}

// to change the selection bar to different kind of expressions(Yesss, Oh no, yeah!!, Nhiiii) 
// after the result gets displayed with a delay of 2s

function express(a,b){
    document.getElementById('choices-1').innerHTML=a;
    document.getElementById('choices-2').innerHTML=b;   
}
