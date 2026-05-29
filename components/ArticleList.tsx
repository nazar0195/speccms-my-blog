import React from 'react';

type Article = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  category: string;
};

type ArticleListProps = {
  articles: Article[];
  category?: string;
};

const ArticleList: React.FC<ArticleListProps> = ({ articles, category }) => {
  const filteredArticles = category 
    ? articles.filter(article => article.category === category) 
    : articles;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Articles</h2>
      <ul className="space-y-4">
        {filteredArticles.map(article => (
          <li key={article.id} className="border-b pb-2">
            <h3 className="text-xl font-semibold">{article.title}</h3>
            <p className="text-gray-600">{article.excerpt}</p>
            <p className="text-sm text-gray-500">By {article.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;