import React from 'react'
import {Link} from "react-router-dom"
export default function Navbar() {
  return (
    <>
    <nav       className="navbar navbar-expand-lg bg-body-tertiary bg-primary p-3" data-bs-theme="dark">
  <div       className="container-fluid">
    <Link      className="navbar-brand" to="/">Navee</Link>
    <button    className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span    className="navbar-toggler-icon"></span>
    </button>
    <div    className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul    className="navbar-nav me-auto mb-2 mb-lg-0">
        <li    className="nav-item">
          <Link   className="nav-link active" aria-current="page" to="/business">business</Link>
        </li>
        <li    className="nav-item">
          <Link    className="nav-link" to="/entertainment">entertainment</Link>
        </li>
        {/*<li    className="nav-item dropdown">
          <a    className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul    className="dropdown-menu">
            <li><a    className="dropdown-item" href="#">Action</a></li>
            <li><a    className="dropdown-item" href="#">Another action</a></li>
            <li><hr    className="dropdown-divider" /></li>
            <li><a className="dropdown-item" to="/business">Business</Link></li>
          </ul>
  </li>*/}
  <li    className="nav-item">
          <Link    className="nav-link" to="/general">General</Link>
        </li>
        <li    className="nav-item">
          <Link    className="nav-link" to="/Health">Health</Link>
        </li>
        <li    className="nav-item">
          <Link    className="nav-link" to="/Science">Science</Link>
        </li>
        <li    className="nav-item">
          <Link    className="nav-link" to="/Sports">Sports</Link>
        </li>
        <li    className="nav-item">
          <Link    className="nav-link" to="/technology">technology</Link>
        </li>
        <li    className="nav-item">
          <a    className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form    className="d-flex" role="search">
        <input    className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button    className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

