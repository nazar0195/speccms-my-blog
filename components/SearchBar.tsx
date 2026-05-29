import React, { useState } from 'react';

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState<string>('');

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Implement search functionality here
        console.log('Searching for:', query);
    };

    return (
        <form onSubmit={handleSearch} className="flex items-center">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white rounded-r-md py-2 px-4 hover:bg-blue-600 transition"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;