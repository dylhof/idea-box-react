import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IdeaForm from './IdeaForm/IdeaForm';
import IdeaContainer from './IdeaContainer/IdeaContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }

  removeIdea = (id) => {
    const newIdeas = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({ideas: newIdeas})
  }

  addIdea = (idea) => {
    const newIdeas = [...this.state.ideas, {title: idea.title, body: idea.body, id: Date.now()}]
    this.setState({ ideas: newIdeas })
  }

  render() {
    return (
      <div className="App">
      <h2>IdeaBox</h2>
       <IdeaForm addIdea={this.addIdea}/>
       <IdeaContainer ideas={this.state.ideas} removeIdea={this.removeIdea}/>
      </div>
    );
  }
}

export default App;
