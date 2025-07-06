// scripts/chatbot.js
function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value;
    if (message) {
        const messagesDiv = document.getElementById('messages');
        messagesDiv.innerHTML += `<div>You: ${message}</div>`;
        input.value = '';
        // Simulate Nova's response
        setTimeout(() => {
            messagesDiv.innerHTML += `<div>Nova: Thank you! What is your business type?</div>`;
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }, 1000);
    }
}
