import HeaderAdminPage from "@/components/common/headerAdminPage/headerAdminPage"
import Style from "./page.module.css"
import UploadForm from "@/components/ui/upload/upload"


function CreatePage({ params }: { params: { table: string } }) {
  return (
    <section className={Style.tableAdmin}>
      <HeaderAdminPage Tables={params.table} TypePage="Create" path="/personal" />
      <UploadForm />
      create
    </section>
  )
}

export default CreatePage