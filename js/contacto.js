document.addEventListener('DOMContentLoaded', function() {
    const fechaNacimiento = document.getElementById('fechaNacimiento');
    const edadInput = document.getElementById('edad');

    fechaNacimiento.addEventListener('input', function() {
      const fecha = new Date(this.value);
      const hoy = new Date();
      const edad = hoy.getFullYear() - fecha.getFullYear();
      edadInput.value = edad;
    });
});