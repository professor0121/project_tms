import tours from './data.json';

const handler = async (req, res) => {

    if(req.method!== "GET"){
        return res.status(405).json("method is not allowed");
    }
    try {
        res.status(200).json(tours);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default handler;

