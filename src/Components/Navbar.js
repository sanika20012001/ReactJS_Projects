import React from 'react'
// import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
   <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Textutils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <button className="btn btn-dark mx-1" onClick={props.toggleMode} type="submit">dark</button>
        <button className="btn btn-light mx-1" type="submit">light</button>
        <button className="btn btn-danger mx-1" type="submit">red</button>
        <button className="btn btn-success mx-1" onClick={props.toggleMode} type="submit">green</button>
      </form>
    */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'}Mode</label>
      </div>
    </div>
  </div>
</nav>
   </>
  )
}
