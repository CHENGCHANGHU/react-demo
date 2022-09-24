import './App.css';
import { Header, Sidebar, Content } from 'src/components';
import { WeChatImitation } from 'src/pages';

function App() {
  return (
    <div className='react-demo-box'>
      <Header>
        React Demo
      </Header>
      <div
        style={{
          width: '100vw',
          height: 'calc(100vh - 48px)',
          display: 'flex',
          flexFlow: 'row nowrap',
          overflow: 'hidden',
        }}
      >
        <Sidebar />
        <Content>
          <WeChatImitation />
        </Content>
      </div>
    </div>
  );
}

export default App;
