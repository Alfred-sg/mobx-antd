import { observable, action } from 'mobx';

/**
 * 树结构数据
 */
export default class Tree {
  [propName: string]: any;
  @observable children: Tree[] = [];

  constructor(props: {[propName: string]: any}){
    Object.keys(props).forEach(propName => {
      if ( propName === 'children' ){
        this.setChildren(props[propName]);
      } else {
        this[propName]= props[propName];
      };
    });
  }

  @action
  setChildren = (children: any[]) => {
    this.children = children.map(child => new Tree(child));
  }
}