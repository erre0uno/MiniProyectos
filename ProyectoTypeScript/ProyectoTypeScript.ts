//#region  clase
class Pais {
    id: number=0;
    nombre: string='';
    poblacion: number=0;
    fundacion: number=0;
    destinoPrincipal: string='';

    destinos: any[] = [];
}
//#endregion

//#region interface
interface IPais extends Pais {
    getAll():void;
    getById(id: number): boolean;
    getByName(nombre: string): boolean;
    create(): boolean;
    update(id: number): boolean;
    delete(id: number): boolean;

}
//#endregion

//#region repositorio
class RepositorioPais implements IPais {

    id: number=0;
    nombre: string='';
    poblacion: number=0;
    fundacion: number=0;
    destinoPrincipal: string='';

    destinos = [
        { id: 1, nombre: 'francia', poblacion: 5000000, fundacion: 1900, destinoPrincipal: 'torre eifel' },
        { id: 2, nombre: 'italia', poblacion: 3000000, fundacion: 1950, destinoPrincipal: 'venecia' },
        { id: 3, nombre: 'roma', poblacion: 4000000, fundacion: 1800, destinoPrincipal: 'coliceo' },
        { id: 4, nombre: 'colombia', poblacion: 9000000, fundacion: 1820, destinoPrincipal: 'caño cristales' }
    ]

    //#region metodoGetAll
    getAll():void {
        try {
            let data:string='';
            for (let index = 0; index < this.destinos.length; index++) {
                data=data+`${this.destinos[index].id} ${this.destinos[index].nombre} ${this.destinos[index].poblacion} ${this.destinos[index].fundacion} ${this.destinos[index].destinoPrincipal} \n`;
            }
            alert(data);                
        } catch (error) {
            console.log(error)
        }
    }
    //#endregion
    
    //#region  metodoGetById
    getById(id: number): boolean {
        try {
            let data:string;
            for (let index = 0; index < this.destinos.length; index++) {
                if (this.destinos[index].id == id) {
                    alert (`${this.destinos[index].id} ${this.destinos[index].nombre} ${this.destinos[index].poblacion} ${this.destinos[index].fundacion} ${this.destinos[index].destinoPrincipal}`);
                    return true;
                }
            }
            alert('no se encontro el registro ! ');
            return false;
        } catch (error) {
            console.log(error)
            return false
        }
    }
    //#endregion

    //#region metodoGetByName
    getByName(nombre: string): boolean {
        try {
            for (let index = 0; index < this.destinos.length; index++) {
                if (this.destinos[index].nombre == nombre) {
                    alert (`${this.destinos[index].id} ${this.destinos[index].nombre} ${this.destinos[index].poblacion} ${this.destinos[index].fundacion} ${this.destinos[index].destinoPrincipal}`);
                    return true;
                }
            }
            alert('no se encontro el registro ! ');
            return false;                
        } catch (error) {
            console.log(error)
            return false;
        }
    }
    //#endregion

    //#region metodoCreate    
    create(): boolean {
        try {
            let id: number = this.destinos.length + 1;
            let nombre: string = String(prompt("ingrese nombre "));
            let poblacion: number = Number(prompt("ingrese poblacion"));
            let fundacion: number = Number(prompt("ingrese fundacion"));
            let destinoPrincipal: string = String(prompt("ingrese destino turístico"));
            let destino: any = { id, nombre, poblacion, fundacion, destinoPrincipal };
    
            if (this.destinos.push(destino)) {
                alert (`se creó el registro: \n ${destino.id} ${destino.nombre} ${destino.poblacion} ${destino.fundacion} ${destino.destinoPrincipal}`);
                return true;
            } else {
                alert('no se pudo guardar el registro ! ');
                return false
            }            
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    //#endregion

    //#region metodoUpdate
    update(id: number): boolean {
        try {
            let flag: boolean = false;
            let pos: number = 0;
    
            for (let index = 0; index < this.destinos.length; index++) {
                if (this.destinos[index].id == id) {
                    flag = true;
                    pos = index;
                    break;
                }
            }
            if (flag) {
                let nombre: string = String(prompt("ingrese nombre pais "));
                let poblacion: number = Number(prompt("ingrese poblacion "));
                let fundacion: number = Number(prompt("ingrese año de fundacion "));
                let destinoPrincipal: string = String(prompt("ingrese destino principal "));
    
                this.destinos[pos].nombre = nombre;
                this.destinos[pos].poblacion = poblacion;
                this.destinos[pos].fundacion = fundacion;
                this.destinos[pos].destinoPrincipal = destinoPrincipal;
                alert (`Se actualizo el registro: \n${this.destinos[pos].id} ${this.destinos[pos].nombre} ${this.destinos[pos].poblacion} ${this.destinos[pos].fundacion} ${this.destinos[pos].destinoPrincipal}`);
                return true;
            }
            alert('no se pudo actualizar el registro ! ');
            return false;            
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    //#endregion

    //#region metodoDelete
    delete(id: number): boolean {
        try {
            let flag: boolean = false;
            let pos: number = 0;
    
            for (let index = 0; index < this.destinos.length; index++) {
                if (this.destinos[index].id == id) {
                    flag = true;
                    pos = index;
                    break;
                }
            }
            if (flag) {
                this.destinos.splice(pos, 1);
                alert(`se eliminio el registro ${pos+1} ! `);
                return true;
            }
            alert(`no se encontro el registro ! `);
            return false;            
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    //#endregion

}
//#endregion

//#region MenuInicio
function menuDestinos():void{ 
    
    let repo = new RepositorioPais();
    let opc: number;
    let id: number;
    let nombre: string;
    
    do {
        opc = Number(prompt(`
      ▒▒▒▒▒▒▒▒ MENU DESTINOS ▒▒▒▒▒▒▒▒ 
      1. Obtener todos
      2. Buscar por id
      3. Buscar por nombre
      4. crear destino
      5. actualizar destino
      6. elimininar  destino
      7. Salir`));

        switch (opc) {
            case 1:
                repo.getAll();
                break;
            case 2:
                id = Number(prompt("ingrese un id a buscar"));
                repo.getById(id);
                break;
            case 3:
                nombre = String(prompt("ingrese nombre a buscar"));
                repo.getByName(nombre);
                break;
            case 4:
                repo.create();
                break;
            case 5:
                id = Number(prompt("ingrese un id para actualizar"));
                repo.update(id);
                break;
            case 6:
                id = Number(prompt("ingrese un id a eliminar"));
                repo.delete(id);
                break;
            case 7:
                alert("Hasta luego ! ");
                break;
            default:
                alert("intenta de nuevo ! ");
                break;
        }
    } while (opc != 7);
};
//#endregion

// inicializar
menuDestinos();
