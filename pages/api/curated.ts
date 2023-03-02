import { NextApiRequest, NextApiResponse } from "next";
import NextCors from 'nextjs-cors';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    await NextCors(req, res, {
        methods: ['GET'],
        origin: '*',
        optionsSuccessStatus: 200,
    });

    const fetchResponse = await fetch(`${process.env.PEXELS_BASE_PATH}/curated?page=1`, {
        method: 'GET',
        headers: {
            'Authorization': process.env.PEXELS_API_KEY
        } as HeadersInit
    }).then((res) => res.json());

    res.status(200).json(fetchResponse);
}