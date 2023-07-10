import TreeNode from "@/pages/delivery-note-detail/[id]";
import { tableDelivery, treeTable } from "../constant/table-data";

const TreeTable = () => {
  const firstData = tableDelivery[0];
  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      {firstData && (
        <div className="flex flex-col tracking-wide space-y-1 mb-3">
          <a>No Delivery: {firstData.delivery}</a>
          <span>
            Date<a className="ml-[53px]"></a>: {firstData.date}
          </span>
          <span>
            Outlet<a className="ml-10"></a>: {firstData.outlet}
          </span>
          <span>
            Status<a className="ml-[42px]"></a>: {firstData.info}
          </span>
        </div>
      )}
      {treeTable.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
};

export default TreeTable;
