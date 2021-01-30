import React , {useState} from 'react';
import TransNav from './components/navbar';
import NavWithCaro from './components/NavWithCaro';


function App() {

  const [current ,setCurrent] = useState('email');


const handleSubmit= (e) => {
  console.log("Navbar Done");
  setCurrent(e.key);
}


  return (
    <>
    < TransNav />
    < NavWithCaro/>
    </>
    );
  }

export default App;
// https://bootsnipp.com/snippets/kl8Q3
//
