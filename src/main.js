const paintCampus = (allData) => {
  document.getElementById('view').addEventListener('click', (event) => {
    const campus = document.getElementById('select-campus').value;
    const generations = document.getElementById('select-generation').value;

    const searchResult = filterItereitorCampus(allData, campus);
    const searchResultGeneration = filterItereitorGenerations(searchResult, generations);
    // console.log(searchResultGeneration);
    // console.log(searchResultGeneration);
    let paintSearchCampus = '';
    if (searchResultGeneration.length === 0) {
      document.getElementById('no-paint').innerHTML =
        `<p> No se encuentra en la búsqueda </p>
    `;
    } else {
      document.getElementById('tableData').style.display = "block";
      paintSearchCampus = `<table class='table'>
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Sede</th>
                <th scope="col">Generación</th>
                <th scope="col">Correo</th>
                <th scope="col">Progreso</th>
              </tr>
            </thead>
            <tbody>`;

      searchResultGeneration.forEach((component, i) => {
        paintSearchCampus += `<tr>
        <th scope="row"> ${i + 1}</th>
        <td>${component.name}</td>
        <td>${component.campus}</td>
        <td>${component.generations}</td>
        <td>${component.email}</td>
        <td>${component.stats.completePercentage} % </td>
      </tr>`;
      });

      paintSearchCampus += `</tbody>
      </table>`;


      document.getElementById('no-paint').innerHTML = '';
      document.getElementById('tableData').innerHTML = paintSearchCampus;

    }
  });
};

const paintSearch = (allData) => {
  // console.log(allData);
  document.getElementById('search').addEventListener('click', (event) => {

    document.getElementById('tableData').style.display = "none";
    const name = document.getElementById('name-to-search').value;
    const searchResult = filterStudents(allData, name);
    // console.log(searchResult);
    let paintSearch = '';
    if (searchResult.length === 0) {
      document.getElementById('no-paint').innerHTML =
        `<p> No se encuentra en la búsqueda </p>
      `;
    } else {
      paintSearch = `<table class='table'>
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Sede</th>
                <th scope="col">Generación</th>
                <th scope="col">Correo</th>
                <th scope="col">Progreso</th>
              </tr>
            </thead>
            <tbody>`;
      searchResult.forEach((component, i) => {
        paintSearch += `<tr>
        <th scope="row"> ${[i + 1]}</th>
        <td>${component.name}</td>
        <td>${component.campus}</td>
        <td>${component.generations}</td>
        <td>${component.email}</td>
        <td>${component.stats.completePercentage} % </td>
      </tr>`;
      });

      paintSearch += `</tbody>
      </table>`;
      document.getElementById('tableData').style.display = "block";
      document.getElementById('no-paint').innerHTML = '';
      document.getElementById('tableData').innerHTML = paintSearch;
    }
  });
};


boton = document.getElementById('inicio');

boton.addEventListener('click', () => {
  console.log("Hola");
  window.location.href ="index.html";
})
