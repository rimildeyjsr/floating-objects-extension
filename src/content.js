import React from 'react';
import ReactDOM from 'react-dom';
import FloatingAnimation from './components/Floating-Animation/FloatingAnimation';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (!document.getElementById('floating-animation')) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "floating-animation");
    document.body.appendChild(newDiv);
  }
  renderAnimation(request.key);
});

function renderAnimation(key) {
  let div = document.getElementById('floating-animation');
  ReactDOM.render(<FloatingAnimation buttonElement={key}/>, div);
}

