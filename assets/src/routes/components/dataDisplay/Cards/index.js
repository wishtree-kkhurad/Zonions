import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";

const Cards = () => {
  return (
    <div className="gx-main-content">
      <Row>
        <Col xl={8} lg={12} md={12} sm={24} xs={24}>
          <Basic />
        </Col>
      </Row>

    </div>
  );
};

export default Cards;
