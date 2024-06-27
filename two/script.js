/**
1-peka på rätt id och class
2-ge knapparna egenskap att öka eller minska och var stanna
3-uppdatera click på knapparna med följande egenskaper
3.1- Med classList uppdatera platsen på active circle
3.2- Uppdatera progresss med active classen
3.3- Disabla knapparna på början och slut
 */

const progresss = document.getElementById('progresss');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circels = document.querySelectorAll('.circle');


let currentActive = 1;

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update()
})
next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circels.length) {
        currentActive = circels.length
    }

    update()
})

function update() {
    circels.forEach((circel, index) => {
        if (index < currentActive) {
            circel.classList.add('active')
        } else {
            circel.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progresss.style.width = (actives.length - 1) / (circels.length - 1) * 100 + "%"

    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circels.length) {
        next.disabled = true
    } else {
        prev.disabled = false;
        next.disabled = false
    }
}
