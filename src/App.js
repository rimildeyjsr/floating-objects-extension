/*global chrome*/
import React from 'react';
import './App.css';
import buttonConfig from './buttonConfig';
import ImageButton from "./components/Image-Button/ImageButton";

function App() {
  function handleClick(key) {
    console.log("here " + key);
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {key: key});
    })
  }

  return (
    <div className="app">
      {
        Object.keys(buttonConfig).map((item) => {
          return (
            <ImageButton
              imageSrc={buttonConfig[item].src}
              imageAltText={buttonConfig[item].alt}
              key={buttonConfig[item].key}
              imageKey={buttonConfig[item].key}
              handleClick={handleClick}
            />
          )
        })
      }
    </div>
  );
}

export default App;
