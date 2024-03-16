document.addEventListener('DOMContentLoaded', function() {
  var navicon = document.querySelector('.navicon');
  var toggle = document.querySelector('.toggle');

  navicon.addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.toggle('navicon--active');
    toggle.classList.toggle('toggle--active');
  });
});
