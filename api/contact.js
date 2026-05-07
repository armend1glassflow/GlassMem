const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
});

async function ensureTable(client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS glassmem_contacts (
      id             SERIAL PRIMARY KEY,
      email          TEXT NOT NULL,
      memory_tools   TEXT[],
      find_useful    TEXT,
      notes          TEXT,
      created_at     TIMESTAMPTZ DEFAULT NOW()
    )
  `);
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, memory_tools, find_useful, notes } = req.body || {};
  if (!email) return res.status(400).json({ error: 'Email required' });

  const client = await pool.connect();
  try {
    await ensureTable(client);
    await client.query(
      `INSERT INTO glassmem_contacts (email, memory_tools, find_useful, notes)
       VALUES ($1, $2, $3, $4)`,
      [email.toLowerCase().trim(), memory_tools || [], find_useful || null, notes || null]
    );
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('contact error', err);
    return res.status(500).json({ error: 'Server error' });
  } finally {
    client.release();
  }
};
