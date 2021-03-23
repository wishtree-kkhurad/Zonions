import React from 'react';
import axios from 'axios';
import { AutoComplete, Button, Card, Form, Input, Select, TimePicker,Upload, message } from "antd";
import { NotificationManager } from 'react-notifications';
import { LoadingOutlined, PlusOutlined, UploadOutlined} from '@ant-design/icons';

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
            regexp:/^[0-9\b]+$/,
            tagline: '',
            openingTime: '',
            closingTime: '',

            restaurantNameError: '',
            addressError: '',
            phoneError: '',
            taglineError: '',
            openingTimeError: '',
            closingTimeError: '',

            loading: false,
            fileList:[],
            imgErr:''
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

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            console.log('on image change', info.file.originFileObj)
            this.getBase64(info.file.originFileObj, imageUrl => {
                console.log('in handle change', imageUrl)
                this.setState({
                    imageData: imageUrl,
                    loading: false,
                })
            }

            );
        }
    };


    async componentDidMount() {
        console.log('compo did mount in edit form data', this.props.location.data);

        const data = await axios.get('http://localhost:1337/restaurants/getCount');

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
            closingTime: closingTime,
        });

        data.data.response.map((restro)=>{
           
            if(restro.id === id)
            {
                this.setState({
                    imageData: restro.imageData,
                    imageName: restro.imageName
                })
            }
        });

        console.log('data in state imageData', this.state.imageData)
        

        console.log('data after all state set', this.state)
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
        if(this.state.imgErr!==''){
            console.log('please check the images upload');
            this.setState({
                imgErr:'Please check the image uploaded'
            })

        }
        else {
            const dataToupload = this.state;
            console.log('data to upload in edit form', dataToupload)

            axios.put(`http://localhost:1337/restaurants/${this.state.id}`, dataToupload)
                .then((res) => {
                    console.log('after PUT response', res)
                    this.props.history.push({ pathname: '/restaurant/manage', from: 'EditRestaurant' });
                    NotificationManager.success('You have updated a restaurant!', 'Successful!', 3000);
                })
                .catch((err) => {
                    console.log('error while editing', err) 
                });
        }

    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })  
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
        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div>Upload</div>
            </div>
        );
        return (
            <Card className="gx-card" title="Edit Restaurant">
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label="*Restaurant Name"
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
                        label="*Location"
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
                        label="*Phone Number"
                    >
                        <Input addonBefore={prefixSelector} name='phone' value={this.state.phone} onChange={this.onPhoneChange} />
                        {
                            this.state.phoneError !== '' ?
                                <span style={{ color: 'red' }}>{this.state.phoneError}</span>
                                : <span>Phone number must contain 10 digits</span>
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="*Opening Time">
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
                        label="*Closing Time">
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
                    <FormItem
                    {...formItemLayout}
                    label="Upload Image"
                    >
                    <Upload
                        action="http://localhost:1337/file/upload"
                        listType="picture-card"
                        // defaultFileList={[...this.state.fileList]}
                        beforeUpload={this.beforeUpload}
                        onChange={this.handleChange}
                        showUploadList={true}
                        >
                            {
                           this.state.imageData !== ''
                           ? <img src={`${this.state.imageData}`} alt={this.state.imageName}/>
                           : "Upload"
                            }
                    </Upload>
                    {
                        this.state.imgErr === '' ?
                        <span>Image must be less than 2mb & only .png, .jpeg, .jgp allowed</span>
                        :<span style={{ color: 'red' }}>{this.state.imgErr}</span>
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