function enviarAWhatsApp(event) {
    event.preventDefault(); // Evita que la página se recargue

    // 1. Capturar los valores escritos por el usuario
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let asunto = document.getElementById('asunto').value;
    let mensaje = document.getElementById('mensaje').value;

    // 2. Tu número de teléfono de WhatsApp (incluye el código de país, por ejemplo, 502 para Guatemala, sin espacios ni símbolos +)
    let telefono = "50245107089"; 

    // 3. Formatear el texto que llegará a tu WhatsApp
    let texto = `¡Hola Margaby! Vengo desde tu portafolio web.%0A%0A` +
                `*Nombre:* ${nombre}%0A` +
                `*Correo:* ${correo}%0A` +
                `*Asunto:* ${asunto}%0A` +
                `*Mensaje:* ${mensaje}`;

    // 4. Crear el enlace directo a WhatsApp y abrirlo en una nueva pestaña
    let urlWhatsApp = `https://wa.me/${telefono}?text=${texto}`;
    window.open(urlWhatsApp, '_blank');
}