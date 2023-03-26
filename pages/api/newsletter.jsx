export default async function handler(req, res) {
  const email = req.body.email;

  if (!email) {
    return res.status(400).json({ error: 'Please enter an email address' });
  }

  const { url, data, headers } = getRequestParams(email);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });

    if (response.status >= 400) {
      const text = await response.text();
      throw new Error(text);
    }

    return res.status(201).json({ error: null });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

function getRequestParams(email) {
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;

  const DATACENTER = API_KEY.split('-')[1];
  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const data = {
    email_address: email,
    status: 'subscribed',
  };

  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString('base64');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${base64ApiKey}`,
  };

  return { url, data, headers };
}
