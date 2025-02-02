import React from 'react';
import { withRouter } from 'react-router-dom';
import { AutoComplete, Button, Card, Form, Input, Select, TimePicker, Alert } from "antd";
import { NotificationManager } from 'react-notifications';

import validate from 'react-joi-validation';
import Joi from 'joi' // or whatever Joi library you are using

import moment from "moment";
import axios from 'axios';

const format = 'HH:mm';
const FormItem = Form.Item;
const Option = Select.Option;

const schema = Joi.object().keys({
    restaurantName: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().regex(/^[789]\d{9}$/).required(),
    tagline: Joi.string().optional().allow(''),
    openingTime: Joi.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).required(),
    closingTime: Joi.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).required()
});


class AddRestaurant extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            confirmDirty: false,
            // imageData: ''
            restaurantName: '',
            address: '',
            phone: '',
            regexp:/^[0-9\b]+$/,
            tagline: '',
            openingTime: '',
            closingTime: '',

            restaurantNameError: '',
            addressError: '',
            phoneError: '',
            taglineError: '',
            openingTimeError: '',
            closingTimeError: ''
        }
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

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
          })
          this.props.form.setFieldsValue({
            [e.target.name]: this.state
          });
    }
    onPhoneChange = (e) =>{
        let telephone = e.target.value;

        // if value is not blank, then test the regex
        if (telephone === '' || this.state.regexp.test(telephone)) {
            this.setState({ [e.target.name]: telephone })
        }
        else{
            this.setState({
                phoneError: 'Only digits from 0-9 are allowed'
            })
        }
    }

    onOpenTimeChange = (val) => {
       
        this.setState({
            ...this.state,
            openingTime: moment(val._d.getTime()).format('HH:mm')
        })
        this.props.form.setFieldsValue({
            ...this.state,
            openingTime: this.state
        });
    }
    onClosingTimeChange = (val) => {
        this.setState({
            ...this.state,
            closingTime: moment(val._d.getTime()).format('HH:mm')
        })
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        console.log('in handle blur', value)
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const result = this.validate();

        if (result.error !== null){
            const errorField = result.error.details[0].context.key;
            console.log('errorFiels', errorField);

            if(errorField === 'restaurantName'){
                this.setState({
                    restaurantNameError: 'Restaurant name is required.'
                })
            }else if(errorField === 'address'){
                this.setState({
                    addressError: 'Restaurant location is required.'
                })
            }else if(errorField === 'phone'){
                console.log(result.error.details[0].message)
                this.setState({
                    phoneError: result.error.details[0].message
                })
            }else if(errorField === 'openingTime'){
                this.setState({
                    openingTimeError: 'Restaurant opening time is required.'
                })
            }else if(errorField === 'closingTime'){
                this.setState({
                    closingTimeError: 'Restaurant closing time is required.'
                })
            }
        }
        else
        {
            console.log('Received values of form: ', this.state);
            axios.post('http://localhost:1337/restaurants', this.state)
                .then((res) => {
                    this.props.history.push({ pathname: '/restaurant/manage', from: 'AddRestaurant' });
                    NotificationManager.success('You have added a new restaurant!', 'Successful!', 3000);
                })
                .catch((err) => {
                    console.log('error while adding restaurant', err);
                })
        }
    }
    
    // uploadImage = async (e) =>{
    //     console.log('inside uploadImage front end')
    //     e.preventDefault();
    //     const apiUrl = 'http://localhost:1337/file/upload';

    //     axios.post(apiUrl, this.state.imageData)
    //         .then(response =>{console.log("result", response)})
    //         .catch(err=>{console.log("image upload error", err)})
    // }

    // imageChange = (e) => {
    //     let files = e.target.files;

    //     //read the file 
    //     let reader = new FileReader();
    //     reader.readAsDataURL(files[0]);

    //     //check if file loaded or not
    //     reader.onload = (e) =>{
    //         // const imageData = {file: e.target.result}
    //         this.setState({
    //             imageData: e.target.result
    //         });
    //     }
    // }

    render() {
        const { restaurantName, address, phone, tagline, openingTime, closingTime } = this.state;

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
            <Card className="gx-card" title="Add Restaurant">
                <Form onSubmit={this.handleSubmit}>
                    
                    <FormItem
                        {...formItemLayout}
                        label="Restaurant Name"
                    >
                       <Input type='text'
                            name='restaurantName'
                            value={restaurantName}
                            onBlur={(e)=>this.handleConfirmBlur(e)}
                            onChange={(e) => this.onChange(e)} />
                        {
                            this.state.restaurantNameError !== '' ? 
                            <span style={{color:'red'}}>{this.state.restaurantNameError}</span>
                            :null
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Restaurant Tag line"
                    >
                        <Input type='text'
                            name='tagline'
                            value={tagline}
                            onChange={(e) => this.onChange(e)} />
                        {
                            this.state.taglineError !== '' ? 
                            <span style={{color:'red'}}>{this.state.taglineError}</span>
                            :null
                        }   
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Location"
                    >
                        <Input type='text'
                            name='address'
                            value={address}
                            onChange={(e) => this.onChange(e)} />
                        {
                            this.state.addressError !== '' ? 
                            <span style={{color:'red'}}>{this.state.addressError}</span>
                            :null
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Phone Number"
                    >
                        <Input addonBefore={prefixSelector}
                            type='text'
                            name='phone'
                            value={phone}
                            onChange={(e) => this.onPhoneChange(e)} />
                        {
                            this.state.phoneError !== '' ? 
                            <span style={{color:'red'}}>{this.state.phoneError}</span>
                            :<span>Phone number must contain 10 digits</span>
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Opening Time">
                        <TimePicker format={format}
                            name='openingTime'
                            initialValue={openingTime}
                            onChange={this.onOpenTimeChange} />
                        {
                            this.state.openingTimeError !== '' ? 
                            <span style={{color:'red'}}>{this.state.openingTimeError}</span>
                            :null
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Closing Time">
                        <TimePicker format={format}
                            name='closingTime'
                            initialValue={closingTime}
                            onChange={this.onClosingTimeChange}
                        />
                        {
                            this.state.closingTimeError !== '' ? 
                            <span style={{color:'red'}}>{this.state.closingTimeError}</span>
                            :null
                        }

                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Image"
                    >
                        <div className='row'>
                            <div className='col-6'>
                                <Input type='file' name='file' />
                            </div>
                            <div className='col-6'>
                                <span className='gx-link'>Upload</span>
                            </div>
                        </div>

                    </FormItem>

                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">Add</Button>
                    </FormItem>
                </Form>

            </Card>
        )
    }
}

const AddRestaurantForm = Form.create()(withRouter(AddRestaurant));
export default AddRestaurantForm;