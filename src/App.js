import { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('');
  const ALAN_Key = `9668f1dc9a48563e51f9cdeec12e58c62e956eca572e1d8b807a3e2338fdd0dc/stage`
  useEffect(() => {
    alanBtn({
        key: ALAN_Key,
        onCommand: (commandData) => {
          if(commandData.command === 'name'){
            setName(commandData.data)
          }
          if(commandData.command === 'phone'){
            setPhone(commandData.data)
          }
          if(commandData.command === 'address'){
            setAddress(commandData.data)
          }
        }
    });
  }, []);
  return (
    <div className='backgroundImage'>
      <h1>Rachisi Solutions</h1>
      <div className='form-fields'>
        <input
          placeholder='Name'
          name='name'
          onChange={(event) => setName(event.target.value)}
          value={name}
          type='text'
          />
        <input
          placeholder='Phone'
          name='phone'
          onChange={(event) => setPhone(event.target.value)}
          value={phone}
          type='text'
          />
        <input
          placeholder='Address'
          name='address'
          onChange={(event) => setAddress(event.target.value)}
          value={address}
          type='string'
          />

        <button className='submit-btn'>Submit</button>
      </div>
    </div>
  );
}

export default App;
