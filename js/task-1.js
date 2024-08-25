const liItem = document.querySelectorAll('.item');
console.log(`Number of categories : ${liItem.length}`);

const liItemProp = liItem.forEach(item => {
   console.log(item.querySelector('.item > h2').textContent);
   const itemElUl = item.querySelector('ul');
   console.log(itemElUl.children.length);
});
