// Отримуємо елементи чатбота
const chatContainer = document.getElementById('chatbot-container');
const openChatBtn = document.getElementById('openChat');
const closeChatBtn = document.getElementById('closeChat');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

// Відкриття чатбота
openChatBtn.addEventListener('click', function() {
  chatContainer.style.display = 'flex';
  openChatBtn.style.display = 'none';
});

// Закриття чатбота
closeChatBtn.addEventListener('click', function() {
  chatContainer.style.display = 'none';
  openChatBtn.style.display = 'block';
});

// Функція генерації відповіді чатбота
function getBotResponse(message) {
  const msg = message.toLowerCase();
  if (msg.includes('hello') || msg.includes('hi')) {
    return "Hello! I'm RizzBot. How can I help you with RIZZTER Crypto?";
  } else if (msg.includes('crypto')) {
    return "Crypto is an exciting world! What would you like to know about RIZZTER Crypto?";
  } else if (msg.includes('easter')) {
    return "Easter 2025 is coming soon! Enjoy the countdown and celebrations!";
  } else if (msg.includes('time')) {
    return "Time to get RIZZTER! How can I assist you today?";
  } else {
    return "I'm not sure I understand. Could you please rephrase?";
  }
}

// Обробка форми чатбота
chatForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const userInput = chatInput.value;
  if (!userInput) return;
  
  // Додаємо повідомлення користувача
  const userMsgElem = document.createElement('div');
  userMsgElem.className = 'chat-message user-message';
  userMsgElem.textContent = userInput;
  chatMessages.appendChild(userMsgElem);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  chatInput.value = '';
  
  // Симулюємо відповідь ботa через 1 секунду
  setTimeout(function() {
    const botResponse = getBotResponse(userInput);
    const botMsgElem = document.createElement('div');
    botMsgElem.className = 'chat-message bot-message';
    botMsgElem.textContent = botResponse;
    chatMessages.appendChild(botMsgElem);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 1000);
});
