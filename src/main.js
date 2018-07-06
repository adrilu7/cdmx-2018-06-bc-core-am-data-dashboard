
//Declaración de variables para llamar los contenedores de la página 
let mainPage = document.querySelector("#main-page");
let selectCampusDashboard1 = document.querySelector("#select-campus");
let selectCampusDashboard2 = document.querySelector("#select-campus");
let selectGenerationDashboard1 = document.querySelector("#select-generation");
let selectGenerationDashboard2 = document.querySelector("#select-generation");


const urlData = "https://raw.githubusercontent.com/AdrianaTV/Proyecto-2--Laboratoria-Data-Dashboard/master/data/laboratoria.json";

<<<<<<< HEAD
let FunSede = function(){
  fetch(api).then(function(datos){
  return datos.json();
  }).then(function(data){
    let Gen=data.lima.generacion.cuarta.estudiantes;

    for (var i = 0; i < perro.length; i++) {
      console.log(data.lima.generacion.cuarta.estudiantes[i]);
      let correo = data.lima.generacion.cuarta.estudiantes[i].correo;
      let nombre= data.lima.generacion.cuarta.estudiantes[i].nombre;
      let turno = data.lima.generacion.cuarta.estudiantes[i].turno;
      datos = datos + "Correo: " + correo + "<br>" +"Nombre: " + nombre + "<br>" + "Turno: " + turno + "<br>"
    }
    document.getElementById("gen").innerHTML = datos;

  })
}
=======
  const getSede = () => {
    fetch(urlData)
    .then (response => response.json() )
    .then ((datos) =>{
    //    console.log(data);
       const generations = data.computeGenerationsStats(datos);
       const headquarters = data.obtainHeadquarters(datos); 
       const generationsData = data.computeStudentsStats(datos);
    //    console.log(generationsData);
    const allTheStudents = data.computeStudentsStats(datos);

    })
    .catch((error) =>{
        // console.log("Error de Esve");
    })

}

getSede();

const drawHeadquarters = (sedes) =>{
    sedes.forEach((sede) => {
        const option = documen.createElement('option');
        option.innerHTML = sede.toUpperCase();
        selectHeadquarters.appendChild(option);
        
    });
    
};
>>>>>>> 46ef8ab8ae28044e2cebeebbd698142f8c8cec81
