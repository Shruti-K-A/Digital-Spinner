document.addEventListener('DOMContentLoaded', () => {
  const wheel = document.querySelector('#wheel');
  const button = document.querySelector('#spinButton');
  const status = document.querySelector('#status');
  const result = document.querySelector('#result');
  const description = document.querySelector('#description');

  const foods = [
    { name:'Biryani', emoji:'🍛', text:'Fragrant basmati rice layered with aromatic spices, tender pieces and a rich, savory warmth. The aroma alone can make you hungry before the first bite.' },
    { name:'Dosa', emoji:'🫓', text:'Golden, thin and wonderfully crisp at the edges, with a soft centre. Pair it with chutney and sambar for a satisfying mix of crunch, tang and spice.' },
    { name:'Butter Chicken', emoji:'🍗', text:'Tender chicken in a silky tomato-butter gravy with gentle spices. Creamy, mildly smoky and rich — pure comfort food with a luxurious aroma.' },
    { name:'Momos', emoji:'🥟', text:'Steamed, juicy dumplings with a soft wrapper and flavourful filling. Dip them into spicy chutney for an irresistible hot-and-tangy kick.' },
    { name:'Paneer Tikka', emoji:'🧀', text:'Char-grilled paneer with smoky edges, colourful vegetables and warming spices. Soft inside, slightly crisp outside and wonderfully aromatic.' },
    { name:'Hakka Noodles', emoji:'🍜', text:'Wok-tossed noodles with vegetables, savoury sauces and a delicious smoky aroma. Slippery, springy and full of bold Indo-Chinese flavour.' },
    { name:'Fried Rice', emoji:'🍚', text:'Fluffy rice tossed with vegetables, aromatics and savoury seasoning. Each bite is comforting, fragrant and packed with wok-kissed flavour.' },
    { name:'Chole Bhature', emoji:'🥘', text:'Spiced chickpea curry with fluffy, deep-fried bhature. Bold, tangy and hearty — the kind of meal that feels indulgent from the first bite.' },
    { name:'Parotta', emoji:'🫓', text:'Flaky, layered and delightfully chewy, with crisp golden edges. Tear it apart and pair it with a rich curry for an irresistible combination.' },
    { name:'Idli & Sambar', emoji:'🍲', text:'Soft, pillowy idlis paired with warm, tangy sambar. Light yet satisfying, with comforting lentil, vegetable and spice flavours.' },
    { name:'Kathi Roll', emoji:'🌯', text:'A warm flaky roll wrapped around a spicy, savoury filling with onions and fresh chutney. Juicy, tangy and perfect for a satisfying bite.' },
    { name:'Rajma Chawal', emoji:'🍚', text:'Creamy kidney bean curry served with fluffy rice. Earthy, mildly spiced and deeply comforting — classic homestyle food.' },
    { name:'Masala Dosa', emoji:'🥞', text:'A crisp golden dosa filled with fragrant spiced potato masala. Crunchy, savoury and delicious with coconut chutney and sambar.' },
    { name:'Chicken 65', emoji:'🍗', text:'Crispy, spicy chicken with a juicy centre, curry leaves and a punch of aromatic seasoning. Tangy, fiery and seriously snackable.' },
    { name:'Pav Bhaji', emoji:'🥘', text:'Buttery toasted pav with a thick, spicy vegetable bhaji. Rich, tangy and buttery with a mouth-watering street-food aroma.' },
    { name:'Pongal', emoji:'🍚', text:'Warm, soft rice and lentils with ghee, pepper and aromatic tempering. Creamy, comforting and wonderfully soothing.' },
    { name:'Vada', emoji:'🍩', text:'Crisp and golden outside with a soft, savoury centre. Enjoy it with sambar or chutney for a satisfying contrast of crunch and warmth.' },
    { name:'Dal Makhani', emoji:'🥘', text:'Slow-cooked black lentils with butter and gentle spices. Creamy, smoky and luxurious, with a rich aroma that begs for naan or rice.' },
    { name:'Naan & Paneer Butter Masala', emoji:'🫓', text:'Soft naan with creamy paneer in a silky tomato-butter gravy. Rich, aromatic and indulgent — pure restaurant-style comfort.' },
    { name:'Tandoori Chicken', emoji:'🍗', text:'Juicy chicken roasted with yogurt and aromatic spices for smoky charred edges. Bold, smoky, tangy and irresistibly fragrant.' }
  ];

  let rotation = 0;
  let spinning = false;

  function updateWheelIcons() {
    const svg = wheel.querySelector('svg');
    const oldIcons = svg.querySelector('.food-icons');
    if (oldIcons) oldIcons.remove();
    const group = document.createElementNS('http://www.w3.org/2000/svg','g');
    group.setAttribute('class','food-icons');
    group.setAttribute('font-size','5.2');
    group.setAttribute('text-anchor','middle');
    group.setAttribute('dominant-baseline','middle');
    foods.slice(0,5).forEach((food,index) => {
      const angles = [-54,18,90,162,234];
      const rad = angles[index] * Math.PI / 180;
      const x = 50 + 29 * Math.cos(rad);
      const y = 50 + 29 * Math.sin(rad);
      const text = document.createElementNS('http://www.w3.org/2000/svg','text');
      text.setAttribute('x',x);
      text.setAttribute('y',y);
      text.textContent=food.emoji;
      group.appendChild(text);
    });
    svg.appendChild(group);
  }

  updateWheelIcons();

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