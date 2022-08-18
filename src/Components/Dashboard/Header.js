import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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

          <Nav.Link href="#">Documents</Nav.Link>

          <Nav.Link href="#">Activity</Nav.Link>

          <Nav.Link href="#">Chat</Nav.Link>

          <Nav.Link href="#">Invoice</Nav.Link>

          <Nav.Link href="#">Team</Nav.Link>

          <Nav.Link href="#">Settings</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {/* share button */}
      <button className="button1">
        <svg
          className="mr_10"
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
        >
          <path
            d="M9.95996 5.09844C10.3864 5.09845 10.8027 4.96866 11.1535 4.72632C11.5044 4.48398 11.7731 4.14057 11.9241 3.74177C12.075 3.34297 12.101 2.90767 11.9985 2.49376C11.896 2.07985 11.67 1.70694 11.3504 1.42463C11.0308 1.14231 10.6329 0.963968 10.2095 0.913311C9.78612 0.862654 9.35734 0.942085 8.9802 1.14104C8.60305 1.34 8.2954 1.64905 8.09817 2.0271C7.90094 2.40515 7.82347 2.83429 7.87606 3.25744L4.41806 4.98644C4.12142 4.70039 3.74718 4.50793 3.34195 4.43305C2.93671 4.35817 2.51841 4.40417 2.13913 4.56532C1.75985 4.72647 1.43637 4.99565 1.20899 5.33933C0.981597 5.68301 0.860352 6.086 0.860352 6.49809C0.860352 6.91018 0.981597 7.31317 1.20899 7.65684C1.43637 8.00052 1.75985 8.2697 2.13913 8.43086C2.51841 8.59201 2.93671 8.63801 3.34195 8.56313C3.74718 8.48825 4.12142 8.29579 4.41806 8.00974L7.87606 9.73874C7.81481 10.2303 7.9293 10.7277 8.19931 11.143C8.46931 11.5583 8.87744 11.8648 9.35156 12.0083C9.82569 12.1519 10.3353 12.1231 10.7903 11.9273C11.2453 11.7314 11.6164 11.381 11.838 10.938C12.0597 10.4949 12.1176 9.98784 12.0015 9.50626C11.8854 9.02469 11.6028 8.59966 11.2036 8.30629C10.8045 8.01291 10.3145 7.87009 9.82019 7.90306C9.32592 7.93602 8.85922 8.14266 8.50256 8.48644L5.04456 6.75744C5.06574 6.58542 5.06574 6.41146 5.04456 6.23944L8.50256 4.51044C8.87916 4.87444 9.39296 5.09844 9.95996 5.09844Z"
            fill="#F6F6F6"
          />
        </svg>
        Share
      </button>
      {/* share button  */}
    </Navbar>
  );
}

export default Header;
