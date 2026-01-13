/*
================================================================================
FLOREA AI WEBSITE - MAIN JAVASCRIPT FILE
================================================================================

This file handles all the interactive functionality of the website.
You don't need to edit this file unless you want to change how things work.

All content changes should be made in data.js

================================================================================
*/

// ============================================================================
// CHATBOT DEMO ANIMATION - MUST BE DEFINED FIRST
// ============================================================================
const chatbotConversation = [
    {
        type: 'user',
        text: "I've been feeling really frustrated lately. I'm trying to learn a new skill, but progress is so slow. I just want to give up.",
        delay: 1000
    },
    {
        type: 'ai',
        text: "I hear you. Learning something new can feel challenging, especially when progress isn't as quick as we'd like. Can you tell me more about what you're learning and what's making it feel frustrating?",
        delay: 3000
    },
    {
        type: 'user',
        text: "I'm learning to play guitar. I practice every day, but I still can't play the songs I want to. It's been three months!",
        delay: 2500
    },
    {
        type: 'ai',
        text: "Three months of daily practice shows real dedication—that's something to recognize in yourself. It sounds like you're experiencing what many learners face: the gap between current ability and aspirations. Let's think about patience here. What would it look like to approach this journey with more patience toward yourself?",
        delay: 4000
    },
    {
        type: 'user',
        text: "I guess... maybe celebrating small wins? But it still feels slow.",
        delay: 2000
    },
    {
        type: 'ai',
        text: "That's a wonderful insight. Patience isn't about being passive—it's about recognizing that meaningful growth takes time. Consider this: those small wins you mentioned are actually evidence of progress. What if you kept a practice journal noting one thing you did better each day, no matter how small?",
        delay: 4500
    },
    {
        type: 'user',
        text: "That could help me see the progress I'm actually making instead of just focusing on what I can't do yet.",
        delay: 2500
    },
    {
        type: 'ai',
        text: "Exactly. You're developing patience not just with the guitar, but as a character strength that will serve you in many areas of life. This practice of noticing small progress, reframing setbacks as learning, and maintaining commitment despite slow progress—these are all expressions of patience. How does this perspective feel?",
        delay: 4000
    },
    {
        type: 'user',
        text: "Actually, it helps a lot. I think I can stick with it if I change how I'm thinking about the process.",
        delay: 2000
    }
];

let chatbotMessageIndex = 0;
let chatbotTimeout;

