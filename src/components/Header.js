import React from 'react'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-dark sticky-top navbar container-fluid">   
    <div className="container">
        <a className="navbar-brand text-white" href="#">To-do List</a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon bg-white"> </span>
        </button>
        <div id="navbarNav" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">About</a>
                </li>
            
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Contact</a>
                </li>
            </ul>
            <form className="form-inline d-none d-md-block">
                <input className="form-control" type="text" placeholder="search"/>
                <button className="btn btn-danger"> Search </button>
            </form>
        </div>
       
    </div>
</nav>
  )
}
