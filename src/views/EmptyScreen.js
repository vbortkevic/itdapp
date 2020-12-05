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

class EmptyScreen extends React.Component {
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
            <Col >        
                    <Card className="card-chart center">
                        <CardHeader>
                        <h1 className="center">We are still working on that!</h1>
                        <h1 className="center">:)</h1>
                        </CardHeader>
                    </Card>
                </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default EmptyScreen;
