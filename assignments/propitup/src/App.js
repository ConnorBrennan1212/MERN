import React from 'react';
import './App.css';
import PersonComponent from './component/PersonComponent';


function App() {
  return (
    <div className="App">
      <PersonComponent firstName = {"Tommy"} lastName = {"Pickles"} age = {13} hairColor = {"Purple"}/>
      <PersonComponent firstName = {"Eliza"} lastName = {"Thornberry"} age = {9} hairColor = {"Red"}/>
      <PersonComponent firstName = {"Harry"} lastName = {"Potter"} age = {17} hairColor = {"Brown"}/>
      <PersonComponent firstName = {"Sabrina"} lastName = {"Spellman"} age = {16} hairColor = {"Blonde"}/>
    </div>
  );
}

export default App;
