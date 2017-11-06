import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock'
// Importing bootstrap elements
import {Form, FormControl, Button, Tooltip, Popover, OverlayTrigger, Accordion, Panel, Tabs, Tab, Jumbotron, Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      appName: ' Bootstrap Tutorial ',
      deadline: 'December 25, 2017'
    }

}

 // This is the main area to focus, we import a bootstrap component at the top and call it in the render method.
  render() {

    const popoverLeft = (
    <Popover id="popover-positioned-left" title="Popover left">
      <strong>Make Over !</strong> Check this info.
    </Popover>
    );
    return (
      <div className="App">
        <header >

            <h2> Bootstrap Examples</h2>
        </header>



        <Jumbotron>
            <Grid>
              <Row className="show-grid">
                <Col bsSize='large' md={3}><code></code></Col>
                <Col md={6}><code><Panel text-align='left' header="Popover Example" bsStyle="primary">
                  <Form inline>
                    <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
                      <Button bsStyle="primary"   >

                        Popover
                      </Button>
                </OverlayTrigger>
                  </Form>
             </Panel></code></Col>
                <Col md={3}><code></code></Col>

              </Row>
            </Grid>



        <br/>

          <Grid>
            <Row className="show-grid">
              <Col bsSize='large' md={3}><code></code></Col>
              <Col md={6}><code>  <div>

                  <Panel header="Accordion Example" bsStyle="primary">
                    <Accordion>
                  <Panel header="Panel 1" >
                    Some Info here
                  </Panel>
                  <Panel header="Panel 2" >
                    More Info here
                  </Panel>
                  <Panel header="Panel 3" >
                    Yet another Panel
                  </Panel>
                 </Accordion>
               </Panel>


                </div>
</code></Col>
              <Col md={3}><code></code></Col>

            </Row>
          </Grid>





          <Grid>
            <Row className="show-grid">
              <Col bsSize='large' md={3}><code></code></Col>
              <Col md={6}><code>   <div>

                  <Panel header="Tabs Example" bsStyle="primary">
                    <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                      <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
                      <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
                      <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
                    </Tabs>
               </Panel>

                </div>
        </code></Col>
              <Col md={3}><code></code></Col>

            </Row>
          </Grid>


        </Jumbotron>
      </div>

    );
  }
}

export default App;
