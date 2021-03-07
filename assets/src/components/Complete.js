import React, { useState } from 'react';
import { AutoComplete, Button, Icon} from 'antd';
const { Option } = AutoComplete;
import { withRouter } from 'react-router-dom';

const cities = [
    'Pune',
    'Nagpur',
    'Wardha',
    'Nashik',
    'Hyderabad',
    'Yavatmal',
    'Amaravati',
    'Mumbai',
    'Chandrapur',
    'Bangalore',
    'Delhi'
]

const Complete = (props) => {
  const [result, setResult] = useState([]);

  const handleSearch = (value) => {
    let suggestions = [];
    if (!value) {
        suggestions = [];
    } else {
        const regex = new RegExp(`^${value}`, 'i');
        suggestions = cities.sort().filter(v => regex.test(v));
    }
    setResult(suggestions);
  };

  const onSelect = (value) =>{
    console.log('onSelect', value);
    props.history.push({ pathname: `/restaurants/${value}` })
  }

  return (
    <AutoComplete
        style={{
            width: 300,
        }}
        onSelect={onSelect}
        onSearch={handleSearch}
        placeholder="input here"
    >
        {result.map((email) => (
            <Option key={email} value={email}>
                {email}
            </Option>
        ))}
    </AutoComplete>
  );
};

export default withRouter(Complete);
