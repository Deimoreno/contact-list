function Contacto(id, name, last_name, phone, location){
    const {city, department } = location;
    this.id = id;
    this.name = name;
    this.last_name = last_name;
    this.phone = phone;
    this.location = {
        city,
        department
    };
}
module.exports = {
    Contacto
}
    
