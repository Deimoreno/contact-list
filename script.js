

const { mostrarContactoPorId, mostrarContactos, crearContacto, editarContacto, eliminarContacto, mis_contactos } = require("./functions");
const { Contacto } = require("./odject");

mostrarContactos(mis_contactos);

mostrarContactoPorId(2, mis_contactos);

crearContacto(new Contacto(3, "Alex", "Acevedo", 97366673, { city: "Medellin", address: "Carrera 111B" }))
mostrarContactos(mis_contactos);

const contacto_editado = new Contacto(0, "Luz", "Benítez", 4898712687, { city: "Córdoba", address: "Carrera 25" });
editarContacto(contacto_editado);
mostrarContactos(mis_contactos);

eliminarContacto(3);
mostrarContactos(mis_contactos);