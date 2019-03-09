一个基于 mobx 快速开发视图状态管理的类库，典型如下：

效果：http://xzfyu.com/mobx-antd/index

```Javascript
// stores/tree.js
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

// pages/Tree.js
import React from 'react';
import { Tree } from 'antd';
import { observer, inject } from 'mobx-react';

const { TreeNode } = Tree;

@inject('tree')
@observer
class CustomizedTree extends React.Component {
  onLoadData = treeNode => new Promise((resolve) => {
    if (treeNode.props.children.length) {
      resolve();
      return;
    }

    setTimeout(() => {
      treeNode.props.dataRef.setChildren([
        { title: 'Child Node', key: `${treeNode.props.eventKey}-0` },
        { title: 'Child Node', key: `${treeNode.props.eventKey}-1` },
      ]);
      resolve();
    }, 1000);
  })

  renderTreeNodes = data => data.map((item) => {
    if (item.children) {
      return (
        <TreeNode title={item.title} key={item.key} dataRef={item}>
          {this.renderTreeNodes(item.children)}
        </TreeNode>
      );
    }
    return <TreeNode {...item} dataRef={item} />;
  })

  render() {
    const { tree } = this.props;

    return (
      <Tree loadData={this.onLoadData}>
        {this.renderTreeNodes(tree.treeData)}
      </Tree>
    );
  }
}

export default CustomizedTree;
```