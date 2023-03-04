import { NextApiRequest, NextApiResponse } from "next";
import NextCors from 'nextjs-cors';

// Call Pexels Search API with provided searchQuery string that user typed into search box
export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    await NextCors(req, res, {
        methods: ['GET'],
        origin: '*',
        optionsSuccessStatus: 200,
    });

    const fetchResponse = await fetch(`${process.env.PEXELS_BASE_PATH}/search?query=${req.query.searchQuery}&per_page=80`, {
        method: 'GET',
        headers: {'Authorization': process.env.PEXELS_API_KEY || ''},
    }).then((res) => res.json());

    res.status(200).json(fetchResponse);
}