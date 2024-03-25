import TitleAdminPage from "@/components/common/headerAdminPage/headerAdminPage";
import TableForm from "@/components/ui/FilterTable/FilterTable";
import HeraderTable from "@/components/ui/headerTable/heraderTable";
import { getAllTables, getTable, getTableAttributes } from "../../../../../../lib/prisma";
import Style from './page.module.css';


async function Admin({ params }: { params: { table: string } }) {
  const refLink = await getAllTables();
  const table = await getTable(params.table);
  const attributes = await getTableAttributes(params.table);

  if (!refLink.includes(params.table)) {
    return <>404</>;
  }

  return (
    <section className={Style.tableAdmin}>
      <TitleAdminPage Tables={params.table} TypePage="table" path="/personal" />
      <HeraderTable table={params.table} />
      <TableForm data={table} attributes={attributes} />
    </section>
  );
}


export default Admin

