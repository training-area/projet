let cadre = document.getElementById('cadre')
let restart = document.getElementById('restart')
let couleurJoueur = ['red', 'green']
let joueur = 0
let caseCreer = []


for(let x = 0; x < 9; x++){
    let caseChoix = document.createElement('div')
    cadre.appendChild(caseChoix)
    caseChoix.className = 'textureCaseChoix'
    caseCreer.push(caseChoix)
}


for(let x = 0; x < 9; x++){
    caseCreer[x].addEventListener('click', function(){
        if(caseCreer[x].style.backgroundColor === ''){
            caseCreer[x].style.backgroundColor = couleurJoueur[joueur]
            if(joueur === 0){
                joueur += 1
                cadre.style.border = '8px double green'
            }
            else{
                joueur = 0;
                cadre.style.border = '8px double red'
            }
        }
    })
}

restart.addEventListener('click', function(){
    for(let x = 0; x < 9; x++){
        caseCreer[x].style.backgroundColor = ''
    }
    joueur = 0
    cadre.style.border = '8px double red'
})

console.log(caseCreer)