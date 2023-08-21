document.addEventListener("DOMContentLoaded", function() {
    const url = "https://gist.githubusercontent.com/josuenoel/80daca657b71bc1cfd95a4e27d547abe/raw/5c615419196ed40a3dbdff69cb3d9719b1d6bb1e/provincias_cantones_distritos_costa_rica.json"
    let id = 0;
    
    // Obtener referencia al elemento <select> en el HTML
    const provinciaSelect = document.getElementById("provincias");
    
    function CargarProvincias(data) {
        id = 1
        data.forEach(provincia => {
                const option = document.createElement("option");
                if(id <= 7){
                    option.value = provincia.nombre;
                    option.textContent = provincia.nombre;
                    id += 1;
                }
                provinciaSelect.appendChild(option);
        });
    };
    
    // Hacer la solicitud a la API
    fetch(url)
        //Estos métodos toman funciones como argumentos, que se ejecutarán cuando la Promesa se resuelva.
    .then(response => response.json()) // convierte la respuesta de la solicitud en formato JSON.
    .then(data => {
        const provincias = Object.values(data.provincias);
        CargarProvincias(provincias);
    })
    .catch(error => {
        console.error("Error al cargar los países:", error);
    });

});