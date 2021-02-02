import React from "react";

import { Card, Col, Row, Divider, Icon, Table, Button} from "antd";

import { allRestaurants } from '../../../../components/Home/data';
const data = allRestaurants;

const columns = [
  {
    title: 'Restaurant Name',
    dataIndex: 'name',
    key: 'name',
    render: (text,props) => {
    <span className="gx-link">{text}</span>
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
    render: (text, props) => (
      <Row className="glyphs css-mapping">

        <Col className="gx-icon-views" xl={4} lg={6} md={6} sm={8} xs={12}>
            <i className="icon icon-edit" style={{color:'green'}} onClick={()=> onEdit()}/>
        </Col>
        <Col className="gx-icon-views" xl={4} lg={6} md={6} sm={8} xs={12}>
            <i className="icon icon-trash" style={{color:'red'}} onClick={()=> alert('delete props with id: ', (props.id))}/>
        </Col>
      </Row>
    ),
  }
];

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
const onEdit = () => {
  alert('inside on edit handler');
}
const onDelete = (props) =>{
  console.log('inside delete of manage restaurant');
}

class Selection extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <Card title={<h3>Manage Restaurant</h3>} style={{textAlign:'center'}}>
        <Table className="gx-table-responsive" rowSelection={rowSelection} columns={columns} dataSource={data} />
      </Card>
    );
  }
};

export default Selection;
