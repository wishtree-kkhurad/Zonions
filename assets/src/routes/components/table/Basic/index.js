import React from "react";
import {Col, Row} from "antd";

import Simple from "./Simple";
import Selection from "./Selection";
import Size from "./Size";
import Title from "./Title";
import ColRowSpan from "./ColRowSpan";


const BasicTable = () => {
  return (
    <Row>
      
      <Col span={24}>
        <Selection/>
      </Col>
      
    </Row>
  );
};

export default BasicTable;
