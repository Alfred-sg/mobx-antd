import { observable, action } from 'mobx';
import { KeyType, KeysType, KeyPropsType } from '../types';

/**
 * key控制类
 */
export default class Key {
  @observable activeKey: KeyType = undefined;
  @observable activeKeys: KeysType = [];
  @observable checkedKeys: KeysType = [];
  @observable expandedKeys: KeysType = [];
  @observable loadedKeys: KeysType = [];
  @observable selectedKeys: KeysType = [];
  @observable openKeys: KeysType = [];

  constructor(props?: KeyPropsType){
    this.init(props);
  }

  @action
  init(props?: KeyPropsType){
    this.setActiveKey(props && props.activeKey)
      .setActiveKey(props && props.activeKeys || [])
      .setCheckedKeys(props && props.checkedKeys || [])
      .setExpandedKeys(props && props.expandedKeys || [])
      .setLoadedKeys(props && props.loadedKeys || [])
      .setSelectedKeys(props && props.selectedKeys || [])
      .setOpenKeys(props && props.openKeys || []);
  }

  @action
  reset(){
    this.init();
  }

  @action
  setActiveKey = (activeKey: KeyType) => {
    this.activeKey = activeKey;
    return this;
  }

  @action
  setActiveKeys = (activeKey: KeysType) => {
    this.activeKeys = activeKey;
    return this;
  }

  @action
  setCheckedKeys = (checkedKeys: KeysType) => {
    this.checkedKeys = checkedKeys;
    return this;
  }

  @action
  setExpandedKeys = (expandedKeys: KeysType) => {
    this.expandedKeys = expandedKeys;
    return this;
  }

  @action
  setLoadedKeys = (loadedKeys: KeysType) => {
    this.loadedKeys = loadedKeys;
    return this;
  }

  @action
  setSelectedKeys = (selectedKeys: KeysType) => {
    this.selectedKeys = selectedKeys;
    return this;
  }

  @action
  setOpenKeys = (openKeys: KeysType) => {
    this.openKeys = openKeys;
    return this;
  }
};