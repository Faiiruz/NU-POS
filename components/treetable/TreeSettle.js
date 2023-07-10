import { useState, useEffect } from "react";
import SettlementRepository from "@/repositories/SettlementRepository";

const TreeSettle = () => {
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState(false);
  const [settleData, setSettleData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = localStorage.getItem("xa");
        let dataToken = JSON.parse(token);
        SettlementRepository.getSettlement({ XA: dataToken })
        .then((data) => {
          setSettleData(data['data']);
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
        {settleData.map((item) => (
        <div key={item.id}>
          <span className={`pr-2 ${expanded ? "rotate-90" : "rotate-0"}`}>
          &#9660;
        </span>
        
          <span className="py-1 px-10 font-bold">{item.org_id}</span>
          <span className="py-1 px-10 font-bold">{item.to_name}</span>
          <span className="py-1 px-10 font-bold">{item.total}</span>
          {/* <span className="py-1 px-10 font-bold">{item.date}</span> */}
          <span className="py-1 px-10 font-bold">{item.tax}</span>
        </div>
      )
        )} 
        </div>
      {expanded && settleData && (
        <div className="ml-12 mt-1">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-1 px-4 text-left ">No Delivery</th>
                <th className="py-1 px-4 text-left ">Total</th>
              </tr>
            </thead>
            <tbody>
              {settleData.map((item) => (
                <tr key={item.id}>
                  <td className="py-1 px-4">{item.to_id}</td>
                  <td className="py-1 px-4">{item.sub_total}</td>
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
