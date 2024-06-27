
/**
 1-peka på rätt class
 2-gå igenom varenda av de classarna 
 3-med click event add/remove active class
 */

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click',
        () => {
            removeActiveClasses()
            panel.classList.add('active')
        })
})

function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}