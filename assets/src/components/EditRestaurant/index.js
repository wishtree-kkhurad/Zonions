import React from 'react';
import axios from 'axios';
import { AutoComplete, Button, Card, Form, Input, Select, TimePicker } from "antd";
import { NotificationManager } from 'react-notifications';

import validate from 'react-joi-validation';
import Joi from 'joi' // or whatever Joi library you are using

import moment from "moment";
const format = 'HH:mm';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const schema = Joi.object().keys({
    restaurantName: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().regex(/^[789]\d{9}$/).required(),
    tagline: Joi.string().optional().allow(''),
    openingTime: Joi.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).required(),
    closingTime: Joi.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).required()
});

class EditRestaurant extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            imageData: '',
            imageName: '',
            status: false,
            restaurantName: '',
            address: '',
            phone: '',
            tagline: '',
            openingTime: '',
            closingTime: '',

            restaurantNameError: '',
            addressError: '',
            phoneError: '',
            taglineError: '',
            openingTimeError: '',
            closingTimeError: '',
        }
    }
    componentDidMount() {
        console.log('data', this.props.location.data);

        const { id, restaurantName, tagline, address, phone, imageData, imageName, status, openingTime, closingTime } = this.props.location.data;

        this.setState({
            id: id,
            restaurantName: restaurantName,
            tagline: tagline,
            address: address,
            phone: phone,
            imageData: imageData,
            imageName: imageName,
            status: status,
            openingTime: openingTime,
            closingTime: closingTime
        });
    }
    validate = () => {
        const result = Joi.validate(
            {
                restaurantName: this.state.restaurantName,
                tagline: this.state.tagline,
                phone: this.state.phone,
                address: this.state.address,
                openingTime: this.state.openingTime,
                closingTime: this.state.closingTime
            }
            , schema)
        return result;
    }

    handleSubmit = (e) => {

        console.log('state values:', this.state)

        e.preventDefault();
        const result = this.validate();

        if (result.error !== null) {
            const errorField = result.error.details[0].context.key;
            console.log('errorFiels', errorField);

            if (errorField === 'restaurantName') {
                this.setState({
                    restaurantNameError: result.error.details[0].message
                })
            } else if (errorField === 'tagline') {
                this.setState({
                    taglineError: result.error.details[0].message
                })
            } else if (errorField === 'address') {
                this.setState({
                    addressError: result.error.details[0].message
                })
            } else if (errorField === 'phone') {
                console.log(result.error.details[0].message)
                this.setState({
                    phoneError: result.error.details[0].message
                })
            } else if (errorField === 'openingTime') {
                this.setState({
                    openingTimeError: result.error.details[0].message
                })
            } else if (errorField === 'closingTime') {
                this.setState({
                    closingTimeError: result.error.details[0].message
                })
            }
        }
        else {
            const editUrl = `http://localhost:1337/restaurants/${this.state.id}`;
            const dataToupload = this.state;
            console.log('data to upload in edit form', dataToupload)
            axios.put(editUrl, dataToupload)
                .then((res) => {
                    this.props.history.push({ pathname: '/restaurant/manage', from: 'EditRestaurant' });
                    NotificationManager.success('You have updated a restaurant!', 'Successful!', 3000);
                })
                .catch((err) => { console.log('error while editing', err) });
        }

    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })  
    }
    onOpenTimeChange = (val) => {
        this.setState({
            ...this.state,
            openingTime: moment(val._d.getTime()).format('HH:mm')
        })
    }
    onClosingTimeChange = (val) => {
        this.setState({
            ...this.state,
            closingTime: moment(val._d.getTime()).format('HH:mm')
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
                        {
                            this.state.restaurantNameError !== '' ?
                                <span style={{ color: 'red' }}>{this.state.restaurantNameError}</span>
                                : null
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Tagline"
                    >
                        <Input name='tagline' value={this.state.tagline} onChange={this.changeHandler} />
                        {
                            this.state.taglineError !== '' ?
                                <span style={{ color: 'red' }}>{this.state.taglineError}</span>
                                : null
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Location"
                    >
                        <Input name='address' value={this.state.address} onChange={this.changeHandler} />
                        {
                            this.state.addressError !== '' ?
                                <span style={{ color: 'red' }}>{this.state.addressError}</span>
                                : null
                        }
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="Phone Number"
                    >
                        <Input addonBefore={prefixSelector} name='phone' value={this.state.phone} onChange={this.changeHandler} />
                        {
                            this.state.phoneError !== '' ?
                                <span style={{ color: 'red' }}>{this.state.phoneError}</span>
                                : <span>Phone number must contain 10 digits</span>
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Opening Time">
                        <TimePicker
                            format={format}
                            // name='openingTime'
                            value={moment(this.state.openingTime, format)}
                            onChange={this.onOpenTimeChange}
                        />
                        {
                            this.state.openingTimeError !== '' ?
                                <span style={{ color: 'red' }}>{this.state.openingTimeError}</span>
                                : null
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Closing Time">
                        <TimePicker
                            format={format}
                            // name='closingTime'
                            value={moment(this.state.closingTime, format)}
                            onChange={this.onClosingTimeChange}
                        />
                        {
                            this.state.closingTimeError !== '' ?
                                <span style={{ color: 'red' }}>{this.state.closingTimeError}</span>
                                : null
                        }
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