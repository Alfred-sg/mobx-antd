import { observable, action } from 'mobx';
import { LoadPropsType } from '../types';

/**
 * 加载状态控制类
 */
export default class Load {
  @observable loading: boolean = false;

  constructor(props?: LoadPropsType){
    this.init(props);
  }

  @action
  init = (props?: LoadPropsType) => {
    this.setLoading(props && props.loading || false);
  }

  @action
  destory = () => {
    this.setLoading(false);
  }

  @action
  setLoading = (loading: boolean) => {
    this.loading = loading;
  }
}