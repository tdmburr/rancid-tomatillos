import './FooterForm.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'


class FooterForm extends Component {
  constructor() {
    super();
    this.state = {
      title: ''
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState !== this.state) {
      this.props.filterMovies(this.state);
    }
  }

  clearMovie = (event) => {
    event.preventDefault()
    this.setState({title: ''})
  }

  render() {
    return (
      <footer>
        <form>
          <input type='text'
                 placeholder='Movie Search (Case Sensitive)'
                 name='title'
                 value={this.state.title}
                 onKeyDown={event => event.key === 'Enter' && event.preventDefault()}
                 onChange={event => this.handleChange(event)}>
          </input>
        </form>
        <button className='clearButton' onClick={event => this.clearMovie(event)}>Clear Movies</button>
      </footer>
    )
  }
}

export default FooterForm

FooterForm.propTypes = {
  filterMovies: PropTypes.func.isRequired
}