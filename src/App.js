import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Line from './components/Line'
import Content from './components/Content'
import Basic from './components/Basic'
import { Layout } from 'antd';


const App = () => {
  return (
    <Layout className="App">
      <Sidebar />
      <Layout className='section' >
        <Header />
        <Layout.Content>
          <Line />
          <Content />
          <Basic />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default App;