import React from "react";
import axios from 'axios';
import moment from 'moment';
import { withRouter } from 'react-router-dom'
import { Card, Col, Row, Table, Form, Tooltip, Input, Button, Icon} from "antd";

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
      restaurants: [],
      searchText: ""
    }
  }

  async componentDidMount() {
    const data = await axios.get('http://localhost:1337/restaurants');

    this.setState({
      restaurants: data.data.response
    })
  }

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div className="custom-filter-dropdown" style={{paddingLeft:'7px', paddingRight:'7px', paddingTop:'7px'}}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined}} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    // render: text => (
    //   <Highlighter
    //     highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
    //     searchWords={[this.state.searchText]}
    //     autoEscape
    //     textToHighlight={text.toString()}
    //   />
    // )
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  render() {
    const data = this.state.restaurants.map((row, index) => ({
      id: row.id,
      restaurantName: row.restaurantName,
      address: row.address,
      status: (row.isActive) ? "Active" : "Deactive",
      openingTime: (row.openingTime!=='N/A') ?row.openingTime: '--:--',
      closingTime: (row.closingTime!=='N/A') ?row.closingTime: '--:--',
      tagline: row.tagline,
      phone: row.phone,
      key: row.id
    }));
    const columns = [
      {
        title: 'Restaurant Name',
        dataIndex: 'restaurantName',
        key: 'restaurantName',
        
        /**For filtering by restaurant name */
        ...this.getColumnSearchProps("restaurantName"),

        /**For sorting by restaurant name */
        sorter: (a, b) => a.restaurantName.localeCompare(b.restaurantName),

        /**for ellipsis */
        onCell: () => {
          return {
             style: {
                whiteSpace: 'nowrap',
                maxWidth: 150,
             }
          }
        },
        render: (text) => (
          <Tooltip title={text}>
             <div className="gx-link" 
                  style={{textOverflow: 'ellipsis', overflow: 'hidden'}}>{text}</div>
          </Tooltip>
       )
      },
      {
        title: 'Location',
        dataIndex: 'address',
        key: 'address',
        
        /**for ellipsis */
        onCell: () => {
          return {
             style: {
                whiteSpace: 'nowrap',
                maxWidth: 150,
             }
          }
       },
        render: (text) => (
          <Tooltip title={text}>
             <div style={{textOverflow: 'ellipsis', overflow: 'hidden'}}>{text}</div>
          </Tooltip>
       )
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: 'Opening Time',
        dataIndex: 'openingTime',
        key: 'open_time',
        sorter: (a, b) => a.openingTime.localeCompare(b.openingTime),
      },
      {
        title: 'Closing Time',
        dataIndex: 'closingTime',
        key: 'close_time',
        sorter: (a, b) => a.closingTime.localeCompare(b.closingTime),
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

    // const onNameClick = async (text) => {
    //   alert(`Clicked on ${text}`)
    //   const restaurantByName = await axios.get(`http://localhost:1337/restaurants/byname/${text}`)
    //   console.log('restaurant fetched by name', restaurantByName);
    //   // this.props.history.push({pathname:`/restaurant/details/name/${text}`, data:restaurantByName})
    // }
    

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
                .then((res) => {
                  NotificationManager.success('You have deleted a restaurant!', 'Successful!', 3000);

                  axios.get(`http://localhost:1337/restaurants`)
                    .then((res) => {
                      this.setState({
                        restaurants: res.data.response
                      })
                    })
                    .catch((err) => { console.log('error while fetching new list of restaurants: ', err) })
                })
                .catch((err) => { console.log('error while deleting restaurant: ', err) })
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
          pagination={{ pageSize: 3}}
          // scroll={{y: 240}}
        />
      </Card>

    );
  }
};
const WrappedDemo = Form.create()(withRouter(Selection));

export default WrappedDemo;
