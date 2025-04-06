import { blogs } from '../index';

export default function handler(req, res) {
  const { id } = req.query;

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const blogId = Number(id);
  const blog = blogs.find(b => b.id === blogId);

  if (blog) {
    res.status(200).json(blog);
  } else {
    res.status(404).json({ message: 'Blog not found' });
  }
}
