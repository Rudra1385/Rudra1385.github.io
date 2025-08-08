// Name: Rudra Chauhan
// File: main.js
// Date: 08 August 2025
// Assignment 5 - part 1

// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';
showHideBtn.setAttribute('aria-expanded', 'false'); 
showHideBtn.onclick = function () {
  let showHideText = showHideBtn.textContent;
  if (showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
    showHideBtn.setAttribute('aria-expanded', 'true'); 
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
    showHideBtn.setAttribute('aria-expanded', 'false'); 
  }
};

// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function (e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value.trim(); 
  const commentValue = commentField.value.trim(); 

  // Prevent empty submissions 
  if (!nameValue || !commentValue) {
    alert('Please fill out both fields before submitting.');
    return;
  }

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  // Reset form fields
  nameField.value = '';
  commentField.value = '';
  nameField.focus(); 
}
