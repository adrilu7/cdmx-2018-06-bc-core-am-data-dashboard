const laboratoria = "https://raw.githubusercontent.com/AdrianaTV/Proyecto-2--Laboratoria-Data-Dashboard/master/data/laboratoria.json";

  const getSede = () => {
    fecth(laboratoria)
    .then (response => response.json() )
    .then ((data) =>{
    //    console.log(data);
       const generations = datos.computeGenerationsStats(data);
       const headquarters = datos.obtainHeadquarters(data); 
       const generationsData = datos.computeStudentsStats(data);
    //    console.log(generationsData);


      
  
        
    })
    .catch((error) =>{
        console.log("Error de Esve 😦")
    })

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