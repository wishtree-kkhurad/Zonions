import React from 'react';
import {withRouter} from 'react-router-dom';
import { AutoComplete, Button, Card,Form, Input,Select,TimePicker } from "antd";
import moment from "moment";
import axios from 'axios';
import { child } from 'winston';

const format = 'HH:mm';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class AddRestaurant extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
            imageData:''
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                axios.post('http://localhost:1337/restaurants', values)
                .then((res)=>{
                    console.log('added restaurant successfully', res)
                    this.props.history.push({pathname:'/restaurant/manage', from:'AddRestaurant'});
                })
                .catch((err)=>{
                    console.log('error while adding restaurant', err);
                })
    
            }
        });
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
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
                        {getFieldDecorator('restaurantName', {
                            rules: [{ required: true, message: 'Please input your restaurant name!' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Restaurant Tag line"
                    >
                        {getFieldDecorator('tagline', {
                            rules: [{ required: false }],
                        })(
                            <Input style={{ width: '100%' }} />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Location"
                    >
                        {getFieldDecorator('address', {
                            rules: [{ required: true, message: 'Please input your location!' }],
                        })(
                            <Input style={{ width: '100%' }} />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Phone Number"
                    >
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: 'Please input your phone number!' }],
                        })(
                            <Input addonBefore={prefixSelector}  />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Opening Time">
                        {getFieldDecorator('openingTime', {
                            rules: [{ required: false, message: "Please input your restaurant's opening time!"}],
                        })(
                            <TimePicker format={format} />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Closing Time">
                        {getFieldDecorator('closingTime', {
                            rules: [{ required: false, message: "Please input your restaurant's closing time!"}],
                        })(
                            <TimePicker format={format} />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Image"
                    >

                        {getFieldDecorator('file', {
                            rules: [{ required: false, message: "Please input your menu image!"}],
                        })(
                            <div className='row'>
                                <div className='col-6'>
                                    <Input type='file' name='file' />
                                </div>
                                <div className='col-6'>
                                    <span className='gx-link'>Upload</span>
                                </div>
                            </div>
                        )}
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