import React from 'react';
import { AutoComplete, Button, Card, Form, Input, Select, TimePicker } from "antd";
import moment from "moment";
const format = 'HH:mm';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;


class EditRestaurant extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id:'',
            name: '',
            tagline: '',
            location: '',
            phone: '',
            imgUrl: '',
            status:''
        }
    }
    componentDidMount(){
        const {id, name, location, imgUrl, status} = this.props.location.data;
        this.setState({
            id:id,
            name:name,
            location:location,
            imgUrl:imgUrl,
            status:status
        })
    }
    handleSubmit=()=>{
        alert('submiting edit form')
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
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

        return (
            <Card className="gx-card" title="Edit Restaurant">
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label="Restaurant Name"
                    >
                        <Input name='name' value={this.state.name} onChange={this.changeHandler}/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Tagline"
                    >
                        <Input name='tagline' value={this.state.tagline} onChange={this.changeHandler}/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Location"
                    >
                        <Input  name='location' value={this.state.location} onChange={this.changeHandler}/>
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