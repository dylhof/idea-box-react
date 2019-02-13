import React, {Component} from 'react';

export default class IdeaForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: '',
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addIdea(this.state)
    this.setState({title: '', body: ''})
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='title-input'>Title</label>
        <input id='title-input' value={this.state.title} name='title' onChange={this.handleChange}/>
        <label htmlFor='body-input'>Body</label>
        <input id='body-input' value={this.state.body} name='body' onChange={this.handleChange}/>
        <button>Submit</button>
      </form>
    )
  }
}