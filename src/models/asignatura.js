const {Schema, model} = require('mongoose');


const asignaturaSchema = new Schema({
    nombre: {
        type :String,
        required: true,
    },
    promedio : {
        type: Number,
        required: true
    }
}, { versionKey: false});


module.exports = model('asignatura', asignaturaSchema);