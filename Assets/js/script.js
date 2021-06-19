console.log("ITS working")


let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('Classic')
}else{
    setTheme(theme)
}



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
        document.getElementById('theme-style').href = 'assets/css/style.css'
    }
    if(mode == 'Night'){
        document.getElementById('theme-style').href = 'assets/css/night.css'
    }
    if(mode == 'Earth'){
        document.getElementById('theme-style').href = 'assets/css/Earth.css'
    }
    if(mode == 'Galaxy'){
        document.getElementById('theme-style').href = 'assets/css/galaxy.css'
    }

    localStorage.setItem('theme', mode)
}  