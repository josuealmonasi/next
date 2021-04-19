import { server } from '../config';
import PostList from '../components/PostList';

const Home = ({ posts }) => {
  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/posts`);
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};

/* export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`,
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}; */
