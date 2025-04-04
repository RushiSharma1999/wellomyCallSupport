import { NextRequest, NextResponse } from 'next/server'
import { connectToDB } from '@/lib/ds'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, picture, provider } = body

    const connection = await connectToDB()

    await connection.query(
      `INSERT INTO Users (full_name, email, profile_picture, provider)
       VALUES (?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
         full_name = VALUES(full_name),
         profile_picture = VALUES(profile_picture),
         provider = VALUES(provider);`,
      [name, email, picture, provider]
    )

    return NextResponse.json({ message: 'User saved successfully' })
  } catch (err: any) {
    return NextResponse.json({
      error: 'Database error',
      message: err.message || 'Something went wrong',
    }, { status: 500 })
  }
}
