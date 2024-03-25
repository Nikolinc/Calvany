import { NextRequest } from 'next/server'
import { getTable, getTableAttributes } from '../../../../lib/prisma'

export async function POST(request: NextRequest) {
  const body = await request.json()

  const table = await getTable(body.table)
  const attributes = await getTableAttributes(body.table)

  return new Response(
    JSON.stringify({
      tableName: body.table,
      attributes: attributes,
      dataTable: table,
    })
  )
}
