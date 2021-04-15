import Head from 'next/head';
import PostList from '../components/PostList';

const Home = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Web dev news</title>
        <meta name='keywords' content='web dev' />
      </Head>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`,
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};
