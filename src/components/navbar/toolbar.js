import React from 'react'

class Toolbar extends React.Component {

  constructor(){
    super()

    this.state = {
      menubar:false
    }
  }
  render () {
    return (
      <nav className='molecule-toolbar'>
        <button className='atom-toolbar-control'>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>  

        <ul className='atom-navbar'>
          <li className='atom-navbar-title'>
            <a href=''>O Trovador</a>
          </li>
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
        </ul>
      </nav>
    )
  }
}

export default Toolbar
