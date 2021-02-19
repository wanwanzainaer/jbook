import { useState, useEffect } from 'react';
import esService from '../bundler';
import { useActions } from '../hooks/use-actions';
import { CodeEditor } from './code-editor';
import { Preview } from './preview';
import { Resizable } from './resizable';
import { Cell } from '../state';
interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const [error, setError] = useState('');
  const [code, setCode] = useState('');
  const { updateCell } = useActions();
  useEffect(() => {
    const timer = setTimeout(async () => {
      const { code, err } = await esService(cell.content);

      setCode(code);
      setError(err);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [cell.content]);

  return (
    <Resizable direction="vertical">
      <div
        style={{
          height: 'calc(100% - 10px)',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Resizable direction="horizontal">
          <CodeEditor
            onChange={(value) => updateCell(cell.id, value)}
            initialValue={cell.content}
          />
        </Resizable>
        <Preview code={code} err={error} />
      </div>
    </Resizable>
  );
};

export { CodeCell };
