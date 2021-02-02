import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import {Button, Card, Col, Row} from "antd";

import ContainerHeader from "../../../components/ContainerHeader/index";
import IntlMessages from "../../../util/IntlMessages";

class SweetAlerts extends React.Component {
  onConfirm = () => {
    this.setState({
      warning: false,
    });
  };
  deleteFile = () => {
    this.setState({
      warning: false
    })
  };
  onCancelDelete = () => {
    this.setState({
      warning: false
    })
  };
  onCancel = () => {
    this.setState({
      custom: false,
      prompt: false
    })
  };

  constructor() {
    super();
    this.state = {
      warning: false
    };
  }

  render() {
    const {warning} = this.state;
    return (
      <div className="gx-main-content">
        <ContainerHeader title={<IntlMessages id="extension.sweetAlerts"/>} match={this.props.match}/>

        <Row>
          <Col lg={8} md={12} sm={24} xs={24}>
            <Card className="gx-text-center">
              <Button className="gx-mb-0" type="primary" onClick={() => {
                this.setState({warning: true})
              }}><IntlMessages id="sweetAlerts.warning"/></Button>
            </Card>

          </Col>
        </Row>
        <SweetAlert show={warning}
                    warning
                    showCancel
                    confirmBtnText={<IntlMessages id="sweetAlerts.yesDeleteIt"/>}
                    confirmBtnBsStyle="danger"
                    cancelBtnBsStyle="default"
                    title={<IntlMessages id="sweetAlerts.areYouSure"/>}
                    onConfirm={this.deleteFile}
                    onCancel={this.onCancelDelete}
        >
          <IntlMessages id="sweetAlerts.youWillNotAble"/>
        </SweetAlert>
      </div>
    )
  }
}

export default SweetAlerts;
