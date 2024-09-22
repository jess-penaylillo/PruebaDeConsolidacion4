document.addEventListener("DOMContentLoaded", () => {
    // Manejar el clic en una conversación
    document.querySelectorAll('.list-group-item').forEach(conversation => {
        conversation.addEventListener('click', function() {
            // Marcar como leída
            if (conversation.classList.contains('unread')) {
                conversation.classList.remove('unread');
            }

            // Obtener el nombre del contacto
            const contactName = conversation.querySelector('.contact-name').innerText;
            loadMessages(contactName);

            // Cambiar la foto de perfil y el nombre en la cabecera del chat
            const Img = conversation.querySelector('img').src;
            const chatHeader = document.querySelector('#chatBox header');
            chatHeader.querySelector('img').src = Img;
            chatHeader.querySelector('h5').innerText = contactName;
        });
    });

    

    document.getElementById("send").addEventListener("click", function() {
        const messageInput = document.getElementById("message-input");
        const messageContainer = document.getElementById("message-container");

        // Obtener el mensaje ingresado por el usuario
        const messageText = messageInput.value.trim();

        if (messageText) {
            // Crear el nuevo mensaje como HTML
            const newMessage = `
                <div class="d-flex justify-content-end mb-3">
                    <div class="bg-primary text-white p-2 rounded">
                        <p class="mb-0">${messageText}</p>
                        <small class="text-muted">Ahora</small>
                    </div>
                </div>
            `;
            
            // Agregar el nuevo mensaje al contenedor de mensajes
            messageContainer.innerHTML += newMessage;
            
            // Limpiar el campo de entrada de mensaje
            messageInput.value = "";
            
            // Hacer scroll hacia el final para ver el nuevo mensaje
            messageContainer.scrollTop = messageContainer.scrollHeight;

            // Simular una respuesta automática después de un breve retraso
            setTimeout(() => {
                const contactName = document.querySelector('#chatBox header h5').innerText;
                simulateResponse(contactName);
            }, 1000); // 1 segundo de retraso
        }
    });

    
});
