import styles from '../styles/Post.module.css';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
  return (
    <div className={styles.grid}>
      {posts.map(p => (
        <PostItem key={p.id} post={p} />
      ))}
    </div>
  );
};

export default PostList;
