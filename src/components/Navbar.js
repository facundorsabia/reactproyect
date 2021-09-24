import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


function NavBar(){
    return(
        <Navbar bg="myRed" variant="dark">
            <Navbar.Brand>
                Logo
            </Navbar.Brand>
        </Navbar>
    );
}

export default NavBar