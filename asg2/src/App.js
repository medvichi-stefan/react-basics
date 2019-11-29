import React, { Component } from 'react';
import './App.css';
import VComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    textLength: null,
    userInput: ''
  };

  inputHandler = (e) => {
    const input = e.target.value;
    const inputLength = input.length;
    this.setState({
      textLength: inputLength,
      userInput: input ? input : ''
    });
  }

  deleteCharacter = (index) => {
    const charIndex = index;
    let currentUserInput = this.state.userInput.split('');
    currentUserInput.splice(charIndex, 1);
    this.setState({
      userInput: currentUserInput.join('')
    });
  }

  renderParagraph = () => {
    return this.state.userInput ? <p>{this.state.userInput}</p> : null;
  }

  renderCharacters = () => {
    let result = null;
    if (this.state.userInput) {
      result = (
        <div className="text">
          {this.state.userInput.split('').map((chr, i) => {
            return <CharComponent
            key={i}
            character={chr}
            click={(e) => this.deleteCharacter(i) }
            />
          })}
        </div>
      );
    }
    return result;
  }

  renderValidation = () => {
    let result = null;
    if (this.state.userInput) {
      result = <VComponent inputLength={this.state.textLength} minimumLength="5" />;
    }
    return result;
  }

  render() {
    let [ paragraph, VComp, characters ] = [ this.renderParagraph(), this.renderValidation(), this.renderCharacters() ];

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type="text" name="input_text" onChange={this.inputHandler} value={this.state.userInput} />
        {paragraph}
        {VComp}
        {characters}
      </div>
    );
  }
}

export default App;
