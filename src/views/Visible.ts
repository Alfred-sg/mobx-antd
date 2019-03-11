import { observable, action } from 'mobx';
import { VisiblePropsType } from '../types';

/**
 * 显示-隐藏控制类
 */
export default class Visible {
  @observable visible: boolean = false;

  constructor(props?: VisiblePropsType){
    this.init(props);
  }

  @action
  init = (props?: VisiblePropsType) => {
    this.setVisible(props && props.visible || false);
  }

  @action
  reset = () => {
    this.setVisible(false);
  }

  @action
  setVisible = (visible?: boolean) => {
    this.visible = !!visible;
    return this;
  }

  @action
  show = () => {
    this.setVisible(true);
    return this;
  }

  @action
  hide = () => {
    this.setVisible(false);
    return this;
  }
}