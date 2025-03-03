// Here's an example of how you might implement role-based authorization in a Next.js API route:
import { NextApiRequest, NextApiResponse } from 'next'
import { verifySession } from '@/lib/auth'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await verifySession(req)

  if (!session) {
    return res.status(401).json({ error: 'User is not authenticated' })
  }

  if (session.user.role !== 'admin') {
    return res.status(403).json({ error: 'User does not have admin privileges' })
  }

  // Proceed with admin-only operations
}

// Here's an example of how you might implement token-based authentication in a Next.js API route:
import { NextApiRequest, NextApiResponse } from 'next'
import { verifyToken } from '@/lib/auth'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'No token provided' })
  }

  try {
    const decoded = await verifyToken(token)
    // Proceed with the request
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' })
  }
}

//Here's an example of how you might implement data validation in a Next.js API route:
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const UserSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  age: z.number().int().min(18).max(120)
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const validatedData = UserSchema.parse(req.body)
    // Proceed with operation using validatedData
  } catch (error) {
    return res.status(400).json({ error: 'Invalid input data' })
  }
}
