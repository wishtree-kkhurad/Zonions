import React from 'react';
import axios from 'axios';
import { AutoComplete, Button, Card, Form, Input, Select, TimePicker } from "antd";
import { NotificationManager } from 'react-notifications';

import moment from "moment";
const format = 'HH:mm';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;


class EditRestaurant extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            restaurantName: '',
            tagline: '',
            address: '',
            phone: '',
            imgUrl: '',
            status: '',
            openingTime: '',
            closingTime:''
        }
    }
    componentDidMount() {
        const { id, restaurantName, tagline, address, phone, imgUrl, status, openingTime, closingTime} = this.props.location.data;

        this.setState({
            id:id,
            restaurantName: restaurantName,
            tagline: tagline,
            address: address,
            phone: phone,
            imgUrl: imgUrl,
            status: status,
            openingTime: openingTime,
            closingTime:closingTime
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('state values:', this.state)

        const editUrl = `http://localhost:1337/restaurants/${this.state.id}`;
        const dataToupload = this.state;

        axios.put(editUrl, dataToupload)
            .then((res)=>{
                this.props.history.push({pathname:'/restaurant/manage', from:'EditRestaurant'});
                NotificationManager.success('You have updated a restaurant!', 'Successful!', 3000);
            })
            .catch((err)=>{console.log('error while editing', err)});
        
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const { getFieldDecorator } = this.props.form;

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '91',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
                <Option value="91">+91</Option>
            </Select>
        );
        return (
            <Card className="gx-card" title="Edit Restaurant">
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label="Restaurant Name"
                    >
                        <Input name='restaurantName' value={this.state.restaurantName} onChange={this.changeHandler} />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Tagline"
                    >
                        <Input name='tagline' value={this.state.tagline} onChange={this.changeHandler} />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Location"
                    >
                        <Input name='address' value={this.state.address} onChange={this.changeHandler} />
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="Phone Number"
                    >
                        <Input addonBefore={prefixSelector} value={this.state.phone} onChange={this.changeHandler} />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Opening Time">
                        <TimePicker format={format} />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Closing Time">
                        <TimePicker format={format} />
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </FormItem>
                </Form>
            </Card>

        )
    }
}
const EditRestaurantForm = Form.create()(EditRestaurant);
export default EditRestaurantForm;