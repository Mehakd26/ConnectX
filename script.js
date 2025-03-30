document.addEventListener("DOMContentLoaded", function () {
    // Profile Data
    const profiles = [
        { name: "John Doe", role: "Web Developer | AI Enthusiast", img: "profile1.jpg" },
        { name: "Jane Smith", role: "Data Scientist | ML Researcher", img: "profile2.jpg" }
    ];

    const profileContainer = document.getElementById("profile-container");
    profiles.forEach(profile => {
        const profileCard = document.createElement("div");
        profileCard.classList.add("profile-card");
        profileCard.innerHTML = `
            <img src="${profile.img}" alt="Profile Picture">
            <h3>${profile.name}</h3>
            <p>${profile.role}</p>
            <button onclick="alert('Viewing ${profile.name}')">View Profile</button>
        `;
        profileContainer.appendChild(profileCard);
    });

    // Event Data
    const events = [
        { title: "AI Workshop", details: "Learn about AI and ML advancements." },
        { title: "Hackathon 2025", details: "Compete with the best developers." }
    ];

    const eventsContainer = document.getElementById("events-container");
    events.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("event-card");
        eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p>${event.details}</p>
            <button onclick="alert('Registered for ${event.title}')">Register</button>
        `;
        eventsContainer.appendChild(eventCard);
    });

    // Badge Data
    const badges = [
        { name: "AI Mastery", img: "badge1.png" },
        { name: "Full Stack Pro", img: "badge2.png" }
    ];

    const badgesContainer = document.getElementById("badges-container");
    badges.forEach(badge => {
        const badgeCard = document.createElement("div");
        badgeCard.classList.add("badge-card");
        badgeCard.innerHTML = `
            <img src="${badge.img}" alt="${badge.name}">
            <p>${badge.name}</p>
        `;
        badgesContainer.appendChild(badgeCard);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const profileCards = document.querySelectorAll(".profile-card");

    profileCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.3)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
        });
    });
});
document.querySelectorAll('.profile-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const likeButtons = document.querySelectorAll(".like-btn");
    const commentButtons = document.querySelectorAll(".comment-btn");
    const submitComments = document.querySelectorAll(".submit-comment");
    const shareButtons = document.querySelectorAll(".share-btn");

    // Like functionality
    likeButtons.forEach(button => {
        button.addEventListener("click", () => {
            let likeCount = button.querySelector(".like-count");
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        });
    });

    // Comment functionality
    submitComments.forEach((button, index) => {
        button.addEventListener("click", () => {
            const input = document.querySelectorAll(".comment-input")[index];
            const commentList = document.querySelectorAll(".comment-list")[index];

            if (input.value.trim() !== "") {
                let comment = document.createElement("li");
                comment.textContent = input.value;
                commentList.appendChild(comment);
                input.value = "";
            }
        });
    });

    // Share functionality
    shareButtons.forEach(button => {
        button.addEventListener("click", () => {
            navigator.clipboard.writeText(window.location.href);
            alert("Post link copied!");
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const likeButtons = document.querySelectorAll(".like-btn");
    const submitComments = document.querySelectorAll(".submit-comment");
    const shareButtons = document.querySelectorAll(".share-btn");

    // Like functionality
    likeButtons.forEach(button => {
        button.addEventListener("click", () => {
            let likeCount = button.querySelector(".like-count");
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        });
    });

    // Comment functionality
    submitComments.forEach((button, index) => {
        button.addEventListener("click", () => {
            const input = document.querySelectorAll(".comment-input")[index];
            const commentList = document.querySelectorAll(".comment-list")[index];

            if (input.value.trim() !== "") {
                let comment = document.createElement("li");
                comment.textContent = input.value;
                commentList.appendChild(comment);
                input.value = "";
            }
        });
    });

    // Share functionality
    shareButtons.forEach(button => {
        button.addEventListener("click", () => {
            navigator.clipboard.writeText(window.location.href);
            alert("Post link copied!");
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const likeButtons = document.querySelectorAll(".like-btn");
    const submitComments = document.querySelectorAll(".submit-comment");
    const shareButtons = document.querySelectorAll(".share-btn");

    // Like functionality
    likeButtons.forEach(button => {
        button.addEventListener("click", () => {
            let likeCount = button.querySelector(".like-count");
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        });
    });

    // Comment functionality
    submitComments.forEach((button, index) => {
        button.addEventListener("click", () => {
            const input = document.querySelectorAll(".comment-input")[index];
            const commentList = document.querySelectorAll(".comment-list")[index];

            if (input.value.trim() !== "") {
                let comment = document.createElement("li");
                comment.textContent = input.value;
                commentList.appendChild(comment);
                input.value = "";
            }
        });
    });

    // Share functionality
    shareButtons.forEach(button => {
        button.addEventListener("click", () => {
            navigator.clipboard.writeText(window.location.href);
            alert("Post link copied!");
        });
    });
});

//Image Slider (Manual)
function nextSlide(button) {
    const post = button.closest(".post");
    const slides = post.querySelector(".slides");
    let activeIndex = parseInt(slides.dataset.index || "0");

    if (activeIndex < slides.children.length - 1) {
        activeIndex++;
        slides.style.transform = `translateX(-${activeIndex * 100}%)`;
        slides.dataset.index = activeIndex;
    }
}

function prevSlide(button) {
    const post = button.closest(".post");
    const slides = post.querySelector(".slides");
    let activeIndex = parseInt(slides.dataset.index || "0");

    if (activeIndex > 0) {
        activeIndex--;
        slides.style.transform = `translateX(-${activeIndex * 100}%)`;
        slides.dataset.index = activeIndex;
    }

}
let currentSlide = 0;

function nextSlide() {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;

    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0; // Loop back to first image
    }

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function prevSlide() {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;

    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1; // Loop back to last image
    }

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector(".slides");
    const images = document.querySelectorAll(".slide");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    let index = 0;

    function showSlide(i) {
        if (i >= images.length) index = 0;
        if (i < 0) index = images.length - 1;
        slides.style.transform = `translateX(${-index * 420}px)`;
    }

    next.addEventListener("click", () => {
        index++;
        showSlide(index);
    });

    prev.addEventListener("click", () => {
        index--;
        showSlide(index);
    });

   
});
function setActive(element) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    element.classList.add('active');
}

function addPost() {
    let postContent = prompt("Enter your post content:");
    if (postContent) alert("Post added: " + postContent);
}
function askQuestion() {
    let question = prompt("What do you want to ask?");
    if (question) alert("Question posted: " + question);
}
function addEvent() {
    let event = prompt("Enter event details:");
    if (event) alert("Event added: " + event);
}
function viewBadges() {
    alert("You have collected 5 badges so far!");
}
function showPopup(action) {
    document.getElementById('popup-title').innerText = action;
    document.getElementById('popup').style.display = 'block';
}
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
// Toggle sections
function toggleSection(id) {
    let section = document.getElementById(id);
    section.classList.toggle("hidden");
}

// Alert actions
document.querySelector(".post-btn").addEventListener("click", function() {
    alert("Feature to add a post coming soon!");
});

document.querySelector(".question-btn").addEventListener("click", function() {
    alert("Feature to ask a question coming soon!");
});
function addPost() {
    alert("Feature to add a post coming soon!");
}

function askQuestion() {
    alert("Feature to ask a question coming soon!");
}

function addEvent() {
    alert("Feature to add an event coming soon!");
}

function showBadges() {
    alert("Displaying earned badges!");}

    document.addEventListener("DOMContentLoaded", function () {
        console.log("Script loaded successfully!"); // Debug check
        
        // **1️⃣ Toggle Sidebar Sections (Badges & Saved Items)**
        function toggleSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.classList.toggle("hidden"); // Show/Hide
                console.log(`Toggled section: ${sectionId}`); // Debugging
            } else {
                console.error(`Section ID '${sectionId}' not found!`);
            }
        }
    
        document.querySelectorAll(".sidebar-section h3").forEach(header => {
            header.addEventListener("click", function () {
                const sectionId = this.nextElementSibling.id;
                toggleSection(sectionId);
            });
        });
    
        // **2️⃣ Like Button Functionality**
        document.querySelectorAll(".like-btn").forEach(button => {
            button.addEventListener("click", function () {
                const likeCount = this.querySelector(".like-count");
                let count = parseInt(likeCount.textContent);
    
                if (!this.classList.contains("liked")) {
                    count += 1;
                    this.classList.add("liked");
                } else {
                    count -= 1;
                    this.classList.remove("liked");
                }
    
                likeCount.textContent = count;
                console.log(`Like count updated to ${count}`);
            });
        });
    
        // **3️⃣ Comment System**
        document.querySelectorAll(".submit-comment").forEach(button => {
            button.addEventListener("click", function () {
                const inputField = this.previousElementSibling;
                const commentText = inputField.value.trim();
                const commentList = this.nextElementSibling;
    
                if (commentText !== "") {
                    const commentItem = document.createElement("li");
                    commentItem.textContent = commentText;
                    commentList.appendChild(commentItem);
                    inputField.value = ""; // Clear input
                    console.log(`Added comment: ${commentText}`);
                } else {
                    console.warn("Comment was empty, not added.");
                }
            });
        });
    
        // **4️⃣ Active Navigation Highlighting**
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", function () {
                document.querySelectorAll(".nav-link").forEach(nav => nav.classList.remove("active"));
                this.classList.add("active");
                console.log(`Active nav changed to: ${this.textContent}`);
            });
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        console.log("Script loaded successfully!"); // Debugging check
    
    }
    );
    function toggleDropdown(id) {
        const dropdown = document.getElementById(id);
        dropdown.classList.toggle("hidden");
    
        // Rotate arrow
        const arrow = dropdown.previousElementSibling.querySelector(".arrow");
        arrow.style.transform = dropdown.classList.contains("hidden") ? "rotate(0deg)" : "rotate(180deg)";
    }
    function openPopup(id) {
        document.getElementById(id).style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    }

    function closePopup() {
        document.querySelectorAll('.popup').forEach(popup => popup.style.display = 'none');
        document.getElementById('overlay').style.display = 'none';
    }
    function toggleSection(id) {
        const section = document.getElementById(id);
        section.classList.toggle("hidden");
    }

    function showBadgeAlert() {
        alert("Woohoo! 3 badges earned!");
    }

    function openPostModal() {
        document.getElementById("postModal").classList.remove("hidden");
    }

    function closePostModal() {
        document.getElementById("postModal").classList.add("hidden");
    }

    function submitPost() {
        alert("Post submitted successfully!");
        closePostModal();
    }

    function openQuestionModal() {
        document.getElementById("questionModal").classList.remove("hidden");
    }

    function closeQuestionModal() {
        document.getElementById("questionModal").classList.add("hidden");
    }

    function submitQuestion() {
        alert("Question submitted successfully!");
        closeQuestionModal();
    }
    function showBadgeAlert() {
        alert("Woohoo! 3 badges earned!");
    }

    function toggleSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.classList.toggle("hidden");
    }
    function toggleSection(id) {
        document.getElementById(id).classList.toggle('hidden');
    }

    function showBadgeAlert() {
        alert("Woohoo! 3 Badges Earned!");
    }

    

    function viewPosts() {
        alert("Opening all posts...");
    }

    function createNewPost() {
        alert("Redirecting to create new post...");
    }

    function changePassword() {
        alert("Redirecting to password change page...");
    }

    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        alert("Dark mode toggled!");
    }

    function logout() {
        alert("Logging out...");
    }

    // chatbot
    function toggleChatbot() {
        const chatbot = document.getElementById("chatbot");
        chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
    }

    function sendMessage() {
        let userInput = document.getElementById("userInput").value;
        if (userInput.trim() === "") return;

        // Add User Message
        let chatArea = document.getElementById("chatArea");
        let userMessage = document.createElement("div");
        userMessage.classList.add("user-message");
        userMessage.innerText = userInput;
        chatArea.appendChild(userMessage);

        // Scroll to latest message
        chatArea.scrollTop = chatArea.scrollHeight;

        // Generate bot response
        setTimeout(() => {
            let botMessage = document.createElement("div");
            botMessage.classList.add("bot-message");
            botMessage.innerText = getBotResponse(userInput);
            chatArea.appendChild(botMessage);
            chatArea.scrollTop = chatArea.scrollHeight;
        }, 800);

        // Clear input field
        document.getElementById("userInput").value = "";
    }

    function getBotResponse(input) {
        input = input.toLowerCase();
        if (input.includes("badges")) {
            return "Woohoo! 🎉 You have earned 3 badges: JavaScript Master, UI/UX Designer, and React Pro!";
        } else if (input.includes("events")) {
            return "📅 Upcoming Events: 🚀 React Conf 2025 - May 5 | 🤖 AI Summit - June 10";
        } else if (input.includes("settings")) {
            return "⚙️ In Settings, you can update your profile, change privacy options, and more!";
        } else if (input.includes("hello") || input.includes("hi")) {
            return "Hey there! 😊 How can I assist you today?";
        } else if (input.includes("how are you")) {
            return "I'm doing great! Thanks for asking. What about you?";
        } else if (input.includes("thank you") || input.includes("Thanks")) {
            return "Your welcome! 😊" || "Is there anything else I can help you with?";
        }else{
            return "I am not sure about that but I'm always learning!! 🤖💙"
        }
    }

    function makeConnection(button) {
        alert("✅ Connection made successfully!"); // Show the interactive alert

        button.innerText = "Connected ✅"; // Change button text
        button.classList.add("connected"); // Disable further clicks
    }

    function createPost() {
        let postContent = document.getElementById('postText').value;
        if (postContent.trim() === "") {
            alert("Please write something before posting!");
            return;
        }
        alert("Your post has been shared successfully!");
        closePopup();
    }

    function askQuestion() {
        let questionContent = document.getElementById('questionText').value;
        if (questionContent.trim() === "") {
            alert("Please enter a question before asking!");
            return;
        }
        alert("Your question has been posted!");
        closePopup();
    }

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll(".submit-comment").forEach(button => {
            button.addEventListener("click", function () {
                let commentInput = this.previousElementSibling; // Gets the input field
                let commentText = commentInput.value.trim();
                let commentList = this.nextElementSibling; // Gets the comment list (ul)
    
                if (commentText !== "") {
                    let newComment = document.createElement("li");
                    newComment.classList.add("comment-item");
                    newComment.innerText = commentText;
    
                    commentList.appendChild(newComment);
                    commentInput.value = ""; // Clear input field after posting
                }
            });
        });
    });
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll(".submit-comment").forEach(button => {
            button.addEventListener("click", function () {
                let commentInput = this.previousElementSibling; // Gets the input field
                let commentText = commentInput.value.trim();
                let commentSection = this.closest(".comment-section"); // Gets the parent comment section
                let commentList = commentSection.querySelector(".comment-list"); // Gets the comment list (ul)
    
                if (commentText !== "") {
                    let newComment = document.createElement("li");
                    newComment.classList.add("comment-item");
                    newComment.innerText = commentText;
    
                    commentList.appendChild(newComment); // Append comment below the input field
                    commentInput.value = ""; // Clear input field after posting
                }
            });
        });
    });