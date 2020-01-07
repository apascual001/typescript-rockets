class Rocket{
    codi:string;
    propulsors:number;
    constructor(codi:string, propulsors:number){
        this.codi=codi;
        this.propulsors=propulsors;
        this.mostrarRockets=this.mostrarRockets;
    }
    mostrarRockets() {
        var resultado = `El COHET:  ${this.codi} té  ${this.propulsors} propulsors`;
        return resultado;
      }
}