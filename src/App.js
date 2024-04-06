import './App.css';

import {useRef} from 'react';

const App = () => {
  const inputRef = useRef(null);

  function handleClick() {
    // 👇️ Update input value
    inputRef.current.value = 'New value';

    // 👇️ Access input value
    console.log(inputRef.current.value);
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        id="message"
        name="message"
      />

      <button onClick={handleClick}>Log message</button>
    </div>
  );
};

export default App;
