document.getElementById('formContacto').addEventListener('submit', function (e) {
  e.preventDefault(); // Evita el envío inmediato del formulario

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const servicio = document.getElementById('servicio').value;
  const asunto = document.getElementById('asunto').value.trim();

  // Validar nombre: solo letras y espacios
  const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  if (!regexNombre.test(nombre)) {
    alert('El nombre solo puede contener letras y espacios, sin números ni caracteres especiales.');
    return;
  }

  // Validar correo: formato general y que termine en @gmail.com
  const regexCorreo = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if(!regexCorreo.test(correo)) {
    alert('Por favor, ingrese un correo válido que termine en @gmail.com.');
    return;
  }

  // Validar teléfono: solo números (al menos 7 dígitos para ejemplo)
  const regexTelefono = /^\d{7,}$/;
  if (!regexTelefono.test(telefono)) {
    alert('El teléfono debe contener solo números y tener al menos 7 dígitos.');
    return;
  }

  // Validar que se haya seleccionado servicio
  if (!servicio || servicio === 'Seleccione una opción') {
    alert('Por favor, seleccione un servicio.');
    return;
  }

  // Si pasa todas las validaciones:
  alert('Su mensaje ha sido enviado. Nos pondremos en contacto con usted lo antes posible.');
});