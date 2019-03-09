import { observable, action } from 'mobx';

/**
 * 字段控制类
 */
export default class Field {
  @observable value: any = undefined;

  constructor(value: any){
    this.init(value);
  }

  @action
  init = (value?: any) => {
    this.setValue(value);
  }

  @action
  destory = () => {
    this.setValue();
  }

  @action
  setValue = (value?: any) => {
    this.value = value;
    return this;
  }
};