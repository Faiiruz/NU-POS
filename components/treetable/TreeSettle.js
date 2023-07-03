import { useState } from 'react';

const TreeSettle = ({ node }) => {
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div>
        <div className="flex items-center cursor-pointer" onClick={toggleExpand}>
          
          {node.children && (
            <span className={`pr-2 ${expanded ? 'rotate-90' : 'rotate-0'}`}>&#9660;</span>
          )}
          
        <span className="py-1 px-10 font-bold">{node.no}</span>
          <span className="py-1 px-10 font-bold">{node.outlet}</span>
          <span className="py-1 px-10 font-bold">{node.total}</span>
          <span className="py-1 px-10 font-bold">{node.date}</span>
          <span className="py-1 px-10 font-bold">{node.info}</span>
        </div>
        {expanded && node.children && (
            <div className='ml-6'>
                
              <table className="w-full">
                <thead>
                  <tr>
                    {/* <th className=""></th> */}
                    <th className="py-1 px-4 text-left">No Delivery</th>
                    <th className="py-1 px-4 text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                {node.children.map((child) =>  (
                    <tr key={child.id}>
                        {/* <span className="py-1 px-4">
            <input type="checkbox" checked={checked} onChange={toggleCheckbox} />
          </span> */}
                      <td className="py-1 px-4">{child.nodeli}</td>
                      <td className="py-1 px-4">{child.total2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
        )}

    </div>
  );
};

export default TreeSettle;
