const img_maki_0 = document.getElementById('img_round_maki_ur_0')
const img_maki_1 = document.getElementById('img_round_maki_ur_1')
const img_maki_2 = document.getElementById('img_round_maki_ur_2')
const img_maki_3 = document.getElementById('img_round_maki_ur_3')
const img_maki_4 = document.getElementById('img_round_maki_ur_4')
const img_maki_5 = document.getElementById('img_round_maki_ur_5')
const img_maki_6 = document.getElementById('img_round_maki_ur_6')
const img_maki_7 = document.getElementById('img_round_maki_ur_7')
const btn_empezar_juego = document.getElementById('btn_empezar_juego_maki')
const sound_do = document.getElementById('sound_do')
const sound_re = document.getElementById('sound_re')
const sound_mi = document.getElementById('sound_mi')
const sound_fa = document.getElementById('sound_fa')
const sound_sol = document.getElementById('sound_sol')
const sound_la = document.getElementById('sound_la')
const sound_si = document.getElementById('sound_si')
const sound_do8 = document.getElementById('sound_do8')
const sound_win = document.getElementById('sound_win')
const sound_lose = document.getElementById('sound_lose')

class Juego{
    constructor(){
        this.NIVEL_MAXIMO = 10
        this.clickMaki = this.clickMaki.bind(this)
        this.iluminarImagenes = this.iluminarImagenes.bind(this)
        this.iniciar()
        this.generarSecuencia()
        this.generarNivel()
    }

    apagarImagenes(){        
        this.imagenes.img_maki_0.classList.add('apagar')
        this.imagenes.img_maki_1.classList.add('apagar')
        this.imagenes.img_maki_2.classList.add('apagar')
        this.imagenes.img_maki_3.classList.add('apagar')
        this.imagenes.img_maki_4.classList.add('apagar')
        this.imagenes.img_maki_5.classList.add('apagar')
        this.imagenes.img_maki_6.classList.add('apagar')
        this.imagenes.img_maki_7.classList.add('apagar')                
    }

    apagarBoton(){
        this.btn.classList.add('apagar')                
    }

    iluminarImagenes(){        
        this.imagenes.img_maki_0.classList.remove('apagar')
        this.imagenes.img_maki_1.classList.remove('apagar')
        this.imagenes.img_maki_2.classList.remove('apagar')
        this.imagenes.img_maki_3.classList.remove('apagar')
        this.imagenes.img_maki_4.classList.remove('apagar')
        this.imagenes.img_maki_5.classList.remove('apagar')
        this.imagenes.img_maki_6.classList.remove('apagar')
        this.imagenes.img_maki_7.classList.remove('apagar')                
    }

    iluminarBoton(){
        this.btn.classList.remove('apagar')        
    }

    
    iluminarMaki(numMaki){          
        const nombre = `img_maki_${numMaki}` 
        this.imagenes[nombre].classList.remove('apagar') 
        this.generarSonido(numMaki)               
        setTimeout(()=>this.imagenes[nombre].classList.add('apagar'),600)
    }

    btnActivarClick(){
        this.btn.addEventListener("click",empezarJuegoMaki)
        this.btn.classList.add('pointer')        
    }

    btnDesactivarClick(){
        this.btn.removeEventListener("click",empezarJuegoMaki)
        this.btn.classList.remove('pointer')  
    }

    generarSonido(numMaki){
        switch(numMaki){
            case 0:
                this.sonidos.sound_do.play()
                break;
            case 1:
                this.sonidos.sound_re.play()
                break;
            case 2:
                this.sonidos.sound_mi.play()
                break;
            case 3:
                this.sonidos.sound_fa.play()
                break;
            case 4:
                this.sonidos.sound_sol.play()
                break;
            case 5:
                this.sonidos.sound_la.play()
                break;
            case 6:
                this.sonidos.sound_si.play()
                break;
            case 7:
                this.sonidos.sound_do8.play()
                break;
            case 'ganar':
                this.sonidos.sound_win.play()
                break;
            case 'perder':
                this.sonidos.sound_lose.play()
                break;

        }
    }

    generarSecuencia(){
        this.secuencia = new Array(this.NIVEL_MAXIMO).fill(0).map(()=>( Math.floor(Math.random() *8)))                
    }

    delay(ms){
        return new Promise(function (resolve){setTimeout(resolve,ms)})
    }

    btnYourTurn(){        
        this.btn.innerHTML=`🎤`
    }

    btnMachineTurn(){
        this.btn.innerHTML=`Lv. ${this.nivel}`
    }

