import { observable, action } from 'mobx';
import Pagination from './Pagination';
import { FiltersType, SorterType, TablePropsType, PaginationPropsType, KeysType } from '../types';

/**
 * 表格控制类
 */
export default class Table {
  @observable expandedRowKeys: KeysType = [];
  @observable pagination = new Pagination();
  @observable filters: FiltersType | undefined = {};
  @observable sorter: SorterType | object = {};

  constructor(props?: TablePropsType){
    this.init(props);
  }

  @action
  init = (props?: TablePropsType) => {
    this.setExpandedRowKeys(props && props.expandedRowKeys || [])
      .setPagination(props && props.pagination || undefined)
      .setFilters(props && props.filters || {})
      .setSorter(props && props.sorter || {});
  }

  @action
  reset = () => {
    this.init();
  }

  @action
  setExpandedRowKeys = (expandedRowKeys: KeysType) => {
    this.expandedRowKeys = expandedRowKeys;
    return this;
  }

  @action
  setPagination = (pagination?: PaginationPropsType) => {
    this.pagination.init(pagination);
    return this;
  }

  @action
  setFilters = (filters: FiltersType) => {
    this.filters = filters;
    return this;
  }

  @action
  setSorter = (sorter: SorterType | object) => {
    this.sorter = sorter;
    return this;
  }
}