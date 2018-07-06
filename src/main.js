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
