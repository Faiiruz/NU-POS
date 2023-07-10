import React, {useEffect, useState} from 'react'
import SettlementRepository from '@/repositories/SettlementRepository'

const NewTree = () => {
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

      const TreeView = ({ data }) => {
        if (!data) {
          return null;
        }
      
        return (
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                {item.children && <TreeView data={item.children} />}
                {/* Render table using item's data */}
                <table>
                  <thead>
                    <tr>
                      <th>Column 1</th>
                      <th>Column 2</th>
                      {/* Add more columns as needed */}
                    </tr>
                  </thead>
                  <tbody>
                    {item.tableData.map((row) => (
                      <tr key={row.id}>
                        <td>{row.column1}</td>
                        <td>{row.column2}</td>
                        {/* Add more columns as needed */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </li>
            ))}
          </ul>
        );
      };
    
      return (
        <div>
          <TreeView data={settleData} />
        </div>
      );
    };

export default NewTree