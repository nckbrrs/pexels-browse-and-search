import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const fetchResponse = await fetch(`${process.env.PEXELS_BASE_PATH}/curated?page=1`, {
        method: 'GET',
        headers: {
            'Authorization': process.env.PEXELS_API_KEY
        } as HeadersInit
    }).then((res) => res.json());

    res.status(200).json(fetchResponse);
}