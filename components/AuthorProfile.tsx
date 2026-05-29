import React from 'react';

interface AuthorProfileProps {
  name: string;
  bio: string;
  picture: string;
  articles: string[];
}

const AuthorProfile: React.FC<AuthorProfileProps> = ({ name, bio, picture, articles }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
      <img src={picture} alt={`${name}'s picture`} className="w-24 h-24 rounded-full mb-4" />
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-700 text-center mb-4">{bio}</p>
      <h3 className="text-lg font-semibold mb-2">Articles:</h3>
      <ul className="list-disc pl-5">
        {articles.map((article, index) => (
          <li key={index} className="text-blue-500 hover:underline">
            {article}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorProfile;