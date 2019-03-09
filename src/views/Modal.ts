import { observable, action, computed } from 'mobx';
import { ModalPropsType, FieldsType, ValuesType } from '../types';
import Form from './Form';

/**
 * 对话框控制类
 */
export default class Modal {
  @observable visible: boolean = false;
  @observable form = new Form();

  constructor(props?: ModalPropsType){
    this.init(props)
  }

  @action
  init = (props?: ModalPropsType) => {
    if ( props ){
      const { visible, ...values } : ModalPropsType = props;
      this.visible = visible || false;
      this.form.init(values);
    } else {
      this.visible = false;
      this.form.init();
    }
  }

  @action
  destory = () => {
    this.visible = false;
    this.form.init();
  }

  @action
  show = () => {
    this.visible = true;
    return this;
  }

  @action
  hide = () => {
    this.visible = false;
    console.log(this.visible)
    return this;
  }

  @computed
  get fields(){
    return this.form.fields;
  }

  @computed
  get values(){
    return this.form.values;
  }

  @computed
  get errors(){
    return this.form.errors;
  }

  @computed
  get validating(){
    return this.form.validating;
  }

  @computed
  get dirty(){
    return this.form.dirty;
  }

  @computed
  get touched(){
    return this.form.touched;
  }

  @action
  setFields = (fields: FieldsType) => {
    this.form.setFields(fields);
    return this;
  }

  @action
  setFieldsValue = (values?: ValuesType) => {
    this.form.setFieldsValue(values);
    return this;
  }

  @action
  resetFields = () => {
    this.form.resetFields();
    return this;
  }
};