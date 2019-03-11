import { observable, computed, action } from 'mobx';
import { FieldsType, ValuesType, ErrorsType, FieldStatusType } from '../types';

/**
 * 表单控制类
 */
export default class Form {
  @observable fields: FieldsType = {};

  constructor(values?: ValuesType){
    this.init(values);
  }

  @action
  init = (values?: ValuesType) => {
    this.setFieldsValue(values);
  }

  @action
  reset = () => {
    this.resetFields();
  }

  @action
  setFields = (fields: FieldsType) => {
    this.fields = {
      ...this.fields,
      ...fields
    };
    return this;
  }

  @action
  setFieldsValue = (values?: ValuesType) => {
    values && Object.keys(values).map(fieldName => {
      if ( this.fields[fieldName] ) this.fields[fieldName].value = values[fieldName];
      else this.fields[fieldName] = { name: fieldName, value: values[fieldName] };
    });
    return this;
  }

  @action
  resetFields = () => {
    this.fields = {};
    return this;
  }

  @computed
  get values(){
    let values: ValuesType = {};
    Object.keys(this.fields).map(fieldName => {
      values[fieldName] = this.fields[fieldName].value;
    });
    return values;
  }

  @computed
  get errors(){
    let errors: ErrorsType = {};
    Object.keys(this.fields).filter(fieldName => {
      return this.fields[fieldName].errors;
    }).forEach(fieldName => {
      errors[fieldName] = this.fields[fieldName].errors || [];
    });
    return errors;
  }

  @computed
  get validating(){
    let validatings: FieldStatusType = {};
    Object.keys(this.fields).forEach(fieldName => {
      validatings[fieldName] = this.fields[fieldName].validating || false;
    });
    return validatings;
  }

  @computed
  get dirty(){
    let dirty: FieldStatusType = {};
    Object.keys(this.fields).map(fieldName => {
      dirty[fieldName] = this.fields[fieldName].dirty || false;
    });
    return dirty;
  }

  @computed
  get touched(){
    let touched: FieldStatusType = {};
    Object.keys(this.fields).map(fieldName => {
      touched[fieldName] = this.fields[fieldName].touched || false;
    });
    return touched;
  }
};