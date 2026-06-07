    // Logica de chat
    (function() {
        const chatWidget = document.getElementById('chatWidget');
        const closeChatBtn = document.getElementById('closeChatBtn');
        const sendBtn = document.getElementById('sendChatBtn');
        const chatInput = document.getElementById('chatInput');
        const chatMessages = document.getElementById('chatMessages');
        const askButton = document.querySelector('.btn-ask-instructor');
        
        const danielaResponses = {
            default: "Thanks for your question. I recommend reviewing Lesson 1, where I explain the basics of health sciences. Do you need something more specific about a particular medical topic?",
            schedule: "The Health Sciences course is available 24/7. You can learn at your own pace. No pressure!",
            certificate: "Yes, upon completing 100% of the lessons and the health communication project you will receive a certificate endorsed by Koko's Talk.",
            practice: "You can practice with the interactive exercises in each lesson and also in the 'Dictionary' section for medical and health signs.",
            duration: "The full Health Sciences course takes about 8 weeks if you dedicate 2-3 hours per week.",
            beginner: "Absolutely! This course introduces fundamental health and medical concepts. Some basic anatomy awareness helps, but we start from the basics.",
            material: "All material is included on the platform. You can also download PDF guides about each health topic from each lesson.",
            thanks: "You're welcome! I'm here to help you explore health sciences with clarity, empathy, and professionalism.",
            hello: "Hello! Great to see you interested in Health Sciences. How can I assist you with the wellness and medical terminology course?",
            help: "Sure, tell me what you need. I can help with vital signs, medical terminology, first aid, nutrition, mental health, or health-related vocabulary in LESSA.",
            bloodpressure: "The sign for 'blood pressure' uses a squeezing motion on the upper arm combined with the numbers sign. We cover vital signs in detail in Lesson 3!",
            diabetes: "The sign for diabetes uses a finger-prick gesture near the fingertip and a blood sugar monitoring motion. Check Lesson 5 on chronic conditions.",
            medication: "Great question! 'Medication' is signed by mimicking taking a pill and then a circular motion. 'Prescription' uses a writing gesture on a notepad. We demonstrate this in Lesson 2.",
            firstaid: "First aid signs use a cross gesture on the arm. CPR sign combines chest compression motion with rescue breath gesture. We cover emergency signs in Lesson 6.",
            nutrition: "Key signs for nutrition: food pyramid (building shape with hands), vitamins (sparkle from fingers), and hydration (drinking gesture). Lesson 4 covers this.",
            mentalhealth: "We cover signs for stress, anxiety, depression (heavy feeling on chest), therapy, and self-care in Lesson 7 on mental health and wellness.",
            exercise: "Exercise sign uses running motion with arms. Physical therapy combines movement plus healing gesture. Check Lesson 8 on physical wellness.",
            symptoms: "Common symptom signs: pain (pointing to affected area with pained expression), fever (hand on forehead), and nausea (stomach circling motion). Lesson 3 covers these.",
            emergency: "Emergency sign is urgent hand waves plus pointing to exit. 'Call 911' uses phone gesture plus emergency number. Very important signs in Lesson 6."
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
            if (msg.includes('blood pressure') || msg.includes('pressure') || msg.includes('vital sign')) 
                return danielaResponses.bloodpressure;
            if (msg.includes('diabetes') || msg.includes('sugar') || msg.includes('insulin')) 
                return danielaResponses.diabetes;
            if (msg.includes('medication') || msg.includes('medicine') || msg.includes('prescription') || msg.includes('pill')) 
                return danielaResponses.medication;
            if (msg.includes('first aid') || msg.includes('cpr') || msg.includes('emergency')) 
                return danielaResponses.firstaid;
            if (msg.includes('nutrition') || msg.includes('diet') || msg.includes('food') || msg.includes('vitamin')) 
                return danielaResponses.nutrition;
            if (msg.includes('mental') || msg.includes('stress') || msg.includes('anxiety') || msg.includes('depression')) 
                return danielaResponses.mentalhealth;
            if (msg.includes('exercise') || msg.includes('fitness') || msg.includes('physical')) 
                return danielaResponses.exercise;
            if (msg.includes('symptom') || msg.includes('pain') || msg.includes('fever') || msg.includes('nausea')) 
                return danielaResponses.symptoms;
            if (msg.includes('emergency') || msg.includes('911') || msg.includes('ambulance')) 
                return danielaResponses.emergency;
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