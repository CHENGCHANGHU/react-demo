import './App.css';
import { Header, Sidebar, Content } from 'src/components';
import { WeChatImitation } from 'src/pages';
import { useState } from 'react';
import { useCallback } from 'react';

function App() {
  const [catalogs, setCatalogs] = useState([]);
  return (
    <div className='react-demo-box'>
      <Header>
        React Demo
        <button onClick={() => setCatalogs([...catalogs, catalogs.length])}>Add</button>
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
        <Sidebar catalogs={catalogs}/>
        <Content>
          {/* <WeChatImitation /> */}
        </Content>
      </div>
    </div>
  );
}

export default App;
