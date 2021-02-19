import { Fragment } from 'react';
import { useTypedSelector } from '../hooks/use-type-selector';
import { CellListItem } from '../components/cell-list-item';
import { AddCell } from './add-cell';
const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );
  const renderCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));
  return (
    <div>
      <AddCell forceVisible={cells.length === 0} previousCellId={null} />
      {renderCells}
    </div>
  );
};

export { CellList };
