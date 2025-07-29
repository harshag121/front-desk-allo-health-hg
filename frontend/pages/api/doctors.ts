import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

const backend = 'http://localhost:3001';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch(`${backend}/doctors`);
  const data = await response.json();
  res.status(200).json(data);
}
