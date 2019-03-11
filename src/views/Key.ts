import { observable, action } from 'mobx';
import { KeyType, KeysType, KeyPropsType } from '../types';

/**
 * key控制类
 */
export default class Key {
  @observable activeKey: KeyType = undefined;
  @observable activeNode: Object = {};
  @observable activeKeys: KeysType = [];
  @observable activeNodes: Object[] = [];
  @observable checkedKeys: KeysType = [];
  @observable checkedNodes: Object[] = [];
  @observable expandedKeys: KeysType = [];
  @observable expandedNodes: Object[] = [];
  @observable loadedKeys: KeysType = [];
  @observable loadedNodes: Object[] = [];
  @observable selectedKeys: KeysType = [];
  @observable selectedNodes: Object[] = [];
  @observable openKeys: KeysType = [];
  @observable openNodes: Object[] = [];

  constructor(props?: KeyPropsType){
    this.init(props);
  }

  @action
  init(props?: KeyPropsType){
    this.setActiveKey(props && props.activeKey)
      .setActiveNode(props && props.activeNode || {})
      .setActiveKey(props && props.activeKeys || [])
      .setActiveNodes(props && props.activeNodes || [])
      .setCheckedKeys(props && props.checkedKeys || [])
      .setCheckedNodes(props && props.checkedNodes || [])
      .setExpandedKeys(props && props.expandedKeys || [])
      .setExpandedNodes(props && props.expandedNodes || [])
      .setLoadedKeys(props && props.loadedKeys || [])
      .setLoadedNodes(props && props.loadedNodes || [])
      .setSelectedKeys(props && props.selectedKeys || [])
      .setSelectedNodes(props && props.selectedNodes || [])
      .setOpenKeys(props && props.openKeys || [])
      .setOpenNodes(props && props.openNodes || []);
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
  setActiveNode = (activeNode: Object) => {
    this.activeNode = activeNode;
    return this;
  }

  @action
  setActiveKeys = (activeKey: KeysType) => {
    this.activeKeys = activeKey;
    return this;
  }

  @action
  setActiveNodes = (activeNodes: Object []) => {
    this.activeNodes = activeNodes;
    return this;
  }

  @action
  setCheckedKeys = (checkedKeys: KeysType) => {
    this.checkedKeys = checkedKeys;
    return this;
  }

  @action
  setCheckedNodes = (checkedNodes: Object []) => {
    this.checkedNodes = checkedNodes;
    return this;
  }

  @action
  setExpandedKeys = (expandedKeys: KeysType) => {
    this.expandedKeys = expandedKeys;
    return this;
  }

  @action
  setExpandedNodes = (expandedNodes: Object []) => {
    this.expandedNodes = expandedNodes;
    return this;
  }

  @action
  setLoadedKeys = (loadedKeys: KeysType) => {
    this.loadedKeys = loadedKeys;
    return this;
  }

  @action
  setLoadedNodes = (loadedNodes: Object []) => {
    this.loadedNodes = loadedNodes;
    return this;
  }

  @action
  setSelectedKeys = (selectedKeys: KeysType) => {
    this.selectedKeys = selectedKeys;
    return this;
  }

  @action
  setSelectedNodes = (selectedNodes: Object []) => {
    this.selectedNodes = selectedNodes;
    return this;
  }

  @action
  setOpenKeys = (openKeys: KeysType) => {
    this.openKeys = openKeys;
    return this;
  }

  @action
  setOpenNodes = (openNodes: Object []) => {
    this.openNodes = openNodes;
    return this;
  }
};