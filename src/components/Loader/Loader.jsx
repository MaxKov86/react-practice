import ContentLoader from 'react-content-loader';

const Loader = () => {
  return (
    <ContentLoader
      speed={2}
      width={1200}
      height={150}
      viewBox="0 0 1200 150"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="10" cy="20" r="8" />
      <rect x="25" y="15" rx="5" ry="5" width="450" height="10" />
      <circle cx="10" cy="50" r="8" />
      <rect x="25" y="45" rx="5" ry="5" width="450" height="10" />
      <circle cx="10" cy="80" r="8" />
      <rect x="25" y="75" rx="5" ry="5" width="450" height="10" />
      <circle cx="10" cy="110" r="8" />
      <rect x="25" y="105" rx="5" ry="5" width="450" height="10" />
    </ContentLoader>
  );
};

export default Loader;
