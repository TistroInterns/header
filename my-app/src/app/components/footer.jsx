import React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';

function footer(/*props*/) {
  return (
    <footer  >
      <Grid>
        <Nav justified className="container">
          <NavItem
            eventKey={1}>
            Downloads
          </NavItem>
          <NavItem
            eventKey={2}
            title="Item">
           FAQ
          </NavItem>
          <NavItem
            eventKey={3}>
           Testmonials
          </NavItem>
        </Nav>
        <div className="text-center small copyright">

          © Tistro Website 2017
         <p> Contact us on:</p>
         <p> Email:wessel@code-etal.tech</p>
         <p> call:011 587 7898</p>
         <p> Address: 2 Selbourne Rd, Fourways, Sandton </p>
        </div>

      </Grid>
    </footer>
  );
}

export default footer;