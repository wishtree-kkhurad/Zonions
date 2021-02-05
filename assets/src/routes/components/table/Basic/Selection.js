import React from "react";
import { withRouter } from 'react-router-dom'
import { Card, Col, Row, Table, Form } from "antd";
import { PlusCircleOutlined } from '@ant-design/icons'

import { allRestaurants } from '../../../../components/Home/data';
const data = allRestaurants;

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

class Selection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const columns = [
      {
        title: 'Restaurant Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => {
          console.log('inside render columns', text)
          return <span className="gx-link" onClick={() => onNameClick(text)}>{text}</span>
        }
      },

      {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: 'Action',
        key: 'action',

        render: (text) => (

          <Row className="glyphs css-mapping">

            <Col className="gx-icon-views" xl={4} lg={6} md={6} sm={8} xs={12}>
              <i className="icon icon-edit" style={{ color: 'green' }} onClick={() => onEdit(text)} />
            </Col>
            <Col className="gx-icon-views" xl={4} lg={6} md={6} sm={8} xs={12}>
              <i className="icon icon-trash" style={{ color: 'red' }} onClick={() => onDelete(text)} />
            </Col>

          </Row>
        ),
      }
    ];
    const onNameClick = (text) => {
      data.map((restro) => {
        if (restro.name === text) {
          this.props.history.push(`/restaurant/details/${restro.id}`)
        }
      })

    }

    const onDelete = (text) => {
      alert(`are you sure to delete restro with id: ${text.id}`);
      console.log('deleted successfully', text.name);
    }

    const onEdit = (text) => {
      alert(`inside on edit handler of: ${text.name}`);
      this.props.history.push({ pathname: '/restaurant/edit', data: text, from: 'Selection' })
    }

    const addHandler = () =>{
      this.props.history.push({pathname:'/restaurant/add', from:'Selection'});
    }
    return (
      <Card title={
          <Row className="glyphs css-mapping">
            <Col xl={8} lg={6} md={6} sm={8} xs={12} style={{marginLeft:'40%'}}>
              <h1 style={{paddingTop:'20px'}}>Manage Restaurant</h1>
            </Col>
            <Col xl={4} lg={6} md={6} sm={8} xs={12} style={{marginLeft:'10%', paddingTop:'20px'}}>
              <i className="gx-link icon icon-add-circle" style={{fontSize:'2rem'}} onClick={addHandler}/>
            </Col>
          </Row>
      }>
        <Table className="gx-table-responsive"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </Card>
    );
  }
};
const WrappedDemo = Form.create()(withRouter(Selection));

export default WrappedDemo;
