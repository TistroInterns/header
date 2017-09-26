import React from 'react'
import {
  BrowserRouter as Router,
 Link
} from 'react-router-dom'
import {Button,Navbar,NavbarBrand,NavbarToggler,Nav, Dropdown,DropdownItem, DropdownToggle,DropdownMenu
} from 'reactstrap'



export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
  <Router>
     <div className="container">
            <Navbar color="faded" light toggleable>
         <NavbarToggler/>
          <NavbarBrand href="/">Tistro Webiste</NavbarBrand>
        
            <Nav className="ml-auto" navbar>
              
             <Button outline color="info"> <Link to="/Home">Home</Link></Button>
             <Button outline color="info"> <Link to="/Testmonials">Testmonials</Link></Button>
             <Button outline color="info"> <Link to="/">Contact Us</Link></Button>
               <Dropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle outline color="info"caret>
         LogIn/Register
        </DropdownToggle>
          <DropdownMenu>
              <DropdownItem >LogIn</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Register</DropdownItem>
        </DropdownMenu>
      </Dropdown>
              
           </Nav>
       </Navbar>
     
   
    </div>
  </Router>
    );
  }
}