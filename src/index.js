const mongoose = require('mongoose');
const {
    alumnoService,
    asignaturaService,
    profesorService,
    cursoService
} = require('./models')

const URI = "tu conexion con mongo va aqui jeje"

const main = async () => {
    await mongoose.connect(URI, {useNewUrlParser : true, }, () => console.log("connected to mongoDB"));
    const resultAlumno = await alumnoService.create({
        nombre: "rodrigo",
        apellidoPaterno: "Mardones",
        apellidoMaterno : "Aguilar",
        dni : "18975534-1"
    })
    const resultprofesor = await profesorService.create({
        nombre: "John",
        apellidoPaterno: "Doe",
        apellidoMaterno : "knou",
        dni : "11111111-1",
        contrato : 21021
    })
    const resultAsignatura = await asignaturaService.create({
        nombre: "diseño base de datos",
        promedio : 4.0
    })
    const resultCurso = await cursoService.create({
        idAsignatura : '60cbaf57340c5909f4d34073',
        idProfesor : '60cbaf57340c5909f4d34071',
        notaAlumno : {
            idAlumno : '60cbaf56340c5909f4d3406e',
            notas : [7,7,7,7]
        }
    })
    console.log(resultAlumno);
    console.log(resultprofesor);
    console.log(resultAsignatura);
    console.log(resultCurso);

    // buscar con filtros
    const findAlumno = await alumnoService.findOne({_id : '60cbaf56340c5909f4d3406e' })
    console.log(findAlumno);
    // buscar con filtros
    const findProfesor = await profesorService.find()
    console.log(findProfesor);
    // buscar con filtros
    const findAsignatura = await asignaturaService.find({ promedio : {$gte : 4.0 } })
    console.log(findAsignatura);
    // buscar con filtros
    const findCurso = await alumnoService.find({_id : '' })
    
    await mongoose.connection.close();
}

main();