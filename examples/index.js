import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import store from './config/store';
import Pagination from './pages/Pagination';
import Form from './pages/Form';
import Modal from './pages/Modal';
import Tree from './pages/Tree';

const { Sider } = Layout;

ReactDOM.render(
  <Provider {...store}>
    <Router>
      <Layout>
        <Sider width={200} style={{ background: '#fff', minHeight: '100vh' }}>
          <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}
            defaultSelectedKeys={["modal"]}>
            <Menu.Item key="modal"><Link to='/modal'>Modal 对话框</Link></Menu.Item>
            <Menu.Item key="form"><Link to='/form'>Form 表单</Link></Menu.Item>
            <Menu.Item key="tree"><Link to='/tree'>Tree 树形控件</Link></Menu.Item>
            <Menu.Item key="pagination"><Link to='/pagination'>Pagination 分页</Link></Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ margin: '20px', padding: '20px', backgroundColor: 'white' }}>
          <Switch>
            <Route exact path="/" component={Modal} />
            <Route path='/modal' component={Modal} />
            <Route path='/form' component={Form} />
            <Route path='/tree' component={Tree} />
            <Route path='/pagination' component={Pagination} />
          </Switch>
        </Layout>
      </Layout>
    </Router>
  </Provider>
, document.getElementById('root'));