// ===== Animate Sections on Scroll =====
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    },
    {
        threshold: 0.1 
    }
);

sections.forEach(section => {
    section.classList.add('fade-in'); 
    observer.observe(section); 
});

// VIDEO MODAL 
const videoModal = document.getElementById("videoModal");
const openVideoBtn = document.getElementById("CVbtn"); // Corrected ID
const closeVideo = document.getElementById("closeVideo");
const introVideo = document.getElementById("introVideo");

openVideoBtn.onclick = function() {
    videoModal.style.display = "flex";
};

closeVideo.onclick = function() {
    videoModal.style.display = "none";
    introVideo.pause();
    introVideo.currentTime = 0;
};

//  RESUME MODAL 
const resumeModal = document.getElementById("resumeModal");
const readMoreBtn = document.getElementById("readMoreBtn");
const closeResume = document.getElementById("closeResume");

readMoreBtn.onclick = function() {
    resumeModal.style.display = "flex";
};

closeResume.onclick = function() {
    resumeModal.style.display = "none";
};

//  MISSION & VISION MODAL
const mvModal = document.getElementById("mvModal");
const mvBtn = document.getElementById("missionVisionBtn");
const closeMV = document.getElementById("closeMV");

mvBtn.onclick = function() {
    mvModal.style.display = "flex";
};

closeMV.onclick = function() {
    mvModal.style.display = "none";
};

//  PROJECT MODALS 

// Project 1
const project1Modal = document.getElementById("project1Modal");
const p1Btn = document.getElementById("project1Btn");
const closeProject1 = document.getElementById("closeproject1");

p1Btn.onclick = function() {
    project1Modal.style.display = "flex";
};

closeProject1.onclick = function() {
    project1Modal.style.display = "none";
};

// Project 2
const project2Modal = document.getElementById("project2Modal");
const p2Btn = document.getElementById("project2Btn");
const closeProject2 = document.getElementById("closeproject2");

p2Btn.onclick = function() {
    project2Modal.style.display = "flex";
};

closeProject2.onclick = function() {
    project2Modal.style.display = "none";
};

// Project 3
const project3Modal = document.getElementById("project3Modal");
const p3Btn = document.getElementById("project3Btn");
const closeProject3 = document.getElementById("closeproject3");

p3Btn.onclick = function() {
    project3Modal.style.display = "flex";
};

closeProject3.onclick = function() {
    project3Modal.style.display = "none";
};

// Project 4
const project4Modal = document.getElementById("project4Modal");
const p4Btn = document.getElementById("project4Btn");
const closeProject4 = document.getElementById("closeproject4");

p4Btn.onclick = function() {
    project4Modal.style.display = "flex";
};

closeProject4.onclick = function() {
    project4Modal.style.display = "none";
};

// FAQ Modal
const faqModal = document.getElementById("faqModal");
const faqBtn = document.getElementById("faqBtn");
const closeFaq = document.getElementById("closeFaq");

faqBtn.onclick = () => {
    faqModal.style.display = "flex";
  }

  closeFaq.onclick = () => {
    faqModal.style.display = "none";
};


// Select menu icon and navbar
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Toggle navbar open/close on click
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('open');
});
