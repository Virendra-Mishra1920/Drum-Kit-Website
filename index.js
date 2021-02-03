var len=document.querySelectorAll('button').length

for(let i=0;i<len;i++)
{
    document.querySelectorAll('button')[i].addEventListener("click",function(){
      
        //Getting text 
        var innerHTMLTxt=this.innerHTML;
        makeSound(innerHTMLTxt);
        //Add Animation
        buttonAnimation(innerHTMLTxt);
       
    })
}


//key press
document.addEventListener('keypress',function(event){
    makeSound(event.key);
    //Add Animation
    buttonAnimation(event.key);
  
})

function makeSound(keys){
  
    switch (keys) {

        case 'w':
        const audio1=new Audio("sounds/tom-1.mp3")
         audio1.play();
            break;

            case 'a':
            const audio2=new Audio("sounds/tom-2.mp3")
            audio2.play();
             break;

              case 's':
               const audio3=new Audio("sounds/tom-3.mp3")
                audio3.play();
                 break;

                case 'd':
               const audio4=new Audio("sounds/tom-4.mp3")
              audio4.play();
                break;

                case 'k':
                const audio5=new Audio("sounds/snare.mp3")
                 audio5.play();
                 break;

                 case 'j':
                 const audio6=new Audio("sounds/crash.mp3")
                audio6.play();
               break;

             case 'l':
            const audio7=new Audio("sounds/kick-bass.mp3")
            audio7.play();
            break;
                                    
    
        default:
            break;
    }


}

function buttonAnimation(currentKey){
   var activeButton= document.querySelector("."+currentKey)
  activeButton.classList.add("pressed");

  setTimeout(function(){
      activeButton.classList.remove("pressed")
  },100)

}