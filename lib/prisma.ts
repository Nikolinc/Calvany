import { IColumnInfo, IForeignKeyInfo } from '@/shared/types/prisma'
import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  let globalWithPrisma = global as typeof globalThis & {
    prisma: PrismaClient
  }
  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient()
  }
  prisma = globalWithPrisma.prisma
}

export async function getTable(table: string) {
  // @ts-ignore
  const database = await prisma[table].findMany()
  return database
}

export async function getAllTables() {
  const result: { table_name: string }[] = await prisma.$queryRaw`
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = 'public';
  `

  const tableNames = result.map(row => row.table_name)

  return tableNames
}

export async function getTableAttributes(tableName: string): Promise<string[]> {
  try {
    const tableSchema: IColumnInfo[] =
      await prisma.$queryRaw`SELECT * FROM information_schema.columns WHERE table_name = ${tableName};`
    const attributes: string[] = tableSchema.map(column => column.column_name)

    return attributes
  } catch (error) {
    console.error('Error fetching table attributes:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

export async function getForeignKeysForTable(tableName: string): Promise<IForeignKeyInfo[]> {
  try {
    const foreignKeys: IForeignKeyInfo[] = await prisma.$queryRaw`
      SELECT
        conname AS column_name,
        confrelid::text AS foreign_table_name,
        a.attname AS foreign_column_name
      FROM
        pg_constraint
      JOIN
        pg_attribute AS a ON a.attnum = ANY(conkey) AND a.attrelid = conrelid
      WHERE
        confrelid = ${tableName}::regclass;
    `
    return foreignKeys
  } catch (error) {
    console.error('Error fetching foreign keys for table:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

export default prisma
