const myData =()=>{
    fetch('https://raw.githubusercontent.com/AdrianaTV/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json')
    .then(aswer=> aswer.json())
    .then(data =>{
        console.log(data);
    })
    
}