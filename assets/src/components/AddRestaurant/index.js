import React from 'react';
import { AutoComplete, Button, Card, Cascader, Checkbox, Col, Form, Icon, Input, Row, Select, Tooltip, TimePicker } from "antd";
import moment from "moment";
import axios from 'axios';

const format = 'HH:mm';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class AddRestaurant extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            confirmDirty: false,
            autoCompleteResult: []
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                // axios.post('http://')  ---give call to post api here
            }
        });
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
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
            <Card className="gx-card" title="Add Restaurant">
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label="Restaurant Name"
                    >
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Please input your restaurant name!' }],
                        })(
                            <Input style={{ width: '100%' }} />
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
                        {getFieldDecorator('location', {
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
                            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Opening Time">
                        {getFieldDecorator('time', {
                            rules: [{ required: true, message: "Please input your restaurant's opening time!"}],
                        })(
                            <TimePicker defaultValue={moment('00:00', format)} format={format} />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Closing Time">
                        {getFieldDecorator('time', {
                            rules: [{ required: true, message: "Please input your restaurant's closing time!"}],
                        })(
                            <TimePicker defaultValue={moment('00:00', format)} format={format} />
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
const AddRestaurantForm = Form.create()(AddRestaurant);
export default AddRestaurantForm;