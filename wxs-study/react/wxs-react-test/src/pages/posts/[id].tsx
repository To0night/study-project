function posts({ id }) {
  return (
    <>
      <div>
        <span>{`假设这是第${id}条新闻`}</span>
      </div>
    </>
  );
}

export const getStaticPaths = () => {
  const postList = new Array(100).fill({}).map((postItem, index: number) => ({
    params: { id: `${index + 1}` },
  }));
  return {
    paths: postList,
    fallback: true,
  };
};

export const getStaticProps = ({ params }: { params: { id: string } }) => {
  return {
    props: params,
  };
};

export default posts;
