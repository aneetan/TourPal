import React from 'react'
import {Layout } from 'antd';
import Navbar from './components/Navbar';
const { Header, Footer, Content } = Layout;

function App() {

  return (
    <Layout>
        <Navbar/> 

      {/* <Content>
        This is content

      </Content> */}

      {/* <Footer>
        This is footer

      </Footer> */}
    </Layout>
  )
}

export default App
