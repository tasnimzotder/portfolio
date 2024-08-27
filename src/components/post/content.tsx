import styles from "./content.module.scss";

export const PostContent: React.FC<{ content: any }> = ({ content }) => {
  return (
    <div className={styles.content}>
      <div>{content}</div>
    </div>
  );
};
export default PostContent;
