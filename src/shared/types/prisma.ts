export interface IForeignKeyInfo {
  column_name: string
  foreign_table_name: string
  foreign_column_name: string
}
export interface IColumnInfo {
  column_name: string
}

export interface IDataPrisma {
  tableName: string
  attributes: string[]
  dataTable: AllTableType[]
}

export enum role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export interface IUsers {
  id: number
  created_at: Date
  updated_at: Date
  email: string
  firstname?: string
  lastname?: string
  fullname?: string
  role: role
}

export interface IMeasurements {
  id: number
  created_at: Date
  updated_at: Date
  width: number
  depth: number
  height: number
  product: IProducts[]
}

export interface IDetails {
  id: number
  created_at: Date
  updated_at: Date
  name: string
  value: string
  product: IProducts[]
}

export interface IProducts {
  id: number
  created_at: Date
  updated_at: Date
  article: string
  name: string
  description: string
  color?: string[]
  rating?: number[]
  published: boolean
  categories: ICategorys[]
  details: IDetails[]
  measurements: IMeasurements[]
}

export interface INews {
  id: number
  created_at: Date
  updated_at: Date
  title?: string
  content?: string
}

export interface ICategorys {
  id: number
  created_at: Date
  updated_at: Date
  name: string
  posts: IProducts[]
}

export type AllTableType = IUsers | IMeasurements | IDetails | IProducts | INews | ICategorys
