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