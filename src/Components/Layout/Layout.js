import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, } from 'react-bootstrap';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Ghurbo Desh</a>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider/>
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">Home</NavItem>
                <NavItem eventKey={2} href="#">About Us</NavItem>
                <NavItem eventKey={2} href="#">Events</NavItem>
                <NavItem eventKey={2} href="#">Contact Us</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="container">{this.props.content}</div>
              <hr/>
          <div className="footer">
            <div className="footer-component">
              <div className="clearfix"></div>
              <div className="text-center">
                <ul className="list-inline">
                  <li>
                      <i className="fa fa-youtube fa-2x" aria-hidden="true"></i>
                  </li>
                  <li>
                      <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
                  </li>
                  <li>
                      <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
                  </li>
                  <li>
                      <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                  </li>
                  <li>
                      <i className="fa fa-skype fa-2x" aria-hidden="true"></i>
                  </li>
                </ul>
              </div>
              <h5 className="text-center">&copy; Copyright,All right reserved by LogicUnion IT Solution,2017</h5>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default Layout;