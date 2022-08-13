import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import IconButton from "@material-ui/core/IconButton";

function Header() {
  return (
          <Navbar className="main-header" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="navbar_navigation">
                                <NavDropdown title="Madhouse Music App" id="basic-nav-dropdown">
                                    <NavDropdown.Item>Option 1</NavDropdown.Item>
                                    <NavDropdown.Item>Option 2</NavDropdown.Item>
                                    {/* <DropdownItem divider /> */}
                                    <NavDropdown.Item>Reset</NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link href="#">Overview</Nav.Link>


                                <Nav.Link href="#">
                                    Documents
                                </Nav.Link>


                                <Nav.Link href="#">
                                    Activity
                                </Nav.Link>


                                <Nav.Link href="#">
                                    Chat
                                </Nav.Link>


                                <Nav.Link href="#">
                                    Invoice
                                </Nav.Link>


                                <Nav.Link href="#">
                                    Team
                                </Nav.Link>


                                <Nav.Link href="#">
                                    Settings
                                </Nav.Link>


                            </Nav>
                        </Navbar.Collapse>
                         {/* share button */}
                    <IconButton color="inherit">
                       
                       </IconButton>
                       {/* share button  */}
                    </Navbar>
  )
}

export default Header
