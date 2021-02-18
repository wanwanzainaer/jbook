import { useTypedSelector } from '../hooks/use-type-selector';
import { CellListItem } from '../components/cell-list-item';

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );
  const renderCells = cells.map((cell) => (
    <CellListItem key={cell.id} cell={cell} />
  ));
  return <div>{renderCells}</div>;
};

export { CellList };
