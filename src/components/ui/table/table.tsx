'use client'
import DeleteIcon from "@/shared/assets/icon/delete.svg";
import EditIcon from "@/shared/assets/icon/edit.svg";
import { useSearchParams } from "next/navigation";
import { useMemo, useRef } from "react";
import Button from "../button/button";

const filterData = (dataArray: any[], filterValue: string) => {
  const lowerCaseFilter = filterValue.toLowerCase();
  return dataArray.filter((item) => {
    return Object.values(item).some((value) => {
      return typeof value === 'string' && value.toLowerCase().includes(lowerCaseFilter);
    });
  });
};


function Table(data: any) {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())
  const value = params.get('tableSearch');
  const tableRef = useRef<HTMLTableElement>(null);

  const dataTable = useMemo(() => {
    if (!value)
      return data.data;
    return filterData(data.data, value);
  }, [value, data])


  return (
    <table ref={tableRef}>
      <thead>
        <tr>
          {Object.keys(data.data[0]).map((head, index) => (
            <th key={`th-${index}`} scope="col">{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataTable.map((item: any, index: number) => (
          <tr key={`tr-${index}`}>
            {Object.values(item).map((value, index) => (
              <td key={`td-${index}`}>{`${value}`}</td>
            )
            )}
            <td key={`add-${index}`} style={{ display: 'flex', border: "none", gap: "0.5rem", alignItems: "center" }}>
              <Button className="buttonVoid">
                <DeleteIcon />
              </Button>
              <Button className="buttonVoid">
                <EditIcon />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
