import { NextApiRequest, NextApiResponse } from "next";
import NextCors from 'nextjs-cors';

// Call Pexels Curated API to fetch 80 photos of Pexels's choosing
export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    await NextCors(req, res, {
        methods: ['GET'],
        origin: '*',
        optionsSuccessStatus: 200,
    });

    const fetchResponse = await fetch(`https://api.pexels.com/v1/curated?page=1&per_page=80`, {
        method: 'GET',
        headers: {'Authorization': process.env.PEXELS_API_KEY || ''},
    }).then((res) => res.json());

    res.status(200).json(fetchResponse);
}