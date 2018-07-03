window.computeStudentsStats = (laboratoria) => {
    let studentsArray = [];
    let nombreEstudiante;
    let mailEstudiante;
    let porcentajeEstudiante;
    let statusEstudiante;
    let generacionEnSede;
    for(venue in laboratoria){
      let sede = venue; 
      const generations = Object.keys(laboratoria[venue].generacion); 
      generations.forEach((generationVenue) => {
        //console.log(generationInVenue); //Me da los nombres de las generaciones para cada sede en string
       generacionEnSede = generationVenue;
        //console.log(student);
        const students = laboratoria[venue].generacion[generationVenue].estudiantes;
        //console.log(students);
        students.forEach((student) => {
          nombreEstudiante = student.nombre; //Agregamos nombre de estudiante
          mailEstudiante = student.correo; //Agregamos correo de estudiante
          porcentajeEstudiante = student.progreso.porcentajeCompletado; //Agregamos porcentaje de avance general
          let progress = porcentajeEstudiante;
          if (progress < 60) {
            statusEstudiante = "below"; //Indicamos que esta debajo del 60%
          } else if (progress > 90) {
            statusEstudiante = "over"; //Indicamos que esta sobre el 90%
          } else {
            statusEstudiante = "average"; //Indicamos que esta en la media
          };
          studentsArray.push({'name': nombreEstudiante,'email': mailEstudiante, 'campus': sede, 'generation': generacionEnSede, 'stats':{
            'status': statusEstudiante, 'completedPercentage': porcentajeEstudiante}});
          
        });
      });
    }
    //console.log(studentsArray);
    return studentsArray;
    
  
  
}

window.computeGenerationsStats = (laboratoria) => {
    const generationsArray = [];
    const obj = {
        campus: '',
        generation: '',
        average: 0,
        count: 0,
    };
    let average = 0;
    for (key in laboratoria) {
        obj.campus = key;
        average = 0;
        const generations = Object.keys(laboratoria[key].generacion);
        generations.forEach((generation) => {
            obj.generation = generation;
            const students = laboratoria[key].generacion[generation].estudiantes;
            for (student in students) {
                average += students[student].progreso.porcentajeCompletado;
                average = average / students.length;
                obj.average = average;
                obj.count = students.length;
                generationsArray.push(obj);

            }
        })

    }
    return generationsArray;

}

window.sortStudents = (students, orderBy, orderDirection) => {
  


} 

window.filterStudents = (students, search) => {

}