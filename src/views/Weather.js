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
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartExample9,
  chartExample4,
  chartExample5,
  chartExample6,
  chartExample7,
  chartExample8,
} from "variables/charts.js";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  render() {
    return (
      <>
        <div className="content">
            <Row>
                <Col lg="3">        
                    <Card className="card-chart center">
                        <CardHeader>
                        <p className="center">Average of Rain probability %</p>
                        <h3 className="center">45.45</h3>
                        </CardHeader>
                    </Card>
                </Col>
                <Col lg="3">
                <Card className="card-chart center">
                    <CardHeader>
                        <p className="center">Average of Storm probability %</p>
                        <h3 className="center">69.69</h3>
                        </CardHeader>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card className="card-chart center">
                        <CardHeader>
                        <p className="center">Average of Maximum air pressure</p>
                        <h3 className="center">880.30</h3>
                        </CardHeader>
                    </Card> 
                </Col>
                <Col lg="3">
                    <Card className="card-chart center">
                        <CardHeader>
                        <p className="center">Average of Air temperature celsius</p>
                        <h3 className="center">20.47</h3>
                        </CardHeader>
                    </Card> 
                </Col>
            </Row>
          <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category"></h5>
                  <CardTitle tag="h4">
                  <i className="fas fa-wind"></i>
                    Average of wind speed in meters per second by day
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample5.data}
                      options={chartExample5.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category"></h5>
                  <CardTitle tag="h4">
                  <i className="fas fa-bolt" />{" "}
                    Storm risks %
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample9.data}
                      options={chartExample9.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
            <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category"></h5>
                  <CardTitle tag="h4">
                  <i className="fas fa-cloud-rain"></i>
                   Precipitation %
                  </CardTitle>
                  
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample7.data}
                      options={chartExample7.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category"></h5>
                  <CardTitle tag="h4">
                  <i className="fas fa-cloud-sun" />{" "}
                    Weather temperature
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample8.data}
                      options={chartExample8.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category"></h5>
                  <CardTitle tag="h4">
                  <i className="fas fa-temperature-high" />{" "}
                    Ground temperature
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample4.data}
                      options={chartExample4.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
            <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category"></h5>
                  <CardTitle tag="h4">
                  <i className="fas fa-magnet"></i>
                    Average of magnitude by hour
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample6.data}
                      options={chartExample6.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            </Row>
         
        </div>
      </>
    );
  }
}

export default Weather;
