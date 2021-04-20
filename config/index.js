export const server =
  process.env.NODE_ENV === 'production'
    ? 'https://nextjs-post.netlify.app'
    : 'http://localhost:3000';
