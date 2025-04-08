// import { serialize } from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';

// import { encrypt } from '../../lib/session'; // Commented out encryption logic

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // const sessionData = req.body; // Commented out session data handling
  // const encryptedSessionData = encrypt(sessionData); // Commented out encryption logic

  // const cookie = serialize('session', encryptedSessionData, { // Commented out cookie creation
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV === 'production',
  //   maxAge: 60 * 60 * 24 * 7, // One week
  //   path: '/',
  // });
  // res.setHeader('Set-Cookie', cookie); // Commented out setting the cookie

  res.status(200).json({ message: 'Display-only mode: No encryption or cookies set.' }); // Display-only response
}