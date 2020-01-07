
function showRocket(){
    let rocket1 = new Rocket('32WESSDS',3);
    let rocket2 = new Rocket('LDSFJA32',6);
   
    const showRocket = <HTMLElement>document.getElementById('showRocket');

    const elementRocket1: HTMLElement = document.createElement('div');
    const elementRocket2: HTMLElement = document.createElement('div');

    elementRocket1.innerHTML = rocket1.mostrarRockets();
    showRocket.appendChild(elementRocket1);

    elementRocket2.innerHTML = rocket2.mostrarRockets();
    showRocket.appendChild(elementRocket2);
    
}


