import CreateEditForm from "@/components/ui/createForm/createForm";
import { getForeignKeysForTable, getTableAttributes } from "../../../../../../../../lib/prisma";
import Style from "./page.module.css";
import { useForm } from "react-hook-form";

interface IParams {
  table: string,
  action: string,
  id: string
}

async function Actions({ params }: { params: IParams }) {

  const attributes = await getTableAttributes(params.table);
  const foreignKey = await getForeignKeysForTable(params.table);  

  return (
    <section className={Style.tableAdmin}>
      <CreateEditForm foreignKey={foreignKey} attributes={attributes} {...params} />
    </section>
  );
}

export default Actions

