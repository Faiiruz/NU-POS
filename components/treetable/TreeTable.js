import TreeNode from './TreeNode';
import { treeTable } from '../constant/table-data';

const TreeTable = () => {
  return (
    <div>
      {treeTable.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
};

export default TreeTable;
