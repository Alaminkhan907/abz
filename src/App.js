import './App.css';
import Body from './components/Body/Body';
import Form from './components/Form/Form';
import Header from './components/Header/Header.js';
import Info from './components/Info/Info.js';
import Token from './Token/Token';

function App() {
  return (
    <div >
     <Header/>
     <Info />
     <Body/>
     <Form/>
     <Token/>
    </div>
  );
}

export default App;
