document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const menu = document.querySelector('.menu');

  menuIcon.addEventListener('click', function() {
      menu.classList.toggle('active');
  });

  const menuLinks = document.querySelectorAll('.menu a');

  menuLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          window.scrollTo({
              top: target.offsetTop,
              behavior: 'smooth'
          });
          menu.classList.remove('active');
      });
  });
});

// latest update 
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(index) {
      slides.forEach(function(slide) {
          slide.classList.remove('active');
      });
      slides[index].classList.add('active');
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }

  setInterval(nextSlide, 3000); // Change slide every 3 seconds
});


document.addEventListener('DOMContentLoaded', function() {
  const documentRows = document.querySelectorAll('#documents .documents-table tbody tr');

  documentRows.forEach(function(row) {
      const fileLink = row.querySelector('.title-column');
      const fileType = row.querySelector('.type-column i').classList[1];

      fileLink.addEventListener('click', function() {
          // Replace 'example.pdf' with the actual file URL
          const fileURL = 'example.pdf';
          const link = document.createElement('a');
          link.href = fileURL;
          link.setAttribute('download', '');
          link.style.display = 'none';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      });
  });
});
