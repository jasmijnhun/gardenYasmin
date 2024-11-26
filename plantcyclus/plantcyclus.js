document.querySelectorAll('.stage').forEach(stage => {
  stage.addEventListener('click', function () {
    alert(`Stage: ${this.querySelector('span').textContent}`);
  });
});
