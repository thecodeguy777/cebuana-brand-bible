// Simple script to capture viewport screenshots while scrolling
const screenshots = [];
let scrollPosition = 0;
const viewportHeight = window.innerHeight;
const totalHeight = document.documentElement.scrollHeight;

console.log('Total height:', totalHeight);
console.log('Viewport height:', viewportHeight);
console.log('Screenshots needed:', Math.ceil(totalHeight / viewportHeight));
