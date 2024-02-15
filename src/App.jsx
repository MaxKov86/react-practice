import { useState } from 'react';
import ArticleList from './components/ArticleList/ArticleList';
import Loader from './components/Loader/Loader';
import fetchArticlesWithTopic from './articles-api';
import SearchForm from './components/SearchForm/SearchForm';
function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async topic => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      <h1>Latest articles</h1>
      {loading && <Loader />}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}

export default App;
