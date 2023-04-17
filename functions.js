const {Contacto} = require ("./odject.js")

const contact_1 = new Contacto(0,"deiber","mena",325363436,{
    city : "Riosucio", department :"Choco"
})

const contact_2 = new Contacto(1,"Jairo","Baquero", 324325657,{
    city : "Bucaramanga" , department : "Santander"
})

const contact_3 = new Contacto(2, "Luz", "Cierra", 213422345,{
    city : "Monteria", department : "Cordoba"
})  

let mis_contactos = [contact_1,contact_2,contact_3]

const mostrarContactos = (contactos) =>{
console.log(contactos);
}

const mostrarContactoPorId =(id,lista_contactos) => {
    mostrarContactos(lista_contactos[id]);
    
}

let crearContacto = (contacto) => {
    const{id,name,last_name,phone,location} = contacto;
    const{city,department} = location;
    if  (id && name && last_name && phone && city && department) mis_contactos.push (contacto);{
    console.log("contacto creado exitosamente");
    }
    console.log("los campos no pueden quedar vacidos")
}

let editarContacto = (modificacion) => {
    const{ id, name, last_name, phone, location} = modificacion;
    const{city, department} = location
    let encontrado = mis_contactos.filter(contacto => contacto.id === id)[0];
    if (name && last_name && phone && city && department && encontrado) {
        encontrado.name = modificacion.name;
        encontrado.last_name = modificacion.last_name;
        encontrado.phone = modificacion.phone;
        encontrado.location = modificacion.location;
        console.log("contacto editado correctamente");
    } else{
        console.log("el id que tratas de buscar no existes o algunos campos estan vacidos")
    }
    
}
editarContacto(new Contacto (2,"luz","arango",3452663,{city: "monteria", department:"cordoba"}))
    console.log(mis_contactos)

    const eliminarContacto =(id) => {
        const contacto_encotrado = mis_contactos.filter (contacto => contacto.id === id)[0]
        if (contacto_encotrado) { 
            mis_contactos.splice(id,1);
        } else {
             console.log ("El contacto que tratas de eliminar no existe");
        }
       
    } 

    eliminarContacto(1)
    console.log (mis_contactos);
    
    module.exports = {
        mostrarContactoPorId,
        mostrarContactos,
        crearContacto,
        editarContacto,
        eliminarContacto,
        mis_contactos
    }
    

