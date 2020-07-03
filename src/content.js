import React from 'react';
import ReactDOM from 'react-dom';
import FloatingAnimation from './components/Floating-Animation/FloatingAnimation';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request.key);
  injectAnimationComponent(request.key);
});

function injectAnimationComponent(key) {
  console.log('function ' + key);
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "floating-animation");
  document.body.appendChild(newDiv);
  ReactDOM.render(<FloatingAnimation buttonElement={key}/>, newDiv);
}

