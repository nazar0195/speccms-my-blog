import React from 'react';

type ArticleCardProps = {
  title: string;
  excerpt: string;
  link: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ title, excerpt, link }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 text-base mb-4">{excerpt}</p>
      <a href={link} className="text-blue-500 hover:underline">
        Read more
      </a>
    </div>
  );
};

export default ArticleCard;