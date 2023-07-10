import { useState, useEffect } from "react";
import SettlementRepository from "@/repositories/SettlementRepository";

const TreeSettle = ({ node }) => {
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = localStorage.getItem("xa");
        let dataToken = JSON.parse(token);
        SettlementRepository.getSettlement({ XA: dataToken })
        .then((data) => {
          // setOrderData(data);
          console.log(data);
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <div
        className="flex items-center cursor-pointer mt-2"
        onClick={toggleExpand}
      >
        {node.children && (
          <span className={`pr-2 ${expanded ? "rotate-90" : "rotate-0"}`}>
            &#9660;
          </span>
        )}
        <div key={node.id}>
          <span className="py-1 px-10 font-bold">{node.no}</span>
          <span className="py-1 px-10 font-bold">{node.outlet}</span>
          <span className="py-1 px-10 font-bold">{node.total}</span>
          <span className="py-1 px-10 font-bold">{node.date}</span>
          <span className="py-1 px-10 font-bold">{node.info}</span>
        </div>
      </div>
      {expanded && node.children && (
        <div className="ml-12 mt-1">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-1 px-4 text-left ">No Delivery</th>
                <th className="py-1 px-4 text-left ">Total</th>
              </tr>
            </thead>
            <tbody>
              {node.children.map((child) => (
                <tr key={child.id}>
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
