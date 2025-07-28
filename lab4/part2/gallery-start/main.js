
// Name: Rudra Chauhan
// File: main.js
// Date: 28 July 2025
// Assignment 4 - part 2


const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altName = {
  'pic1.jpg': 'Closeup of a human eye',
  'pic2.jpg': 'Wavy blonde pattern',
  'pic3.jpg': 'Purple and white flowers',
  'pic4.jpg': 'An ancient Egyptian mural',
  'pic5.jpg': 'Butterfly on a leaf'
};

/* Looping through images */
for (let i = 1; i <= imageNames.length; i++) {
  const filename = `pic${i}.jpg`;
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${filename}`);
  newImage.setAttribute('alt', altName[filename]);

  newImage.addEventListener('click', function () {
    displayedImage.setAttribute('src', `images/${filename}`);
    displayedImage.setAttribute('alt', altName[filename]);
  });

  thumbBar.appendChild(newImage);
}


/* Wiring up the Darken/Lighten button */
