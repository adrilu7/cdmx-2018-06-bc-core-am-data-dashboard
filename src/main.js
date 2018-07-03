const laboratoria = "https://raw.githubusercontent.com/AdrianaTV/Proyecto-2--Laboratoria-Data-Dashboard/master/data/laboratoria.json";

  const getSede = () => {
    fecth(laboratoria)
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
        console.log("Error de Esve");
    });

}

getData();

const drawHeadquarters = (sedes) =>{
    sedes.forEach((sede) => {
        const option = documen.createElement('option');
        option.innerHTML = sede.toUpperCase();
        selectHeadquarters.appendChild(option);
        
    });
    
}

/*
myData();

const drawCampus = (res) => {
    const sedes = Object.keys(res);

    const containerCampus = document.getElementById('campus');
    sedes.forEach((sede) => {
        const option = document.createElement('option');
        option.innerHTML = sede;
        containerCampus.appendChild(option);
    });

    containerCampus.addEventListener('change', iteratorGenerations);
};


const drawGenerations = (e) => {
    //computeGenerationsStats(laboratoria)
};*/