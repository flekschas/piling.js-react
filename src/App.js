import React, { useCallback } from 'react';
import './App.css';

import createPilingExample from './piling-example.js';

export default function App() {
  const pilingInitHandler = useCallback((element) => {
    if (element !== null) {
      const piling = createPilingExample(element);
      return () => piling.destroy();
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          A simple example demonstrating how to use{' '}
          <a
            className="App-link"
            href="https://github.com/flekschas/piling.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Piling.js
          </a>{' '}
          in a React app.
        </p>
      </header>
      <main
        className="App-piling-wrapper"
        ref={pilingInitHandler}
      />
    </div>
  );
};
