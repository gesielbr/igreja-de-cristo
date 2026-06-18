'use strict';

document.querySelectorAll('[data-current-year]').forEach(function (element) {
  element.textContent = new Date().getFullYear();
});

document.querySelectorAll('.needs-validation').forEach(function (form) {
  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  }, false);
});


/* Lightbox acessível da galeria: navegação por evento, clique e teclado */
(function () {
  var galleryButtons = Array.prototype.slice.call(document.querySelectorAll('.gallery-trigger'));
  var modalElement = document.getElementById('galleryLightbox');

  if (!galleryButtons.length || !modalElement || typeof bootstrap === 'undefined') {
    return;
  }

  var modal = new bootstrap.Modal(modalElement);
  var modalTitle = document.getElementById('galleryLightboxTitle');
  var modalImage = document.getElementById('galleryImage');
  var modalCaption = document.getElementById('galleryCaption');
  var modalCounter = document.getElementById('galleryCounter');
  var prevButton = document.getElementById('galleryPrev');
  var nextButton = document.getElementById('galleryNext');
  var activeGroup = [];
  var activeIndex = 0;

  function updatePhoto() {
    var photo = activeGroup[activeIndex];

    if (!photo) {
      return;
    }

    modalTitle.textContent = photo.dataset.title;
    modalImage.src = photo.dataset.src;
    modalImage.alt = photo.dataset.alt;
    modalCaption.textContent = photo.dataset.caption;
    modalCounter.textContent = (activeIndex + 1) + ' / ' + activeGroup.length;
  }

  function move(step) {
    activeIndex = (activeIndex + step + activeGroup.length) % activeGroup.length;
    updatePhoto();
  }

  galleryButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var groupName = button.dataset.gallery;
      activeGroup = galleryButtons.filter(function (item) {
        return item.dataset.gallery === groupName;
      });
      activeIndex = activeGroup.indexOf(button);
      updatePhoto();
      modal.show();
    });
  });

  prevButton.addEventListener('click', function () { move(-1); });
  nextButton.addEventListener('click', function () { move(1); });

  modalElement.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      move(-1);
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      move(1);
    }
  });

  modalElement.addEventListener('shown.bs.modal', function () {
    nextButton.focus();
  });
}());
