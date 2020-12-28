
import './App.css';
import Newcomp from './newcomp';

function App() {
  return (
    <div className="App">
      <Newcomp fname="Kashif" s1name="Shaheer" s2name="Talha"/>
      <hr/>
      <Newcomp fname="Shakir ali" s1name="Tahir Ali" s2name="Faizan Ali"/>
      <hr/>
      <Newcomp fname="Shahid" s1name="Hammad" s2name="Hassan" />
    </div>
  );
}

export default App;
