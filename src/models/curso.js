const mongoose = require('mongoose');

const cursoSchema = new mongoose.Schema({
    idAsignatura : {
        type: mongoose.Types.ObjectId,
        required: false,
    },
    idProfesor : {
        type: mongoose.Types.ObjectId,
        required: false,
    },
    notaAlumno: {
        idAlumno : mongoose.Types.ObjectId,
        notas : {
            type: Array,
            required: true
        }
    }
}, {
    versionKey : false
})


module.exports = mongoose.model('curso', cursoSchema)