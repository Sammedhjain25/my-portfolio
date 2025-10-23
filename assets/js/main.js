AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// Skill Bar Animation
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.progress-bar');
  
  skillBars.forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    if (percent) {
      // Set the width to animate to
      bar.style.width = percent + '%';
    }
  });
}

// Intersection Observer to trigger animation when skill section comes into view
const skillSection = document.querySelector('#reviews .skills-list');
if (skillSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add a small delay to ensure smooth animation
        setTimeout(animateSkillBars, 300);
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    threshold: 0.3 // Trigger when 30% of the element is visible
  });
  
  observer.observe(skillSection);
}