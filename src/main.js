let api = "https://api.myjson.com/bins/1bl1iu";
let btnsede = document.getElementById('btnsed');//boton
let btngen = document.getElementById('btngen');//boton
let datos="";

btnsede.addEventListener("click", function(){
  document.getElementById("sede").style.display = "block";
  document.getElementById("gen").style.display = "none";
});

btngen.addEventListener("click", function(){
  document.getElementById("sede").style.display = "none";
  document.getElementById("gen").style.display = "block";
  FunSede();

});

let FunSede = function(){
  fetch(api).then(function(datos){
  return datos.json();
  }).then(function(data){
    let perro=data.lima.generacion.cuarta.estudiantes;

    for (var i = 0; i < perro.length; i++) {
      console.log(data.lima.generacion.cuarta.estudiantes[i]);
      let correo = data.lima.generacion.cuarta.estudiantes[i].correo;
      let nombre= data.lima.generacion.cuarta.estudiantes[i].nombre;
      let turno = data.lima.generacion.cuarta.estudiantes[i].turno;
      datos = datos + "Correo: " + correo + "<br>" +"Nombre: " + nombre + "<br>" + "Turno: " + turno + "<br>"
    }
    document.getElementById("gen").innerHTML = datos;
    /*console.log(data.lima.generacion.cuarta.estudiantes[5]);
    let correo = data.lima.generacion.cuarta.estudiantes[5].correo;
    let nombre= data.lima.generacion.cuarta.estudiantes[5].nombre;
    let turno = data.lima.generacion.cuarta.estudiantes[5].turno;
    document.getElementById("gen").innerHTML= "Correo: " + correo + "<br>" +"Nombre: " + nombre + "<br>" + "Turno: " + turno + "<br>"

    /*fullname.innerHTML = fullnameAPI;


    let emailAPI = data.results[0].email;
    email.innerHTML = emailAPI;

    let usernameAPI = data.results[0].login.username;
    username.innerHTML = usernameAPI;

    let cityAPI = data.results[0].location.city;
    city.innerHTML = cityAPI;

    let avatarAPI = data.results[0].picture.large;
    avatar.setAttribute("src", avatarAPI);*/

  })
}


//
  // let datos = fetch(api);
  // function api(declaraciondatos){}<-----------------------
  // api(datos);

  // fetch(api).then(function(datos){
  // datos = fetch(api)
  // aqui se va a invoca!!!
  // })
