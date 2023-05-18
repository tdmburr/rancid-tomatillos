import './FooterForm.css'
import React, {Component} from 'react'

class FooterForm extends Component {
  constructor() {
    super();
    this.state = {title: ''}
  }
  render() {
    return (
      <footer>
        <form>
          <input type='text'
                 placeholder='Movie Search'>
          </input>
        </form>
      </footer>
    )
  }
}

export default FooterForm