import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

const backend = 'http://localhost:3001';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch(`${backend}/appointments`, {
    method: req.method,
    headers: { 'Content-Type': 'application/json' },
    body: req.method === 'POST' ? JSON.stringify(req.body) : undefined,
  });
  const data = await response.json();
  res.status(200).json(data);
}
