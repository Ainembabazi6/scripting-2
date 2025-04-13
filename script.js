
//NAME: Ainembabazi Prossy
//REG NO: 23/U/BIT/0251/KDAY
 //STUDENT NO: 2023000251
 //YEAR OF STUDY: YEAR 2
//SEMESTER:TWO-->
//COURSE NAME:SCRIPTING LANGUAGES


// Script File

// Home Section Starts
var menuBtn = document.querySelector('.main-navbar .menu-btn');
var menuList = document.querySelector('.main-navbar .nav-list');
var menuListItems = document.querySelectorAll('.nav-list li a');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menuList.classList.toggle('active');
});

for(var i = 0; i < menuListItems.length; i++){
	menuListItems[i].addEventListener('click', menuItemClicked);
}
function menuItemClicked(){
	menuBtn.classList.remove('active');
	menuList.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 120){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}
// Home Section Ends

// Partners Section Starts 
$('.partners-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
        	items:5
        }
    }
})
// Partners Section Ends 

// Testimonials Section Starts
$('.testimonials-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        }
    }
})
// Testimonials Section Ends

const toggleButton = document.getElementById('darkModeToggle');
const icon = document.getElementById('toggleIcon');

// Update icon depending on the theme
function updateIcon() {
  icon.textContent = document.body.classList.contains('dark-mode') ? '☀' : '🌙';
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
  updateIcon();
});

// On page load, apply saved theme
window.addEventListener('DOMContentLoaded', () => {
  const isDark = localStorage.getItem('darkMode') === 'true';
  if (isDark) {
    document.body.classList.add('dark-mode');
  }
  updateIcon();
});
const links = document.querySelectorAll('.quick-links a');
links.forEach(link => {
  if (window.location.href.includes(link.getAttribute('href'))) {
    link.classList.add('active');
  }
});


document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const mainSearchForm = document.getElementById('main-search-form');
  const mainSearchInput = document.getElementById('main-search-input');
  const mainSearchButton = document.getElementById('main-search-button');
  const courseFilter = document.getElementById('course-filter');
  const viewAllButton = document.getElementById('view-all-btn');
  const enrollButtons = document.querySelectorAll('.enroll-btn');
  const modal = document.getElementById('enrollment-modal');
  const closeButton = document.querySelector('.close-btn');
  const modalCourseTitle = document.getElementById('modal-course-title');
  const modalCourseDuration = document.getElementById('modal-course-duration');
  const modalCoursePrice = document.getElementById('modal-course-price');
  const enrollmentForm = document.getElementById('enrollment-form');
  const formCourseTitle = document.getElementById('form-course-title');
  const formCourseDuration = document.getElementById('form-course-duration');
  const formCoursePrice = document.getElementById('form-course-price');
  const successMessage = document.getElementById('success-message');
  
  // Search functionality - Main banner search
  mainSearchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const searchTerm = mainSearchInput.value.toLowerCase().trim();
      courseFilter.value = searchTerm;
      filterCourses(searchTerm);
      
      // Scroll to courses section
      document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
  });
  
  mainSearchButton.addEventListener('click', function() {
      mainSearchForm.dispatchEvent(new Event('submit'));
  });
  
  // Filter courses in the course section
  courseFilter.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase().trim();
      filterCourses(searchTerm);
  });
  
  // Function to filter courses based on search term
  function filterCourses(searchTerm) {
      const courses = document.querySelectorAll('.course-card');
      
      courses.forEach(course => {
          const title = course.querySelector('.course-title').textContent.toLowerCase();
          const description = course.querySelector('.course-description').textContent.toLowerCase();
          
          if (title.includes(searchTerm) || description.includes(searchTerm) || searchTerm === '') {
              course.style.display = 'block';
          } else {
              course.style.display = 'none';
          }
      });
  }
  
  // View All button
  viewAllButton.addEventListener('click', function() {
      courseFilter.value = '';
      filterCourses('');
  });
  
  // Enrollment functionality
  enrollButtons.forEach(button => {
      button.addEventListener('click', function() {
          const courseTitle = this.getAttribute('data-course');
          const courseDuration = this.getAttribute('data-duration');
          const coursePrice = this.getAttribute('data-price');
          
          // Set modal content
          modalCourseTitle.textContent = courseTitle;
          modalCourseDuration.textContent = courseDuration;
          modalCoursePrice.textContent = coursePrice;
          
          // Set form hidden fields
          formCourseTitle.value = courseTitle;
          formCourseDuration.value = courseDuration;
          formCoursePrice.value = coursePrice;
          
          // Show modal
          modal.style.display = 'block';
          
          // Hide success message if previously shown
          successMessage.style.display = 'none';
      });
  });
  
  // Close modal
  closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
  });
  
  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });
  
  // Handle form submission
  enrollmentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const enrollmentData = {
          course: formCourseTitle.value,
          duration: formCourseDuration.value,
          price: formCoursePrice.value,
          studentName: document.getElementById('student-name').value,
          email: document.getElementById('student-email').value,
          phone: document.getElementById('student-phone').value,
          education: document.getElementById('student-education').value,
          paymentMethod: document.getElementById('payment-method').value,
          enrollmentDate: new Date().toISOString()
      };
      
      // Save to local storage
      saveEnrollment(enrollmentData);
      
      // Hide form and show success message
      enrollmentForm.classList.add('hidden');
      successMessage.style.display = 'block';
      
      // Reset form after 2 seconds
      setTimeout(function() {
          enrollmentForm.reset();
          enrollmentForm.classList.remove('hidden');
      }, 3000);
  });
  
  // Function to save enrollment to local storage
  function saveEnrollment(data) {
      // Get existing enrollments or initialize new array
      let enrollments = JSON.parse(localStorage.getItem('courseEnrollments')) || [];
      
      // Add new enrollment
      enrollments.push(data);
      
      // Save back to local storage
      localStorage.setItem('courseEnrollments', JSON.stringify(enrollments));
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');
  
  // Initially hide the success message
  successMessage.style.display = 'none';
  
  contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Reset all error messages
      const errorMessages = document.querySelectorAll('.error-message');
      errorMessages.forEach(message => {
          message.textContent = '';
      });
      
      // Get form field values
      const fullName = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Validate form fields
      let isValid = true;
      
      // Validate full name
      if (fullName === '') {
          document.getElementById('fullNameError').textContent = 'Please enter your full name';
          isValid = false;
      }
      
      // Validate email
      if (email === '') {
          document.getElementById('emailError').textContent = 'Please enter your email address';
          isValid = false;
      } else if (!isValidEmail(email)) {
          document.getElementById('emailError').textContent = 'Please enter a valid email address';
          isValid = false;
      }
      
      // Validate subject
      if (subject === '') {
          document.getElementById('subjectError').textContent = 'Please enter a subject';
          isValid = false;
      }
      
      // Validate message
      if (message === '') {
          document.getElementById('messageError').textContent = 'Please enter your message';
          isValid = false;
      }
      
      // If form is valid, submit it
      if (isValid) {
          // Here you would typically send the form data to a server
          // For demo purposes, we'll just show the success message
          contactForm.reset();
          contactForm.style.display = 'none';
          successMessage.style.display = 'flex';
          
          // Optionally reset form after a delay
          setTimeout(function() {
              successMessage.style.display = 'none';
              contactForm.style.display = 'block';
          }, 5000);
      }
  });
  
  // Email validation function
  function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
});