// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    code: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const callback = {
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
        grant_type: 'authorization_code',
        redirect_uri: process.env.API_REDIRECT_URI,
        code: req.query.code
    }

    const client_secret = process.env.API_CLIENT_SECRET;
    const client_id = process.env.NEXT_PUBLIC_CLIENT_ID

    const secret = client_id + ":" + client_secret;


    const b64secret = Buffer.from(secret).toString('base64');


    // Query API for token
    fetch('https://api.fitbit.com/oauth2/token', {
        method: 'post',
        headers: {
            'Authorization': `Basic ${b64secret}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `clientId=${callback.clientId}&grant_type=${callback.grant_type}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Foauth&code=${callback.code}`
    })
        .then(r => r.json())
        .then(data => {
            // Store JWT from response in cookies
            // res.cookie('kushyFToken', data.access_token, {
            // maxAge: 900000,
            // httpOnly: true
            // });

            // store object in session (with express-session)
            // req.session.token = data.access_token

            fetch('https://api.fitbit.com/1/user/-/profile.json', {
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${data.access_token}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .then(response => response.json())
                .then(data => {
                    return res.json(data);
                })
        })
}
