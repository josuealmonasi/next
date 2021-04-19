import Link from 'next/link';
import Meta from '../../../components/Meta';
import { server } from '../../../config';

const post = ({ post }) => {
  return (
    <>
      <Meta title={post.title} />
      <h1>{post.title}</h1>
      <p style={{ width: '70%' }}>{post.body}</p>
      <br />
      <Link href='/'>Go back</Link>
    </>
  );
};

export default post;

export const getStaticProps = async context => {
  const res = await fetch(`${server}/api/posts/${context.params.id}`);
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/posts/`);
  const posts = await res.json();
  const ids = posts.map(p => p.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

/* export const getStaticProps = async context => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`,
  );
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const posts = await res.json();
  const ids = posts.map(p => p.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
}; */
