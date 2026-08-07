//const todoComp
//I want to create a webpage that tells you interesting things about plants. You want to be able to type in four different plants and then have a picture of that plant pop up, and then click that plant to learn more information.

// document.querySelector('#come back to this after I figure out the prompt to run the JS').addEventListener('click', care)

const sorrel = document.querySelector('#sorrel') 
const mint = document.querySelector('#mint')
const chervil = document.querySelector('#chervil')
const lavender = document.querySelector('#lavender')

document.querySelector('.Sorrel').addEventListener('click', care)
document.querySelector('.Mint').addEventListener('click', care)
document.querySelector('.Chervil').addEventListener('click', care)
document.querySelector('.Lavender').addEventListener('click', care)


document.querySelector('form').addEventListener('submit', facts)

function facts(){
    event.preventDefault()
    const learn = document.querySelector('#learn').value.toLowerCase()

     if (learn === 'sorrel') {
        care({ target: document.querySelector('.Sorrel') })
        } else if (learn === 'mint') {
            care({ target: document.querySelector('.Mint') })
        } else if (learn === 'chervil') {
            care({ target: document.querySelector('.Chervil') })
        } else if (learn === 'lavender') {
            care({ target: document.querySelector('.Lavender') })
        }
    }

    

function care(click){

    const herb = click.target.closest('.Sorrel, .Mint, .Chervil, .Lavender')
    if (!herb) return

    if(herb.classList.contains('Sorrel')){
        sorrel.classList.toggle('hidden')
        mint.classList.add('hidden')
        chervil.classList.add('hidden')
        lavender.classList.add('hidden')
        }
     else if(herb.classList.contains('Mint')){
        sorrel.classList.add('hidden')
        mint.classList.toggle('hidden')
        chervil.classList.add('hidden')
        lavender.classList.add('hidden')
        }
     else if(herb.classList.contains('Chervil')){
        sorrel.classList.add('hidden')
        mint.classList.add('hidden')
        chervil.classList.toggle('hidden')
        lavender.classList.add('hidden')
        }
    else if(herb.classList.contains('Lavender')){
        sorrel.classList.add('hidden')
        mint.classList.add('hidden')
        chervil.classList.add('hidden')
        lavender.classList.toggle('hidden')
        }
        
}
