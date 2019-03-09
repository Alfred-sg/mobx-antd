import React from 'react';
import { Modal, Button, Form, Radio, Input } from 'antd';
import { observer, inject } from 'mobx-react';

@inject('modal')
@Form.create({ 
  name: 'global_state',
  onFieldsChange(props, changedFields) {
    console.log(props.modal.form)
    props.modal.form.setFields(changedFields);
  },
  mapPropsToFields(props) {
    const { fields: fieldsStore } = props.modal.form;
    let fields = {};
    Object.keys(fieldsStore).map(fieldName => {
      fields[fieldName] = Form.createFormField(fieldsStore[fieldName])
    });
    return fields;
  },
  onValuesChange(_, values) {
    console.log(values);
  } 
})
@observer
export default class BasicModal extends React.Component {
  handleOk = () => {
    const { modal } = this.props;
    console.log(modal.values);
    modal.hide();
  }


  render() {
    const { modal, form: { getFieldDecorator } } = this.props;

    return (
      <div>
        <Button type="primary" onClick={modal.show}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={modal.visible}
          onOk={this.handleOk}
          onCancel={modal.hide}
        >
          <Form layout="vertical">
            <Form.Item label="Title">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('description')(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item className="collection-create-form_last-form-item">
              {getFieldDecorator('modifier', {
                initialValue: 'public',
              })(
                <Radio.Group>
                  <Radio value="public">Public</Radio>
                  <Radio value="private">Private</Radio>
                </Radio.Group>
              )}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}