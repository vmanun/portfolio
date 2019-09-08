var navHeight = 70;
var topSection = document.getElementById('top');
var skillsSection = document.getElementById('skills');
var projectsSection = document.getElementById('projects');
var contactSection = document.getElementById('contact');
var topLink = document.getElementById('top-link');
var skillsLink = document.getElementById('skills-link');
var projectsLink = document.getElementById('projects-link');
var contactLink =document.getElementById('contact-link');

console.log(topSection.offsetTop);

topLink.onclick = function () { window.scrollTo(0, topSection.offsetTop - navHeight); };
skillsLink.onclick = function () { window.scrollTo(0, skillsSection.offsetTop - navHeight); };
projectsLink.onclick = function () { window.scrollTo(0, projectsSection.offsetTop - navHeight); };
contactLink.onclick = function () { window.scrollTo(0, contactSection.offsetTop - navHeight); };