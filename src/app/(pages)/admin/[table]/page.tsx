import HeaderAdminPage from "@/components/common/headerAdminPage/headerAdminPage";
import HeraderTable from "@/components/ui/headerTable/heraderTable";
import Table from "@/components/ui/table/table";
import prisma, { getAllTables } from "../../../../../lib/prisma";
import Style from './page.module.css';

const getTable = async (table: string) => {
  // @ts-ignore
  const database = await prisma[table].findMany();
  return database
};


async function Admin({ params }: { params: { table: string } }) {
  const refLink = await getAllTables();

  if (!refLink.includes(params.table)) {
    return <>404</>;
  }

  const table = await getTable(params.table);

  return (
    <section className={Style.tableAdmin}>
      <HeaderAdminPage Tables={params.table} TypePage="Tables" path="/personal" />
      <HeraderTable table={params.table} />
      <Table data={table} />
    </section>
  );
}

export default Admin