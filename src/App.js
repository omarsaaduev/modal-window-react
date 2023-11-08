import React, { useState } from 'react';
import './index.scss';
import Modal from './Modal';

function App() {
    const [open, setOpen] = useState(false)

  return (
    <div className="App">
        
      <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
      {open === true? <Modal setOpen={setOpen}/> : open === false}
    </div>
  );
}

export default App;
