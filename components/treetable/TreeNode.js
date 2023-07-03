import { useState } from 'react';

const TreeNode = ({ node }) => {
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const toggleCheckbox = () => {
    setChecked(!checked);
  };


  return (
    <table className="w-full">
      <tbody>
        <tr className="flex items-center cursor-pointer" onClick={toggleExpand}>
          
          {node.children && (
            <span className={`pr-2 ${expanded ? 'rotate-90' : 'rotate-0'}`}>&#9660;</span>
          )}
          
        <th className="py-1 px-4">{node.order}</th>
          <th className="py-1 px-4">{node.totalproduct}</th>
          <th className="py-1 px-4">{node.totalprice}</th>
          <th className="py-1 px-4">{node.date}</th>
          <th className="py-1 px-4">{node.info}</th>
        </tr>
        {expanded && node.children && (
          <tr>
            <td colSpan="2">
              <table className="ml-6 w-full">
                <thead>
                  <tr>
                    {/* <th className=""></th> */}
                    <th className="py-1 px-4">SKU</th>
                    <th className="py-1 px-4">Product Name</th>
                    <th className="py-1 px-4">Category</th>
                    <th className="py-1 px-4">Price</th>
                    <th className="py-1 px-4">Quantity Request</th>
                    <th className="py-1 px-4">Unit Request</th>
                    <th className="py-1 px-4">Sisa Barang</th>
                    <th className="py-1 px-4">Unit Sisa</th>
                    <th className="py-1 px-4">Quantity Send</th>
                    <th className="py-1 px-4">Unit Send</th>
                  </tr>
                </thead>
                <tbody>
                  {node.children.map((child) => (
                    <tr key={child.id}>
                        {/* <span className="py-1 px-4">
            <input type="checkbox" checked={checked} onChange={toggleCheckbox} />
          </span> */}
                      <td className="py-1 px-4">{child.sku}</td>
                      <td className="py-1 px-4">{child.product}</td>
                      <td className="py-1 px-4">{child.category}</td>
                      <td className="py-1 px-4">{child.price}</td>
                      <td className="py-1 px-4">{child.quantityreq}</td>
                      <td className="py-1 px-4">{child.unitreq}</td>
                      <td className="py-1 px-4">{child.sisa}</td>
                      <td className="py-1 px-4">{child.unitsisa}</td>
                      <td className="py-1 px-4">{child.quantitysend}</td>
                      <td className="py-1 px-4">{child.unitsend}</td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TreeNode;