    async generarNivel(){  
        this.subnivel = 0
        await this.delay(1000) 
        this.btnMachineTurn()             
        for(let i=0;i<this.nivel;i++){        
            const numMaki = this.secuencia[i]
            this.iluminarMaki(numMaki)
            await this.delay(1200)            
        }
        this.activarListener()
        this.btnYourTurn()
    }

    activarListener(){
        this.imagenes.img_maki_0.addEventListener("click",this.clickMaki)
        this.imagenes.img_maki_1.addEventListener("click",this.clickMaki)
        this.imagenes.img_maki_2.addEventListener("click",this.clickMaki)
        this.imagenes.img_maki_3.addEventListener("click",this.clickMaki)
        this.imagenes.img_maki_4.addEventListener("click",this.clickMaki)
        this.imagenes.img_maki_5.addEventListener("click",this.clickMaki)
        this.imagenes.img_maki_6.addEventListener("click",this.clickMaki)
        this.imagenes.img_maki_7.addEventListener("click",this.clickMaki)

        this.imagenes.img_maki_0.classList.add('pointer')                
        this.imagenes.img_maki_1.classList.add('pointer')                
        this.imagenes.img_maki_2.classList.add('pointer')                
        this.imagenes.img_maki_3.classList.add('pointer')                
        this.imagenes.img_maki_4.classList.add('pointer')                
        this.imagenes.img_maki_5.classList.add('pointer')                
        this.imagenes.img_maki_6.classList.add('pointer')                
        this.imagenes.img_maki_7.classList.add('pointer')                        
    }

    desactivarListener(){
        this.imagenes.img_maki_0.removeEventListener("click",this.clickMaki)
        this.imagenes.img_maki_1.removeEventListener("click",this.clickMaki)
        this.imagenes.img_maki_2.removeEventListener("click",this.clickMaki)
        this.imagenes.img_maki_3.removeEventListener("click",this.clickMaki)
        this.imagenes.img_maki_4.removeEventListener("click",this.clickMaki)
        this.imagenes.img_maki_5.removeEventListener("click",this.clickMaki)
        this.imagenes.img_maki_6.removeEventListener("click",this.clickMaki)
        this.imagenes.img_maki_7.removeEventListener("click",this.clickMaki)

        this.imagenes.img_maki_0.classList.remove('pointer')                
        this.imagenes.img_maki_1.classList.remove('pointer')                
        this.imagenes.img_maki_2.classList.remove('pointer')                
        this.imagenes.img_maki_3.classList.remove('pointer')                
        this.imagenes.img_maki_4.classList.remove('pointer')                
        this.imagenes.img_maki_5.classList.remove('pointer')                
        this.imagenes.img_maki_6.classList.remove('pointer')                
        this.imagenes.img_maki_7.classList.remove('pointer')                
    }
    
    clickMaki(evento){
        const numMaki = parseInt(evento.target.dataset.card)
        this.iluminarMaki(numMaki)
        if(numMaki === this.secuencia[this.subnivel]){            
            this.subnivel++
            if(this.subnivel === this.nivel){
                this.desactivarListener()
                this.nivel++                
                if(this.nivel === this.NIVEL_MAXIMO+1){
                    this.ganarJuego()
                }
                else{
                    this.generarNivel()                 
                }
            }            
        }
        else{            
            this.perderJuego()
        }
    }

    perderJuego(){
        this.generarSonido('perder')
        this.btn.innerHTML=`Lose!`        
        this.desactivarListener()                
        this.iluminarBoton()
        this.btnActivarClick()
    }

    ganarJuego(){        
        this.generarSonido('ganar')
        this.btn.innerHTML=`Win!`
        setTimeout(this.iluminarImagenes,600)
        this.iluminarImagenes()
        this.iluminarBoton()
        this.desactivarListener()
        this.btnActivarClick()
    }


    iniciar(){
        this.nivel = 1
        this.imagenes = {
            img_maki_0,img_maki_1,img_maki_2,img_maki_3,
            img_maki_4,img_maki_5,img_maki_6,img_maki_7
        }
        this.sonidos = {
            sound_do,sound_re,sound_mi,sound_fa,
            sound_sol,sound_la,sound_si,sound_do8,
            sound_win,sound_lose
        }
        this.btn = btn_empezar_juego;    
        this.apagarImagenes()
        this.apagarBoton()
        this.btnDesactivarClick()
        this.desactivarListener()
            
    }

}

btn_empezar_juego.addEventListener("click",empezarJuegoMaki)
btn_empezar_juego.classList.add('pointer')  
function empezarJuegoMaki(){
    const juego_maki = new Juego()    
    juego_maki.iniciar()
}

