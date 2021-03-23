import React from 'react';
import { withRouter } from 'react-router-dom';
import { AutoComplete, Button, Card, Form, Input, Select, TimePicker, message, Upload,Space } from "antd";
import { NotificationManager } from 'react-notifications';
import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
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

function base64MimeType(encoded) {
    var result = null;
    let encode = encoded.split(',')
    if (typeof encode[1] !== 'string') {
        return result;
    }
    if (encode[1].charAt(0) == '/') {
        result = "image/jpeg";
    } else if (encode[1].charAt(0) == 'i') {
        result = "image/png";
    } else {
        return result;
    }
    // var mime = encoded.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
    // if (mime && mime.length) {
    //   result = mime[1];
    // }
    return result;
}

class AddRestaurant extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            confirmDirty: false,
            imageData: '',
            restaurantName: '',
            address: '',
            phone: '',
            regexp: /^[0-9\b]+$/,
            tagline: '',
            openingTime: '',
            closingTime: '',

            restaurantNameError: '',
            addressError: '',
            phoneError: '',
            taglineError: '',
            openingTimeError: '',
            closingTimeError: '',

            imgErr: '',
            loading: false,
            fileList: []
        }
    }

    getBase64 = (img, callback) => {
        console.log('getBase64')

        const reader = new FileReader();
        reader.addEventListener('load', () => {
            console.log('inside getBase64', reader.result);
            const mimeResult = base64MimeType(reader.result);
            console.log('mimeResult', mimeResult)
            if (mimeResult === null) {
                this.setState({
                    loading: false
                })
                message.error('You can only upload JPG/PNG file!');
            }
            else
                callback(reader.result)
        });
        reader.readAsDataURL(img);
    }

    beforeUpload = (file) => {
        console.log('before upload')
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
            this.setState({
                imgErr: 'You can only upload JPG/PNG file!'
            })
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
            this.setState({
                imgErr: 'Image must smaller than 2MB!'
            })
        }
        else {
            this.setState({
                imgErr: ''
            })
        }
        return isJpgOrPng && isLt2M;
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

    onPhoneChange = (e) => {
        let telephone = e.target.value;

        // if value is not blank, then test the regex
        if (telephone === '' || this.state.regexp.test(telephone)) {
            this.setState({ [e.target.name]: telephone })
        }
        else {
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

        if (result.error !== null) {
            const errorField = result.error.details[0].context.key;
            console.log('errorFiels', errorField);

            if (errorField === 'restaurantName') {
                this.setState({
                    restaurantNameError: 'Restaurant name is required.'
                })
            } else if (errorField === 'address') {
                this.setState({
                    addressError: 'Restaurant location is required.'
                })
            } else if (errorField === 'phone') {
                console.log(result.error.details[0].message)
                this.setState({
                    phoneError: result.error.details[0].message
                })
            } else if (errorField === 'openingTime') {
                this.setState({
                    openingTimeError: 'Restaurant opening time is required.'
                })
            } else if (errorField === 'closingTime') {
                this.setState({
                    closingTimeError: 'Restaurant closing time is required.'
                })
            }
        }
        if(this.state.imgErr!==''){
            console.log('please check the images upload');
            this.setState({
                imgErr:'Please check the image uploaded'
            })

        }
        else {
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

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => {
                this.setState({
                    imageData: imageUrl,
                    loading: false,
                })
            }

            );
        }else if(info.file.status === 'error'){
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    render() {
        const { restaurantName, address, phone, tagline, openingTime, closingTime, loading, fileList } = this.state;

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
                        label="*Restaurant Name"
                    >
                        <Input type='text'
                            name='restaurantName'
                            value={restaurantName}
                            onBlur={(e) => this.handleConfirmBlur(e)}
                            onChange={(e) => this.onChange(e)} />
                        {
                            this.state.restaurantNameError !== '' ?
                                <span style={{ color: 'red' }}>{this.state.restaurantNameError}</span>
                                : null
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
                                <span style={{ color: 'red' }}>{this.state.taglineError}</span>
                                : null
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="*Location"
                    >
                        <Input type='text'
                            name='address'
                            value={address}
                            onChange={(e) => this.onChange(e)} />
                        {
                            this.state.addressError !== '' ?
                                <span style={{ color: 'red' }}>{this.state.addressError}</span>
                                : null
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="*Phone Number"
                    >
                        <Input addonBefore={prefixSelector}
                            type='text'
                            name='phone'
                            value={phone}
                            onChange={(e) => this.onPhoneChange(e)} />
                        {
                            this.state.phoneError !== '' ?
                                <span style={{ color: 'red' }}>{this.state.phoneError}</span>
                                : <span>Phone number must contain 10 digits</span>
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="*Opening Time">
                        <TimePicker format={format}
                            name='openingTime'
                            initialValue={openingTime}
                            onChange={this.onOpenTimeChange} />
                        {
                            this.state.openingTimeError !== '' ?
                                <span style={{ color: 'red' }}>{this.state.openingTimeError}</span>
                                : null
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="*Closing Time">
                        <TimePicker format={format}
                            name='closingTime'
                            initialValue={closingTime}
                            onChange={this.onClosingTimeChange}
                        />
                        {
                            this.state.closingTimeError !== '' ?
                                <span style={{ color: 'red' }}>{this.state.closingTimeError}</span>
                                : null
                        }

                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="Upload Image"
                    >
                        <Upload
                            action="http://localhost:1337/file/upload"
                            listType="picture-card"
                            // defaultFileList={[...fileList]}
                            beforeUpload={this.beforeUpload}
                            onChange={this.handleChange}
                            // showUploadList={true}
                            maxCount={1}
                        >
                         Upload
                        </Upload>
                        {
                            this.state.imgErr === '' ?
                            <span>Image must be less than 2mb & only .png, .jpeg, .jgp allowed</span>
                            :<span style={{ color: 'red' }}>{this.state.imgErr}</span>
                        }

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