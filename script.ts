const toggletButton= document.getElementById("toggle-skills") as HTMLButtonElement
 const skills=document.getElementById("skills") as HTMLElement

 toggletButton .addEventListener("click",() =>{
     if(skills.style.display ==="none") {
         skills.style.display ="block"
     }else{
         skills.style.display = "none"
     }
});
