    // Logica de chat
    (function() {
        const chatWidget = document.getElementById('chatWidget');
        const closeChatBtn = document.getElementById('closeChatBtn');
        const sendBtn = document.getElementById('sendChatBtn');
        const chatInput = document.getElementById('chatInput');
        const chatMessages = document.getElementById('chatMessages');
        const askButton = document.querySelector('.btn-ask-instructor');
        
        const danielaResponses = {
            default: "Thanks for your question. I recommend reviewing Lesson 1, where I explain the basics of world religions. Do you need something more specific about a particular tradition?",
            schedule: "The World Religions course is available 24/7. You can learn at your own pace. No pressure!",
            certificate: "Yes, upon completing 100% of the lessons and the interfaith reflection project you will receive a certificate endorsed by Koko's Talk.",
            practice: "You can practice with the interactive exercises in each lesson and also in the 'Dictionary' section for religious signs.",
            duration: "The full World Religions course takes about 8 weeks if you dedicate 2-3 hours per week.",
            beginner: "Absolutely! This course introduces fundamental religious concepts. Some basic cultural awareness helps, but we start from the basics.",
            material: "All material is included on the platform. You can also download PDF guides about each religion from each lesson.",
            thanks: "You're welcome! I'm here to help you explore the world's religious traditions with respect and understanding.",
            hello: "Hello! Great to see you interested in World Religions. How can I assist you with the interfaith studies course?",
            help: "Sure, tell me what you need. I can help with Christianity, Islam, Judaism, Hinduism, Buddhism, Indigenous traditions, or religious vocabulary in LESSA.",
            prayer: "The sign for 'prayer' varies across traditions. In general, LESSA uses a reverent hand gesture near the heart. We cover specific prayer signs in Lesson 3!",
            quran: "The sign for Quran uses a hand shape representing a holy book, then a respectful gesture. Bible sign is similar with an open book motion. Check Lesson 4 on sacred texts.",
            bible: "Great question! 'Bible' is signed by mimicking an open book and then a reverent hand over heart. We demonstrate this in Lesson 2 on Christianity.",
            meditation: "Meditation sign uses hands resting on lap with a calm facial expression. Buddhism and Hinduism sections cover this in detail in Lessons 5 and 6.",
            hinduism: "Key signs for Hinduism: Om (handshape at third eye), Lotus (fingers blooming like a flower), Karma (cyclic hand motion).",
            buddhism: "We cover signs for Buddha, dharma, sangha, and nirvana (freedom and light sign) in Lesson 5 on Eastern traditions.",
            judaism: "Shabbat sign combines rest gesture and candle lighting. Torah is signed by tracing a scroll. Check Lesson 7 on Jewish traditions.",
            interfaith: "Interfaith dialogue sign uses two different handshapes meeting and rotating to represent mutual understanding and respect."
        };
        
        function getResponse(message) {
            const msg = message.toLowerCase();
            if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) 
                return danielaResponses.hello;
            if (msg.includes('schedule') || msg.includes('time') || msg.includes('hours') || msg.includes('available')) 
                return danielaResponses.schedule;
            if (msg.includes('certificate') || msg.includes('diploma') || msg.includes('certification')) 
                return danielaResponses.certificate;
            if (msg.includes('practice') || msg.includes('exercise') || msg.includes('practise')) 
                return danielaResponses.practice;
            if (msg.includes('duration') || msg.includes('how long') || msg.includes('weeks')) 
                return danielaResponses.duration;
            if (msg.includes('beginner') || msg.includes('start') || msg.includes('from zero') || msg.includes('new')) 
                return danielaResponses.beginner;
            if (msg.includes('material') || msg.includes('resource') || msg.includes('pdf')) 
                return danielaResponses.material;
            if (msg.includes('thank') || msg.includes('thanks') || msg.includes('appreciate')) 
                return danielaResponses.thanks;
            if (msg.includes('help') || msg.includes('need') || msg.includes('question') || msg.includes('doubt')) 
                return danielaResponses.help;
            if (msg.includes('pray') || msg.includes('prayer') || msg.includes('oracion')) 
                return danielaResponses.prayer;
            if (msg.includes('quran') || msg.includes('koran')) 
                return danielaResponses.quran;
            if (msg.includes('bible') || msg.includes('gospel')) 
                return danielaResponses.bible;
            if (msg.includes('meditation') || msg.includes('zen')) 
                return danielaResponses.meditation;
            if (msg.includes('hindu') || msg.includes('karma') || msg.includes('lotus')) 
                return danielaResponses.hinduism;
            if (msg.includes('buddh') || msg.includes('nirvana')) 
                return danielaResponses.buddhism;
            if (msg.includes('judaism') || msg.includes('jewish') || msg.includes('shabbat') || msg.includes('torah')) 
                return danielaResponses.judaism;
            if (msg.includes('interfaith') || msg.includes('dialogue')) 
                return danielaResponses.interfaith;
            return danielaResponses.default;
        }
        
        function addMessage(text, isUser = false) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${isUser ? 'user' : ''}`;
            
            const avatar = document.createElement('div');
            avatar.className = 'message-avatar';
            avatar.textContent = isUser ? 'YOU' : 'DL';
            
            const bubble = document.createElement('div');
            bubble.className = 'message-bubble';
            bubble.textContent = text;
            
            messageDiv.appendChild(avatar);
            messageDiv.appendChild(bubble);
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
        
        function sendUserMessage() {
            const text = chatInput.value.trim();
            if (text === '') return;
            
            addMessage(text, true);
            chatInput.value = '';
            
            setTimeout(() => {
                const reply = getResponse(text);
                addMessage(reply, false);
            }, 600);
        }
        
        if (askButton) {
            askButton.addEventListener('click', (e) => {
                chatWidget.style.display = 'flex';
            });
        }
        
        if (closeChatBtn) {
            closeChatBtn.addEventListener('click', () => {
                chatWidget.style.display = 'none';
            });
        }
        
        if (sendBtn) {
            sendBtn.addEventListener('click', sendUserMessage);
        }
        
        if (chatInput) {
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    sendUserMessage();
                }
            });
        }
        
        document.addEventListener('click', (e) => {
            if (chatWidget.style.display === 'flex' && !chatWidget.contains(e.target) && !askButton.contains(e.target)) {
                chatWidget.style.display = 'none';
            }
        });
    })();
    const allNavLinks = document.querySelectorAll('.nav-links li a');
    allNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            link.style.transform = 'scale(0.96)';
            setTimeout(() => {
                link.style.transform = '';
            }, 120);
        });
    });
    
    const navbarContainer = document.querySelector('.navbar-container');
    if (navbarContainer) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbarContainer.style.background = 'rgba(255, 255, 255, 0.85)';
                navbarContainer.style.backdropFilter = 'blur(12px)';
            } else {
                navbarContainer.style.background = 'transparent';
                navbarContainer.style.backdropFilter = 'blur(0px)';
            }
        });
        if (window.scrollY > 10) {
            navbarContainer.style.background = 'rgba(255, 255, 255, 0.85)';
            navbarContainer.style.backdropFilter = 'blur(12px)';
        }
    }