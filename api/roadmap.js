export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  // Best-effort -- log to console, wire email later
  console.log('Roadmap submission:', req.body);
  res.status(200).json({ ok: true });
}
