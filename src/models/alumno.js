const {Schema, model} = require('mongoose');


const alumnoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellidoMaterno: {
        type: String,
        required: true
    },
    apellidoPaterno: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        required : true
    }
}, { versionKey : false });


module.exports = model('alumno', alumnoSchema);