import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid"> 
      <Link className="navbar-brand" to="/">{props.title}</Link> 
      {
      /*despite of giving a proper name we have passed
      a prop and as it is a javascript so we have to pass  
  it in the curly brackets*/
  }
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
          {/*in bootstrap success = green
                           primary=blue
                            danger=red*/}
        </form>
        {/*we have created a switch here to enable out dark mode*/}

        <div classNmae={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}> {/*we have use ternary 
                                                     opertor to make out text enable darkmode or lightmode*/ }
                                                                           
  <input class="form-check-input mx-2" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable darkmode</label>
</div>
      </div>
    </div>
  </nav>
  )
}
//TO DEFINE THE TYPE OF ARE PROPS IN OUR COMPONENTS
//INCASE INSTEAD 
Navbar.propTypes = { title:PropTypes.string.isRequired,  //here we have set title as isrequired so it is compulsory 
                                                            //for us tu pass it in the App.js
                      aboutText: PropTypes.string
                    }                               
                    // {/* we willpass proptypes.string in object */}

//WE CAN SET PROPTYPE TO DEFAULT ALSO:-
//we pass these when we dont pass the props so it will become their default values
Navbar.defaultProps ={
    title: 'set title here',
    aboutText: 'about text here'
}