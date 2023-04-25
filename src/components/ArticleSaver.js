import React, { useState, useEffect } from 'react';
import Article from './Article';

function ArticleSaver() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('/api/saved-articles', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  const handleRemove = async (id) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`/api/remove-article/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.ok) {
      const updatedArticles = articles.filter((article) => article.id !== id);
      setArticles(updatedArticles);
    } else {
      // handle error
    }
  };

  return (
    <div className="article-saver">
      <h1>My Saved Articles</h1>
      {articles.map((article) => (
        <Article key={article.id} article={article} onRemove={handleRemove} />
      ))}
    </div>
  );
}

export default ArticleSaver;
