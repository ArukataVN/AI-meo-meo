document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chatBox');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    
    // Sample AI responses in Vietnamese
    const aiResponses = [
        "Xin chào! Tôi có thể giúp gì cho bạn?",
        "Rất vui khi được hỗ trợ bạn.",
        "Tôi là trợ lý AI, tôi có thể cung cấp thông tin và trả lời câu hỏi của bạn.",
        "Tôi đang liên tục học hỏi để phục vụ bạn tốt hơn.",
        "Đó là một câu hỏi thú vị! Để tôi tìm hiểu thêm.",
        "Tôi không chắc chắn, nhưng tôi sẽ cố gắng tìm câu trả lời cho bạn.",
        "Tôi có thể giúp bạn với nhiều chủ đề khác nhau.",
        "Bạn có thể hỏi tôi bất cứ điều gì và tôi sẽ cố gắng hết sức để giúp bạn.",
        "Cảm ơn bạn đã trao đổi với tôi!"
    ];
    
    // Function to add message to chat
    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        
        if (isUser) {
            messageDiv.classList.add('user');
        } else {
            messageDiv.classList.add('bot');
        }
        
        const messagePara = document.createElement('p');
        messagePara.textContent = message;
        
        messageDiv.appendChild(messagePara);
        chatBox.appendChild(messageDiv);
        
        // Scroll to bottom of chat
        chatBox.scrollTop = chatBox.scrollHeight;
    }
    
    // Function to get random AI response
    function getAIResponse() {
        const randomIndex = Math.floor(Math.random() * aiResponses.length);
        return aiResponses[randomIndex];
    }
    
    // Function to handle user message
    function handleUserMessage() {
        const message = userInput.value.trim();
        
        if (message !== '') {
            // Add user message
            addMessage(message, true);
            
            // Clear input
            userInput.value = '';
            
            // Add AI response after slight delay
            setTimeout(() => {
                const aiResponse = getAIResponse();
                addMessage(aiResponse);
            }, 500);
        }
    }
    
    // Event listeners
    sendBtn.addEventListener('click', handleUserMessage);
    
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserMessage();
        }
    });
    
    // Add some keywords matching for Vietnamese
    userInput.addEventListener('input', () => {
        const input = userInput.value.toLowerCase();
        
        // Simple keyword matching
        if (input.includes('xin chào') || input.includes('chào') || input.includes('hello')) {
            // Show typing indicator
            // This would be implemented with a proper typing indicator in a real app
        }
    });
    
    // Animated typing effect for the initial message
    const initialMessage = "Xin chào! Tôi là trợ lý AI. Tôi có thể giúp gì cho bạn?";
    let charIndex = 0;
    
    // Remove the initial message that's in the HTML
    chatBox.innerHTML = '';
    
    // Create a new message element
    const initialMessageDiv = document.createElement('div');
    initialMessageDiv.classList.add('message', 'bot');
    const initialMessagePara = document.createElement('p');
    initialMessageDiv.appendChild(initialMessagePara);
    chatBox.appendChild(initialMessageDiv);
    
    // Type the initial message
    const typeInitialMessage = setInterval(() => {
        if (charIndex < initialMessage.length) {
            initialMessagePara.textContent += initialMessage.charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(typeInitialMessage);
        }
    }, 50);
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // In a real app, this would send the form data to a server
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // For demonstration, just show an alert
            alert(`Cảm ơn ${name} đã gửi tin nhắn! Chúng tôi sẽ liên hệ lại với bạn sớm.`);
            
            // Reset form
            contactForm.reset();
        });
    }
}); 