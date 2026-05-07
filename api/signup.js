const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
});

async function ensureTable(client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS glassmem_signups (
      id          SERIAL PRIMARY KEY,
      email       TEXT UNIQUE NOT NULL,
      position    INT,
      created_at  TIMESTAMPTZ DEFAULT NOW()
    )
  `);
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email } = req.body || {};
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  const client = await pool.connect();
  try {
    await ensureTable(client);

    const count = await client.query('SELECT COUNT(*) FROM glassmem_signups');
    const position = parseInt(count.rows[0].count, 10) + 1;

    const result = await client.query(
      `INSERT INTO glassmem_signups (email, position)
       VALUES ($1, $2)
       ON CONFLICT (email) DO UPDATE SET position = glassmem_signups.position
       RETURNING position`,
      [email.toLowerCase().trim(), position]
    );

    return res.status(200).json({ success: true, position: result.rows[0].position });
  } catch (err) {
    console.error('signup error', err);
    return res.status(500).json({ error: 'Server error' });
  } finally {
    client.release();
  }
};
