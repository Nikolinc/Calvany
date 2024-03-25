'use client'
import TitleAdminPage from "@/components/common/headerAdminPage/headerAdminPage";
import { AllTableType, IDataPrisma, IForeignKeyInfo } from "@/shared/types/prisma";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputFields from "../inputFields/InputFields";
import RelatedTable from "../table/realateTable/RelatedTable";
import UploadForm from "../upload/upload";
import Style from './createForm.module.css';

interface ICreateEditForm {
  table: string,
  action: string,
  id?: string,
  attributes: string[],
  foreignKey: IForeignKeyInfo[];
}

const makeApiCall = async (table: string) => {
  const res = await fetch('/api/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({ table: table })
  });
  return res.json();
};

const CreateEditForm: React.FC<ICreateEditForm> = (props) => {
  const [files, setFilse] = useState<File[]>([]);
  const [data, setData] = useState<IDataPrisma[]>([]);
  const { register, handleSubmit, trigger } = useForm<AllTableType>();
  const router = useRouter();

  const foreignKey = useMemo(() => {
    return props.foreignKey.map((foreign: IForeignKeyInfo) => {
      const match = foreign.column_name.match(/_(.*?)To/);
      return match ? match[1] : foreign.column_name;
    });
  }, [props.foreignKey]);

  useEffect(() => {
    if (foreignKey)
      fetchData();
  }, [foreignKey]);

  const fetchData = async () => {
    const newData = await Promise.all(foreignKey.map(table => makeApiCall(table)));
    setData(newData);
  };

  console.log('dataQuery', data)

  const onSubmit: SubmitHandler<any> = (data) => {
    if (files.length > 0)
      console.log("dataIMage", {
        ...data,
        file: files[0]
      }
      )
    console.log("data", data)
  };

  return (
    <form className={Style.tableAdmin} onSubmit={handleSubmit(onSubmit)} >
      <TitleAdminPage Tables={`${props.table}_one`} TypePage={props.action} back={router.back} />
      <main className={Style.ContentPage}>
        <InputFields attributes={props.attributes} register={register} />
        {props.table === 'products'
          && <UploadForm files={files} setFiles={setFilse} />}
      </main>
      <RelatedTable data={data} table={props.table} />
    </form >
  )
};

export default CreateEditForm;
