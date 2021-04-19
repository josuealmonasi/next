import { posts } from '../../../data';

export default function handler({ query: { id } }, res) {
  const post = posts.find(p => p.id === id);
  return post
    ? res.status(200).json(post)
    : res.status(404).json({ message: 'Not found!' });
}
