const app = new Vue({
  el: '#app',
  data: {
    formData: {
      nombre: '',
      email: '',
      fechaEntrega: null,
      genero: '',
      cantProductos: null,
      provincias: ''
    },
    errors: {}
  },
  methods: {
    submitForm() {
      this.errors = {};

      if (!this.formData.nombre) {
        this.errors.nombre = 'Por favor ingresa tu nombre completo.';
      }

      if (!this.formData.email) {
        this.errors.email = 'Por favor ingresa tu correo electrónico.';
      } else if (!/\S+@\S+\.\S+/.test(this.formData.email)) {
        this.errors.email = 'Por favor ingresa un correo electrónico válido.';
      }

      if (!this.formData.fechaEntrega) {
        this.errors.fechaEntrega = 'Por favor ingrese una fecha de Entrega.';
      }

      if (!this.formData.genero) {
        this.errors.genero = 'Por favor seleccione un género.';
      }

      if (!this.formData.cantProductos) {
        this.errors.cantProductos = 'Por favor seleccione la cantidad de productos deseados.';
      }

      if (!this.formData.provincias) {
        this.errors.provincias = 'Por favor seleccione una provincia.';
      }

      // Agrega más lógica de validación aquí según tus requisitos

      if (Object.keys(this.errors).length === 0) {
        alert('Formulario válido, enviando datos...');
        // Agrega aquí la lógica para enviar los datos del formulario al servidor
      }
    }
  }
});