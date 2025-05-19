document.querySelectorAll(".dp").forEach(dp => {
const dpBtn = dp.querySelector('.btn');
const dpMenu = dp.querySelector('.drop-down');
const arrow = dp.querySelector('.arrow-down');
const activeLabel = dp.querySelector('.active-label');

// toggle dropdown function
const toggleFunction = function(){
    dpMenu.classList.toggle('hidden');
    dpMenu.classList.toggle('show');
    arrow.classList.toggle('arrow')
    activeLabel.classList.toggle('active')
}

//  close all dropdowns
function closeAllDropdowns() {
    document.querySelectorAll(".drop-down").forEach(d => 
        d.classList.add("hidden"));

    document.querySelectorAll(".drop-down").forEach(d => 
        d.classList.remove("show"));
    
    document.querySelectorAll(".arrow-down").forEach(a => 
        a.classList.remove("arrow"));
    
    document.querySelectorAll(".active-label").forEach(c => 
        c.classList.remove("active"));  
}

function openDropdown() {
    dpMenu.classList.add('show');
    dpMenu.classList.remove('hidden');
    arrow.classList.add('arrow');
    activeLabel.classList.add('active');
}

// function closeDropdown() {
//     dpMenu.classList.remove('show');
//     dpMenu.classList.add('hidden');
//     arrow.classList.remove('arrow');
//     activeLabel.classList.remove('active');
// }

dpBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    const isOpen = dpMenu.classList.contains('show') && activeLabel.classList.contains('active');
    // closeDropdown();
    closeAllDropdowns();
    
     //close everything first
    if (!isOpen){
        openDropdown()
    }
});

})

const hamMenu = document.querySelector(".ham-menu");
const navBar = document.querySelector(".navBar");
const navPanel = document.querySelector(".navPanel");
const Overlay = document.querySelector(".overlay")

hamMenu.addEventListener('click', ()=>{
    hamMenu.classList.toggle("active")
    navBar.classList.toggle("active")
    navPanel.classList.toggle("active")
    // if(navBar.classList.contains('hidden')){
    //    navBar.classList.remove("hidden") 
    // }else{navBar.classList.add("hidden")}
})

Overlay.addEventListener('click',()=>{
    navBar.classList.remove("active")
    navPanel.classList.remove("active")
    hamMenu.classList.remove("active")
})
 