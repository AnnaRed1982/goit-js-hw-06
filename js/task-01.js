const categories = document.querySelectorAll('.item');
console.log('Number of categories: ', categories.length);

categories.forEach(elem => {
  const title = elem.querySelector('h2');
  console.log('Category: ', title.textContent);

  const elements = elem.querySelectorAll('li');
  console.log('Elements:', elements.length);
});
