module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const { firstName, email, message } = req.body || {};
  if (!email) return res.status(400).json({ error: 'Email required' });

  // Best-effort: just return success. Real email sending can be wired later.
  return res.status(200).json({ ok: true });
};
