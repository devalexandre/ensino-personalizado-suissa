import React from 'react'

class Toolbar extends React.Component {

  constructor () {
    super()

    this.state = {
      menubar: false
    }
  }
  render () {
    return (
      <nav className='molecule-toolbar'>
        <button className='atom-toolbar-control'>
          <i className='fa fa-bars' aria-hidden='true'></i>
        </button>
        <h3 className='atom-navbar-title'><a href=''>O Trovador</a></h3>
        <ul className='molecule-navbar-items'>
          <li className='atom-navbar-item'>
            <a href=''>Home</a>
          </li>
          <li className='atom-navbar-item'>
            <a href=''>About</a>
          </li>
          <li className='atom-navbar-item'>
            <a href=''>contact</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Toolbar
