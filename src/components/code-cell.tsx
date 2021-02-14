import { useState, useEffect } from 'react';
import esService from '../bundler';

import { CodeEditor } from './code-editor';
import { Preview } from './preview';
import { Resizable } from './resizable';
const CodeCell = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [code, setCode] = useState('');

  useEffect(() => {
    const timer = setTimeout(async () => {
      const { code, err } = await esService(input);

      setCode(code);
      setError(err);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizable direction="vertical">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction="horizontal">
          <CodeEditor
            onChange={(value) => setInput(value)}
            initialValue="const a = 1;"
          />
        </Resizable>
        <Preview code={code} err={error} />
      </div>
    </Resizable>
  );
};

export { CodeCell };
