import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="mb-2">© {new Date().getFullYear()} My Blog. All rights reserved.</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;