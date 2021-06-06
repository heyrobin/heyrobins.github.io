console.log("ITS working")

let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click',function(){
        let mode  = this.dataset.mode
        console.log('option clicked:', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'Classic'){
        document.getElementById('theme-style').href = 'style.css'
    }
    if(mode == 'Night'){
        document.getElementById('theme-style').href = 'night.css'
    }
    if(mode == 'Earth'){
        document.getElementById('theme-style').href = 'Earth.css'
    }
    if(mode == 'Galaxy'){
        document.getElementById('theme-style').href = 'galaxy.css'
    }
}