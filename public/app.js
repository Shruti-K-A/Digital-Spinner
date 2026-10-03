document.addEventListener('DOMContentLoaded', () => {
  const wheel = document.querySelector('#wheel');
  const button = document.querySelector('#spinButton');
  const status = document.querySelector('#status');
  const result = document.querySelector('#result');
  const description = document.querySelector('#description');

  const foods = [
    { name: 'Biryani', emoji: '🍛', text: 'Fragrant basmati rice layered with aromatic spices, tender pieces and a rich, savory warmth. The aroma alone can make you hungry before the first bite.' },
    { name: 'Dosa', emoji: '🫓', text: 'Golden, thin and wonderfully crisp at the edges, with a soft centre. Pair it with chutney and sambar for a satisfying mix of crunch, tang and spice.' },
    { name: 'Butter Chicken', emoji: '🍗', text: 'Tender chicken in a silky tomato-butter gravy with gentle spices. Creamy, mildly smoky and rich — pure comfort food with a luxurious aroma.' },
    { name: 'Momos', emoji: '🥟', text: 'Steamed, juicy dumplings with a soft wrapper and a flavourful filling. Dip them into spicy chutney for that irresistible hot-and-tangy kick.' },
    { name: 'Paneer', emoji: '🧀', text: 'Soft, satisfying paneer that soaks up the flavours of its masala. Creamy, hearty and aromatic — a delicious choice when you want something comforting.' }
  ];

  let rotation = 0;
  let spinning = false;

  button.addEventListener('click', () => {
    if (spinning) return;
    spinning = true;
    button.disabled = true;
    button.textContent = 'Spinning…';
    status.textContent = 'Choosing something delicious…';
    result.textContent = '';
    description.textContent = '';

    const pick = Math.floor(Math.random() * foods.length);
    const slice = 360 / foods.length;
    const target = 360 * 6 + (360 - (pick * slice + slice / 2));
    rotation += target;
    wheel.style.transform = 'rotate(' + rotation + 'deg)';

    setTimeout(() => {
      const food = foods[pick];
      result.textContent = food.emoji + ' ' + food.name;
      status.textContent = "Tonight you're having";
      description.textContent = food.text;
      button.disabled = false;
      button.textContent = 'SPIN AGAIN';
      spinning = false;
    }, 3200);
  });
});