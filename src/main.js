
//Declaración de variables para llamar los contenedores de la página 
let mainPage = document.querySelector("#main-page");
let selectCampusDashboard1 = document.querySelector("#select-campus");
let selectCampusDashboard2 = document.querySelector("#select-campus");
let selectGenerationDashboard1 = document.querySelector("#select-generation");
let selectGenerationDashboard2 = document.querySelector("#select-generation");


const urlData = "https://raw.githubusercontent.com/AdrianaTV/Proyecto-2--Laboratoria-Data-Dashboard/master/data/laboratoria.json";

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
