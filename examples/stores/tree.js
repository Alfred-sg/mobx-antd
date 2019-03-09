import { observable, action } from 'mobx';
import { TreeData } from 'mobx-antd';

const initTreeData = [{ 
  title: 'Expand to load', key: '0' 
}, { 
  title: 'Expand to load', key: '1' 
}, { 
  title: 'Tree Node', key: '2', isLeaf: true 
}].map(node => new TreeData(node));

class Tree {
  @observable treeData = initTreeData;
}

export default new Tree();