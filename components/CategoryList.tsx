import React from 'react';

type Category = {
  id: number;
  name: string;
};

type CategoryListProps = {
  categories: Category[];
};

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id} className="text-blue-600 hover:underline">
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;