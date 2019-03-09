import React from 'react';
import { Pagination } from 'antd';
import { observer, inject } from 'mobx-react';

@inject('pagination')
@observer
class CustomizedPagination extends React.Component {
  render() {
    const { current, pageSize, total } = this.props.pagination;
    return (
      <Pagination defaultCurrent={current} pageSize={pageSize} total={total} />
    );
  }
}

export default CustomizedPagination;