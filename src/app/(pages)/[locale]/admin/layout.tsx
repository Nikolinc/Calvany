import Leftbar from "@/components/ui/leftbar/leftbar";
import { getAllTables } from "../../../../../lib/prisma";
import Style from "./admin.module.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const refLink = await getAllTables();
  return (
    <main className={Style.adminPage} >
      <Leftbar reference={refLink} />
      {children}
    </main>
  )
}