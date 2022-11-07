let val = document.querySelector('.accordion-homepage');
const item = document.createElement('section');
item.className = 'parent';
const text = (item.innerHTML = '<h3>My new FAQ </h3>');
console.log(val.append(item));