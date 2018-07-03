const sedeLima = document.querySelector("#boton-Lima");
const sedeCdmx= document.querySelector("#boton-Cdmx");
const sedeSantiago = document.querySelector("#boton-Santiago");
let clickLima = document.querySelector("#lima");
let clickCdmx = document.querySelector("#cdmx");
let clickSantiago = document.querySelector("#santiago");

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
