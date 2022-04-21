import './App.css';
import Display from './Display';

function App() {
  const users = [{username:'PRIYA'},{username:'SARANYA'},{username:'SHERIN'}];
  const name = "REACTJS";
  const getuser = () => {
    alert("Thank you for visiting the page");
  } 
  return (
    <div className="App">
      <h1>WELCOME TO {name} USERS</h1>
      <Display display = {users}/>
      <div className='getusername'>
      <button id="btn" onClick={getuser}>click here</button></div>
    </div>
  );
}

export default App;
