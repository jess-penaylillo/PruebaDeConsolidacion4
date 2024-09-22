const messageContainer = document.getElementById('cady-messages');
const backToContactsBtn = document.getElementById('backToContactsBtn');
const contactList = document.getElementById('contactList');

messageContainer.addEventListener('scroll', () => {
    // Comprobar si el scroll está en la parte inferior
    if (messageContainer.scrollTop + messageContainer.clientHeight < messageContainer.scrollHeight) {
        backToContactsBtn.style.display = 'block'; // Mostrar la flecha
    } else {
        backToContactsBtn.style.display = 'none'; // Ocultar la flecha
    }
});

// Manejar el click en la flecha para volver a la lista de contactos
backToContactsBtn.addEventListener('click', () => {
    // Mostrar la lista de contactos y ocultar el chat
    contactList.classList.remove('d-none'); // Mostrar la lista de contactos
    document.getElementById('cady-chat').classList.add('d-none'); // Ocultar el chat
    document.getElementById('regina-chat').classList.add('d-none'); // Ocultar el chat

});

// Lógica para volver al chat desde la lista de contactos (opcional)
function showChat() {
    contactList.classList.add('d-none'); // Ocultar la lista de contactos
    document.getElementById('cady-chat').classList.remove('d-none'); // Mostrar el chat cady
    
}

function goBack() {
    window.history.back(); // Regresa a la página anterior
    // O puedes redirigir a una sección específica
    // window.location.href = 'tu_seccion.html';
}

function showContacts() {
    const contactList = document.getElementById('contactList');
    const chatContent = document.getElementById('cady-chat');

    // Alternar la visibilidad de la lista de contactos y del chat
    contactList.classList.toggle('d-none'); // Mostrar/Ocultar lista de contactos
    chatContent.classList.toggle('d-none'); // Mostrar/Ocultar contenido del chat
}