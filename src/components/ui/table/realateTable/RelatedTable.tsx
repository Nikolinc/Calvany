'use client'
import ArrToKeyObj from '@/shared/configs/arrToKeyObj';
import { AllTableType, IDataPrisma } from '@/shared/types/prisma';
import React, { useState } from 'react';
import Button from '../../button/button';
import HeraderTable from '../../headerTable/heraderTable';
import Table from '../table';
import Style from './RelatedTable.module.css';

interface IRelatedTable {
  data: IDataPrisma[],
  table: string,
}

interface IRelatedButton extends IRelatedTable {
  setActivity: React.Dispatch<React.SetStateAction<number>>
}

interface IRelatedTablesContent extends IRelatedTable {
  activity: number
}

const RelatedButton: React.FC<IRelatedButton> = ({ data, table, setActivity }) => (
  data.length > 1 && (
    <div className={Style.blocTabs}>
      {data.map((item: IDataPrisma, index) => {
        if (item.tableName === table)
          return null;
        return (
          <Button
            key={`RelatedButton=${index}`}
            onClick={() => setActivity(index)}
            className={`buttonTypeTabs`}
            pathLocalisation="Admin.Tables"
            text={item.tableName}
          />
        )
      })}
    </div>
  )
);


const RelatedTableItem: React.FC<IDataPrisma> = ({ tableName, dataTable, attributes }) => {


  const [data, setData] = useState<AllTableType[] | any[]>((dataTable.length > 0) ? dataTable : [ArrToKeyObj(attributes)])
  console.log('data', data);

  const AddRow = () => {
    setData((dataItem) => [...dataItem, ArrToKeyObj(attributes)])
  }

  return (
    <>
      <HeraderTable table={tableName} addFunc={AddRow} />
      <Table input={true} data={data} attributes={attributes} filterFunction={() => true} />
    </>
  )
}

const RelatedTablesContent: React.FC<IRelatedTablesContent> = ({ data, table, activity }) => (
  <div className={Style.contentTabs}>
    {data.map((item: IDataPrisma, index) => (
      <div
        className={`${Style.content} ${(index === activity) && (Style.activeContent)}`}
        key={`tabel=${index}`}>
        <RelatedTableItem {...item} />
      </div>
    ))}
  </div>
);

const RelatedTable: React.FC<IRelatedTable> = (props) => {
  const [activity, setActivity] = useState<number>(0);
  return (
    <div className={Style.cantainerCreateForm}>
      <RelatedButton setActivity={setActivity} {...props} />
      {(props.data.length > 0) && <RelatedTablesContent activity={activity}  {...props} />}
    </div>
  )
}


export default React.memo(RelatedTable)