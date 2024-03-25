import DeleteIcon from "@/shared/assets/icon/delete.svg";
import EditIcon from "@/shared/assets/icon/edit.svg";
import { getTypeByKey, getTypeByValue } from "@/shared/configs/getTypes";
import { AllTableType } from "@/shared/types/prisma";
import { useTranslations } from "next-intl";
import Button from "../button/button";
import InputForm from "../inputForm/inputForm";

interface ITable {
  data: AllTableType[];
  attributes: string[];
  filterFunction: (item: any) => boolean;
  input?: boolean;
}

interface ITableBody {
  head?: string;
  value?: string;
  input?: boolean;
}


function Table({ data, attributes, filterFunction, input = false }: ITable) {
  const t = useTranslations('Admin');

  const renderTableHead = () => {
    return (
      <tr style={{ background: 'var(--prymery-background-color)' }}>
        {data.length > 0
          ? Object.keys(data[0]).map((head, index) => (
            <th key={`th-${index}`} scope="col">{t(`Input.${head}`)}</th>
          ))
          : attributes.map((head, index) => (
            <th key={`th-${index}`} scope="col">{t(`Input.${head}`)}</th>
          ))}
      </tr>
    );
  };

  const renderTableRow = (item: any, index: number) => {
    return (
      <tr key={`tr-${index}`}>
        {Object.values(item).map((value, index) => (
          <td key={`td-${index}`}>
            <TableBody value={value as string} input={input} />
          </td>
        ))}
        <td style={{ display: 'flex', border: "none", gap: "0.5rem", alignItems: "center" }}>
          <Button className="buttonVoid">
            <DeleteIcon />
          </Button>
          <Button className="buttonVoid" >
            <EditIcon />
          </Button>
        </td>
      </tr>
    );
  };

  const renderEmptyRow = () => {
    return (
      <tr style={{ background: 'var(--prymery-background-color)' }}>
        {attributes.map((head, index) => (
          <td key={`void-tr-${index}`} > <TableBody input={input} head={head} /></td>
        ))}
      </tr>
    );
  };

  return (
    <table>
      <thead>{renderTableHead()}</thead>
      <tbody>
        {data.length > 0
          ? data.filter(filterFunction).map((item, index) => renderTableRow(item, index))
          : renderEmptyRow()}
      </tbody>
    </table>
  );
}


function TableBody({ head, value, input }: ITableBody) {
  if (!value && input)
    return <InputForm type={getTypeByKey(head!)} placeholder={""} />;

  if (!value)
    return <>&nbsp;</>;

  if (input && value)
    return <InputForm type={getTypeByValue(value)!} placeholder={""} value={value} />;

  return <>{value}</>;
}

export default Table;
