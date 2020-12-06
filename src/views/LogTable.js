/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class LogTable extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Technical Logs</CardTitle>
                  <p className="category">Data ingestion events</p>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Timestamp</th>
                        <th>Subsystem</th>
                        <th>Log level</th>
                        <th>Message</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2020-12-06T01:00:10Z</td>
                        <td>Sensors</td>
                        <td>Information</td>
                        <td>Received seismic data from 33 sensors.</td>
                      </tr>
                      <tr>
                        <td>2020-12-06T00:57:13Z</td>
                        <td>Cloud</td>
                        <td>Information</td>
                        <td>Weather forecast update received.</td>
                      </tr>
                      <tr>
                        <td>2020-12-06T00:56:43Z</td>
                        <td>Cloud</td>
                        <td>Warning</td>
                        <td>Weather forecast unavailable: 503.</td>
                      </tr>
                      <tr>
                        <td>2020-12-06T00:56:13Z</td>
                        <td>Cloud</td>
                        <td>Warning</td>
                        <td>Weather forecast unavailable: 503.</td>
                      </tr>
                      <tr>
                        <td>2020-12-06T00:55:22Z</td>
                        <td>Sensors</td>
                        <td>Information</td>
                        <td>Received soil conductivity data from 72 sensors.</td>
                      </tr>
                      <tr>
                        <td>2020-12-06T00:54:42Z</td>
                        <td>Sensors</td>
                        <td>Information</td>
                        <td>Received local weather data from 15 sensors.</td>
                      </tr>
                      <tr>
                        <td>2020-12-06T00:00:00Z</td>
                        <td>Cloud</td>
                        <td>Information</td>
                        <td>Latest satellite images received.</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default LogTable;
