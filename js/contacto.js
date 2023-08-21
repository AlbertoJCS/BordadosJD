const app = Vue.createApp({
  data() { //Data es una función que devuelve un objeto
    //El objeto que se retorna tiene 2 propiedades: FormData y Errors
    return {
      FormData: { //FormData es el objeto que retorna data()
        nombre: '',
        email: '',
        fechaEntrega: null,
        genero: '', // Almacena el valor seleccionado ('Masculino' o 'Femenino')
        cantProductos: null,
        provincias: '' // Almacena la provincia seleccionada
      },
      errors: {}
    }; 
  },
  methods: {
    submitForm() {
      // Lógica de validación
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
        this.errors.genero = 'Porfavor Seleccione un Genero';
      }

      if (!this.formData.cantProductos) {
        this.errors.cantProductos = 'Porfavor Seleccione la cantidad de productos deseados';
      }

      if (!this.formData.provincias) {
        this.errors.provincias = 'Porfavor Seleccione una provincia';
      }

      // Agrega más lógica de validación aquí según tus requisitos

      // Si no hay errores, puedes enviar los datos
      if (Object.keys(this.errors).length === 0) {
        // Aquí enviarías los datos del formulario
        console.log('Formulario válido, enviando datos...');
      }
    }
    //clearForm(){

    //}
  }
});

app.mount('#app');