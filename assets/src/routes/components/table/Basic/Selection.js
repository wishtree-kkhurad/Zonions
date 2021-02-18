import React from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { Card, Col, Row, Table, Form, message, Popconfirm } from "antd";
import { NotificationManager } from 'react-notifications';
import { confirmAlert } from 'react-confirm-alert'; // Import
import '../../../../../../node_modules/react-confirm-alert/src/react-confirm-alert.css' // Import css
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

    this.state = {
      restaurants: []
    }
  }

  async componentDidMount() {
    const data = await axios.get('http://localhost:1337/restaurants');

    this.setState({
      restaurants: data.data.response
    })
  }


  render() {
    const data = this.state.restaurants.map((row, index) => ({
      id: row.id,
      restaurantName: row.restaurantName,
      address: row.address,
      status: (row.isActive) ? "Active": "Deactive",
      openingTime: row.openingTime,
      closingTime: row.closingTime,
      tagline:row.tagline,
      phone: row.phone,
      key:row.id
    }));

    const columns = [
      {
        title: 'Restaurant Name',
        dataIndex: 'restaurantName',
        key: 'restaurantName',
        render: (text) => {
          return <span className="gx-link" onClick={()=> alert(`clicked on ${text}`)}>{text}</span>
        }
      },
      {
        title: 'Location',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: 'Opening Time',
        dataIndex: 'openingTime',
        key: 'open_time',
      },
      {
        title: 'Closing Time',
        dataIndex: 'closingTime',
        key: 'close_time',
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
      confirmAlert({
        title: 'Confirm Action',
        message: 'Are you sure to delete this restaurant?',
        buttons: [
          {
            label: 'Cancel'
          },
          {
            label: 'Yes, Delete it!',
            onClick: () => {
              axios.delete(`http://localhost:1337/restaurants/${text.id}`)
              .then((res)=>{
                NotificationManager.success('You have deleted a restaurant!', 'Successful!', 3000);
      
                axios.get(`http://localhost:1337/restaurants`)
                  .then((res)=>{
                    this.setState({
                      restaurants: res.data.response
                    })
                  })
                  .catch((err)=>{console.log('error while fetching new list of restaurants: ', err)})
              })
              .catch((err)=>{console.log('error while deleting restaurant: ', err)})
            }
          }
        ]
      })      
    }

    const onEdit = (text) => {
      this.props.history.push({ pathname: `/restaurant/edit/${text.id}`, data: text, from: 'Selection' })
    }

    const addHandler = () => {
      this.props.history.push({ pathname: '/restaurant/add', from: 'Selection' });
    }

    return (
      <Card title={
        <Row className="glyphs css-mapping">
          <Col xl={8} lg={6} md={6} sm={8} xs={12} style={{ marginLeft: '40%' }}>
            <h1 style={{ paddingTop: '20px' }}>Manage Restaurant</h1>
          </Col>
          <Col xl={4} lg={6} md={6} sm={8} xs={12} style={{ marginLeft: '10%', paddingTop: '20px' }}>
            <i className="gx-link icon icon-add-circle" style={{ fontSize: '2rem' }} onClick={addHandler} />
          </Col>
        </Row>
      }>
        <Table className="gx-table-responsive"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={{pageSize: 3}}
          // scroll={{y: 240}}
        />
      </Card>
    );
  }
};
const WrappedDemo = Form.create()(withRouter(Selection));

export default WrappedDemo;
