import { observable, action } from 'mobx';
import { PaginationPropsType } from '../types';

/**
 * 分页控制类
 */
export default class Pagination {
  @observable current: number = 1;
  @observable pageSize: number = 10;
  @observable total: number = 0;

  constructor(props?: PaginationPropsType){
    this.init(props);
  }

  @action
  init = (props?: PaginationPropsType) => {
    this.setCurrent(props ? props.current : 1)
      .setPageSize(props ? props.pageSize : 10)
      .setTotal(props ? props.total : 0);
  }

  @action
  destory = () => {
    this.init();
  }

  @action
  setCurrent = (current: number) => {
    this.current = current;
    return this;
  }

  @action
  setPageSize = (pageSize: number) => {
    this.pageSize = pageSize;
    return this;
  }

  @action
  setTotal= (total: number) => {
    this.total = total;
    return this;
  }
}