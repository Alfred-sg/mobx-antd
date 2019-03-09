import React from 'react';
import { Form, Input } from 'antd';
import { observer, inject } from 'mobx-react';

@inject('fields')
@observer
@Form.create({ 
  name: 'global_state',
  onFieldsChange(props, changedFields) {
    props.fields.setFields(changedFields);
  },
  mapPropsToFields(props) {
    return Object.keys(props.fields).map(fieldName => ({
      [fieldName]: Form.createFormField(props.fields[fieldName])
    }));
  },
  onValuesChange(_, values) {
    console.log(values);
  } 
})
class CustomizedForm extends React.Component {
  render() {
    const { form: { getFieldDecorator }, fields } = this.props;
    console.log(fields.values);

    return (
      <Form layout="inline">
        <Form.Item label="Username">
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Username is required!' }],
          })(<Input />)}
        </Form.Item>
      </Form>
    );
  }
}

export default CustomizedForm;