const app = new Vue({
  el: '#app',
  data: {
    formData: {
      nombre: '',
      email: '',
      fechaEntrega: null,
      envio: 'Local',
      cantProductos: null,
      provincias: '--',
      mensaje: ''
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

      if (!this.formData.mensaje) {
        this.errors.mensaje = 'Por favor seleccione una provincia.';
      }

      // Agrega más lógica de validación aquí según tus requisitos

      if (Object.keys(this.errors).length === 0) {
        alert('Formulario válido, enviando datos...');
        this.enviarMail();
      }
    },
    enviarMail(){
      alert('Enviado con Exitó!');
      const btn = document.getElementById('button');
      btn.value = 'Enviando...';
    
      const serviceID = 'default_service';
      const templateID = 'template_3fovon8';
      const formElement = document.getElementById('form');

      emailjs.sendForm(serviceID, templateID, formElement)
       .then(() => {
         btn.value = 'Enviar';
         alert('Enviado con Exitó!');
       }, (err) => {
         btn.value = 'Enviado';
         alert(JSON.stringify(err));
       });
    }
  }
});
