const api = "https://api.myjson.com/bins/1bl1iu";

const myData = () => {
    fecth(api)
    .then (response => response.json() )
    .then ((res) =>{
        const generations = computeGenerationsStats (res);
        drawCampus(generetions);
        
    })
    .catch((error) =>{
        console.log(error);
    })
}
