import { NextResponse } from 'next/server'

export async function POST(request: Request): Promise<NextResponse> {
  console.log('request', NextResponse.json(request))
  return NextResponse.json(request)
}
