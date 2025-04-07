import tours  from '../data.json'; // <-- adjusted path

export default function handler(req, res) {
  const { id } = req.query;
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const tourId = parseInt(id, 10);
  const tour= tours.find(b => b.id === tourId);

  if (tour) {
    return res.status(200).json(tour);
  } else {
    return res.status(404).json({ message: 'tour not found' });
  }
}
