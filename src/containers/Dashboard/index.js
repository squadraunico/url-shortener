import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

function Dashboard(props) {
  return (
    <div>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
    </div>
  )
}

Dashboard.propTypes = {

};

export default Dashboard;

