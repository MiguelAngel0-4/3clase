const usuario={
    nombre: "carlos",
    edad: 25,
    trabaja: true,
    //Agregar una funcion para saludar
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}
//Imprimir a las propiedades de un objeto
//console.log(usuario)

//Imprimir propiedades por separado
//console.log(usuario.nombre)
//console.log(usuario.edad)
//console.log(usuario.trabaja)

//agregar propidades a un objeto
usuario.carrera="ing de sistemas"
console.log(usuario)