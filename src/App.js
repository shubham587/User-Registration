import logo from './logo.svg';
import './App.css';
import AddUser from './Components/AddUser/AddUser';
import ListUser from './Components/ListUser/ListUser';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState([])

  const getDataHandler =(formObj) => {
    setFormData([formObj, ...formData])
  }

  return (
    <div className="App">
        <AddUser onGetData={getDataHandler}/>
        <ListUser formData={formData}/>
    </div>
  );
}

export default App;
