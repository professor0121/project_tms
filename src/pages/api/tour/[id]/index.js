import { blogs } from '../../../index'; // <-- adjusted path

export default function handler(req, res) {
  const { id } = req.query;

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const blogId = parseInt(id, 10);
  const blog = blogs.find(b => b.id === blogId);

  if (blog) {
    return res.status(200).json(blog);
  } else {
    return res.status(404).json({ message: 'Blog not found' });
  }
}
