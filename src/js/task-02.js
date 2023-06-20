const list = document.querySelector('#ingredients');
console.log(list);

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const items = ingredients.map(ingredient => {
  const li = document.createElement('li');
li.classList.add('item');
li.textContent = ingredient;
console.log(li);
return li;
});

console.log(items);
list.append(...items);
console.log(list);
list.style.listStyle = 'none';