function displayChatbotMessage(message, index) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const typingIndicator = document.getElementById('typing-indicator');
    
    console.log('displayChatbotMessage called with:', message.type, message.text.substring(0, 50) + '...');
    
    if (!messagesContainer) {
        console.error('Messages container not found!');
        return;
    }
    
    console.log('Messages container found, proceeding...');
    
    // Show typing indicator
    if (message.type === 'ai' && typingIndicator) {
        typingIndicator.classList.add('active');
        console.log('Typing indicator shown');
    }
    
    setTimeout(() => {
        // Hide typing indicator
        if (typingIndicator) {
            typingIndicator.classList.remove('active');
        }
        
        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${message.type}`;
        messageDiv.style.animationDelay = '0s';
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = message.type === 'ai' 
            ? '<span class="material-icons">smart_toy</span>' 
            : '<span class="material-icons">person</span>';
        
        const content = document.createElement('div');
        content.className = 'message-content';
        content.textContent = message.text;
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);
        messagesContainer.appendChild(messageDiv);
        
        console.log('Message added to container:', message.type);
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // Continue to next message or restart
        chatbotMessageIndex++;
        if (chatbotMessageIndex < chatbotConversation.length) {
            const nextMessage = chatbotConversation[chatbotMessageIndex];
            chatbotTimeout = setTimeout(() => {
                displayChatbotMessage(nextMessage, chatbotMessageIndex);
            }, nextMessage.delay);
        } else {
            // Restart conversation after a pause
            console.log('Conversation complete, restarting in 8 seconds...');
            chatbotTimeout = setTimeout(() => {
                messagesContainer.innerHTML = '';
                chatbotMessageIndex = 0;
                displayChatbotMessage(chatbotConversation[0], 0);
            }, 8000);
        }
    }, message.type === 'ai' ? 2000 : 0);
}

// ============================================================================
// NAVIGATION SCROLL EFFECT
// ============================================================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ============================================================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================================================
// TEAM MODAL FUNCTIONS
// ============================================================================
function openModal(memberId) {
    const member = teamMembers.find(m => m.id === memberId);
    if (!member) return;
    
    document.getElementById('modal-name').textContent = member.name;
    document.getElementById('modal-role').textContent = member.role + ' - ' + member.department;
    
    // Set email if element exists
    const emailElement = document.getElementById('modal-email');
    if (emailElement) {
        emailElement.innerHTML = `<a href="mailto:${member.email}" style="color: white;">${member.email}</a>`;
    }
    
    document.getElementById('modal-bio').textContent = member.bio;
    document.getElementById('modal-research').textContent = member.research;
    document.getElementById('modal-education').innerHTML = member.education.replace(/\|/g, '<br>');
    document.getElementById('modal-publications').textContent = member.publications;
    
    document.getElementById('modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function closeModalOnOutside(event) {
    if (event.target.id === 'modal') {
        closeModal();
    }
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('modal');
        if (modal && modal.classList.contains('active')) {
            closeModal();
        }
    }
});

// ============================================================================
// LOAD TEAM MEMBERS ON TEAM PAGE
// ============================================================================
function loadTeamMembers() {
    const teamGrid = document.getElementById('team-grid');
    if (!teamGrid) {
        console.log('Team grid element not found');
        return;
    }
    
    if (typeof teamMembers === 'undefined' || !teamMembers) {
        console.error('teamMembers array not found!');
        teamGrid.innerHTML = '<p style="text-align: center; color: red;">Error: Team data not loaded. Please check data.js file.</p>';
        return;
    }
    
    console.log('Loading', teamMembers.length, 'team members');
    teamGrid.innerHTML = '';
    
    teamMembers.forEach(member => {
        const teamCard = document.createElement('div');
        teamCard.className = 'team-card';
        teamCard.onclick = () => openModal(member.id);
        
        teamCard.innerHTML = `
            <div class="team-image">
                ${member.image ? `<img src="${member.image}" alt="${member.name}">` : `<span class="material-icons" style="font-size: 5rem;">person</span>`}
            </div>
            <div class="team-info">
                <h3>${member.name}</h3>
                <p class="role">${member.role}</p>
                <p class="department">${member.department}</p>
            </div>
        `;
        
        teamGrid.appendChild(teamCard);
    });
    
    console.log('Team members loaded successfully');
}

// ============================================================================
// LOAD SCIENTIFIC ADVISORS ON ADVISORS PAGE
// ============================================================================
function loadAdvisors() {
    const advisorsGrid = document.getElementById('advisors-grid');
    if (!advisorsGrid) {
        console.log('Advisors grid element not found');
        return;
    }
    
    if (typeof scientificAdvisors === 'undefined' || !scientificAdvisors) {
        console.error('scientificAdvisors array not found!');
        advisorsGrid.innerHTML = '<p style="text-align: center; color: red;">Error: Advisors data not loaded. Please check data.js file.</p>';
        return;
    }
    
    console.log('Loading', scientificAdvisors.length, 'advisors');
    advisorsGrid.innerHTML = '';
    
    scientificAdvisors.forEach(advisor => {
        const advisorCard = document.createElement('div');
        advisorCard.className = 'advisor-card';
        advisorCard.onclick = () => openAdvisorModal(advisor.id);
        
        advisorCard.innerHTML = `
            <div class="advisor-image">
                ${advisor.image ? `<img src="${advisor.image}" alt="${advisor.name}">` : `<span class="material-icons" style="font-size: 5rem;">person</span>`}
            </div>
            <div class="advisor-info">
                <h3>${advisor.name}</h3>
                <p class="advisor-title">${advisor.title}</p>
                <p class="advisor-affiliation">${advisor.affiliation}</p>
            </div>
        `;
        
        advisorsGrid.appendChild(advisorCard);
    });
    
    console.log('Advisors loaded successfully');
}

function openAdvisorModal(advisorId) {
    const advisor = scientificAdvisors.find(a => a.id === advisorId);
    if (!advisor) return;
    
    document.getElementById('advisor-modal-name').textContent = advisor.name;
    document.getElementById('advisor-modal-title').textContent = advisor.title;
    document.getElementById('advisor-modal-affiliation').textContent = advisor.affiliation;
    document.getElementById('advisor-modal-bio').textContent = advisor.bio;
    document.getElementById('advisor-modal-expertise').textContent = advisor.expertise;
    document.getElementById('advisor-modal-contributions').textContent = advisor.contributions;
    
    document.getElementById('advisor-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAdvisorModal() {
    document.getElementById('advisor-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function closeAdvisorModalOnOutside(event) {
    if (event.target.id === 'advisor-modal') {
        closeAdvisorModal();
    }
}

// ============================================================================
// LOAD PUBLICATIONS ON PUBLICATIONS PAGE
// ============================================================================
function loadPublications(filter = 'all') {
    const pubList = document.getElementById('publications-list');
    if (!pubList) {
        console.log('Publications list element not found');
        return;
    }
    
    if (typeof publications === 'undefined' || !publications) {
        console.error('publications array not found!');
        pubList.innerHTML = '<p style="text-align: center; color: red;">Error: Publications data not loaded. Please check data.js file.</p>';
        return;
    }
    
    console.log('Loading publications, filter:', filter);
    pubList.innerHTML = '';
    
    let filteredPubs = publications;
    
    if (filter === 'featured') {
        filteredPubs = publications.filter(pub => pub.featured);
    } else if (filter !== 'all') {
        filteredPubs = publications.filter(pub => pub.year.toString() === filter);
    }
    
    filteredPubs.forEach(pub => {
        const pubCard = document.createElement('div');
        pubCard.className = 'publication-card';
        
        pubCard.innerHTML = `
            <h3>${pub.title}</h3>
            <p class="publication-meta">${pub.authors} (${pub.year}) | ${pub.journal}</p>
            <p>${pub.abstract}</p>
            <div class="publication-links">
                <a href="${pub.pdfLink}" class="pub-link" target="_blank">Read Paper</a>
                <a href="${pub.pdfLink}" class="pub-link" download>Download PDF</a>
                <a href="${pub.doiLink}" class="pub-link" target="_blank">DOI</a>
                <a href="#" class="pub-link" onclick="copyCitation('${pub.id}'); return false;">Citation</a>
            </div>
        `;
        
        pubList.appendChild(pubCard);
    });
    
    if (filteredPubs.length === 0) {
        pubList.innerHTML = '<p style="text-align: center; color: var(--text-light);">No publications found for this filter.</p>';
    }
    
    console.log('Loaded', filteredPubs.length, 'publications');
}

function filterPublications(filter) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    loadPublications(filter);
}

function copyCitation(pubId) {
    const pub = publications.find(p => p.id === pubId);
    if (!pub) return;
    
    const citation = `${pub.authors} (${pub.year}). ${pub.title}. ${pub.journal}. ${pub.doiLink}`;
    
    navigator.clipboard.writeText(citation).then(() => {
        alert('Citation copied to clipboard!');
    });
}

// ============================================================================
// LOAD BLOG POSTS ON BLOG PAGE
// ============================================================================
function loadBlogPosts(filter = 'all') {
    const blogGrid = document.getElementById('blog-grid');
    if (!blogGrid) return;
    
    blogGrid.innerHTML = '';
    
    let filteredPosts = blogPosts;
    
    if (filter !== 'all') {
        filteredPosts = blogPosts.filter(post => post.category === filter);
    }
    
    filteredPosts.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        blogCard.onclick = () => window.location.href = `blog-post.html?id=${post.id}`;
        
        blogCard.innerHTML = `
            <div class="blog-image">
                ${post.image ? `<img src="${post.image}" alt="${post.title}">` : ''}
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span><span class="material-icons" style="font-size: 1rem; vertical-align: middle;">calendar_today</span> ${post.date}</span>
                    <span><span class="material-icons" style="font-size: 1rem; vertical-align: middle;">person</span> ${post.author}</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="blog-post.html?id=${post.id}" class="read-more">
                    Read More
                    <span class="material-icons">arrow_forward</span>
                </a>
            </div>
        `;
        
        blogGrid.appendChild(blogCard);
    });
    
    if (filteredPosts.length === 0) {
        blogGrid.innerHTML = '<p style="text-align: center; color: var(--text-light);">No blog posts found for this category.</p>';
    }
}

function filterBlog(category) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    loadBlogPosts(category);
}

// ============================================================================
// LOAD INDIVIDUAL BLOG POST
// ============================================================================
function loadBlogPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    if (!postId) {
        window.location.href = 'blog.html';
        return;
    }
    
    const post = blogPosts.find(p => p.id === postId);
    
    if (!post) {
        window.location.href = 'blog.html';
        return;
    }
    
    // Set page title
    document.title = `${post.title} - Florea AI`;
    
    // Load post content
    document.getElementById('post-category').textContent = post.category;
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-author').textContent = post.author;
    document.getElementById('post-date').textContent = post.date;
    document.getElementById('post-content').innerHTML = post.content;
    
    // Load post image if exists
    if (post.image) {
        const imageContainer = document.getElementById('post-image-container');
        imageContainer.innerHTML = `<img src="${post.image}" alt="${post.title}">`;
    }
    
    // Load related posts
    loadRelatedPosts(post.category, post.id);
}

function loadRelatedPosts(category, currentPostId) {
    const relatedPostsContainer = document.getElementById('related-posts');
    if (!relatedPostsContainer) return;
    
    const relatedPosts = blogPosts
        .filter(post => post.category === category && post.id !== currentPostId)
        .slice(0, 3);
    
    relatedPostsContainer.innerHTML = '';
    
    relatedPosts.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        blogCard.onclick = () => window.location.href = `blog-post.html?id=${post.id}`;
        
        blogCard.innerHTML = `
            <div class="blog-image">
                ${post.image ? `<img src="${post.image}" alt="${post.title}">` : ''}
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span>${post.date}</span>
                    <span>${post.author}</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="blog-post.html?id=${post.id}" class="read-more">
                    Read More
                    <span class="material-icons">arrow_forward</span>
                </a>
            </div>
        `;
        
        relatedPostsContainer.appendChild(blogCard);
    });
}

// ============================================================================
// LOAD LATEST UPDATES ON HOME PAGE
// ============================================================================
function loadLatestUpdates() {
    const latestContainer = document.getElementById('latest-updates');
    if (!latestContainer) return;
    
    // Get 2 latest publications and 1 latest blog post
    const latestPubs = publications.slice(0, 2);
    const latestPost = blogPosts[0];
    
    latestContainer.innerHTML = '';
    
    // Add publications
    latestPubs.forEach(pub => {
        const card = document.createElement('div');
        card.className = 'publication-card';
        card.innerHTML = `
            <h3>${pub.title}</h3>
            <p class="publication-meta">${pub.authors} (${pub.year}) | ${pub.journal}</p>
            <p>${pub.abstract.substring(0, 150)}...</p>
            <div class="publication-links">
                <a href="${pub.pdfLink}" class="pub-link">Read Paper</a>
            </div>
        `;
        latestContainer.appendChild(card);
    });
    
    // Add blog post
    if (latestPost) {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        blogCard.onclick = () => window.location.href = `blog-post.html?id=${latestPost.id}`;
        
        blogCard.innerHTML = `
            <div class="blog-image">
                ${latestPost.image ? `<img src="${latestPost.image}" alt="${latestPost.title}">` : ''}
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span>${latestPost.date}</span>
                </div>
                <h3>${latestPost.title}</h3>
                <p>${latestPost.excerpt}</p>
                <a href="blog-post.html?id=${latestPost.id}" class="read-more">
                    Read More
                    <span class="material-icons">arrow_forward</span>
                </a>
            </div>
        `;
        latestContainer.appendChild(blogCard);
    }
}

// ============================================================================
// FORM HANDLING
// ============================================================================
function handleNewsletterSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    // TODO: Replace this with your actual newsletter subscription service
    // For now, just show an alert
    alert(`Thank you for subscribing with: ${email}\n\nNote: To make this functional, connect it to your email service (e.g., Mailchimp, ConvertKit)`);
    
    event.target.reset();
}

function handleContactSubmit(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        affiliation: document.getElementById('affiliation').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // TODO: Replace this with your actual form submission service
    // For now, just show an alert
    alert(`Message received from ${formData.name}!\n\nNote: To make this functional, connect it to a form service (e.g., Formspree, Netlify Forms) or your backend.`);
    
    event.target.reset();
}

// ============================================================================
// PAGE INITIALIZATION
// ============================================================================
document.addEventListener('DOMContentLoaded', function() {
    // Determine which page we're on and load appropriate content
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    const filename = page.split('?')[0]; // Remove query parameters
    
    console.log('Loading page:', filename); // Debug log
    
    // Load content based on page
    if (filename.includes('team.html') || filename === 'team.html') {
        console.log('Loading team members...'); // Debug log
        loadTeamMembers();
    } else if (filename.includes('advisors.html') || filename === 'advisors.html') {
        console.log('Loading advisors...'); // Debug log
        loadAdvisors();
    } else if (filename.includes('publications.html') || filename === 'publications.html') {
        console.log('Loading publications...'); // Debug log
        loadPublications();
    } else if (filename === 'blog.html') {
        console.log('Loading blog posts...'); // Debug log
        loadBlogPosts();
    } else if (filename.includes('blog-post.html') || filename === 'blog-post.html') {
        console.log('Loading blog post...'); // Debug log
        loadBlogPost();
    } else if (filename === 'index.html' || filename === '' || filename === '/') {
        console.log('Loading latest updates...'); // Debug log
        loadLatestUpdates();
    }
    
    // Start chatbot demo on homepage (check for element rather than filename)
    const messagesContainer = document.getElementById('chatbot-messages');
    if (messagesContainer) {
        console.log('Chatbot messages container found! Starting demo...'); // Debug log
        setTimeout(() => {
            console.log('Attempting to display first message...');
            displayChatbotMessage(chatbotConversation[0], 0);
        }, 1000);
    } else {
        console.log('No chatbot messages container found on this page.');
    }
});

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

// Add loading state
function showLoading(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = '<div class="loading">Loading...</div>';
    }
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Truncate text
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

console.log('Florea AI Website loaded successfully!');