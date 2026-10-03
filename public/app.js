document.addEventListener('DOMContentLoaded', () => {
  const wheel = document.querySelector('#wheel');
  const button = document.querySelector('#spinButton');
  const status = document.querySelector('#status');
  const result = document.querySelector('#result');
  const foods = ['Biryani', 'Dosa', 'Butter Chicken', 'Momos', 'Paneer'];
  let rotation = 0;
  let spinning = false;

  button.addEventListener('click', () => {
    if (spinning) return;
    spinning = true;
    button.disabled = true;
    button.textContent = 'Spinning…';
    status.textContent = 'Consulting the dinner gods…';
    result.textContent = '';

    const pick = Math.floor(Math.random() * foods.length);
    const slice = 360 / foods.length;
    const target = 360 * 6 + (360 - (pick * slice + slice / 2));
    rotation += target;
    wheel.style.transform = 'rotate(' + rotation + 'deg)';

    setTimeout(() => {
      result.textContent = foods[pick];
      status.textContent = "Tonight you're having";
      button.disabled = false;
      button.textContent = 'SPIN AGAIN';
      spinning = false;
    }, 3200);
  });
});