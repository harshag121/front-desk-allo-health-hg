import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

const backend = 'http://localhost:3001';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const response = await fetch(`${backend}/queue/${id}`, {
    method: req.method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req.body),
  });
  const data = await response.json();
  res.status(200).json(data);
}
