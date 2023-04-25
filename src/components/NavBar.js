import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom' 

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">{props.title}</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/about'>{props.aboutText}</Link>
        </li>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

      <div className="dropdown mx-5">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Set Mode
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleButton} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'dark'?"Dark Mode Enabled":"Enable Dark Mode"}</label>
          </div>

          <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.greenModeTheme} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'green'?"Green Mode Enabled":"Enable green Mode"}</label>
          </div>
        </ul>
      </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
        title: PropTypes.string,
        aboutText: PropTypes.string
}

Navbar.defaultProps={
    title: 'Set title here',
    aboutText: 'About'
};