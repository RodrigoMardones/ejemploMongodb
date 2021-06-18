const {Schema, model} = require('mongoose');


const profesorSchema = new Schema({
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
    },
    contrato : {
        type : Number,
        required: true
    }
},{ versionKey : false });


module.exports = model('profesor', profesorSchema);