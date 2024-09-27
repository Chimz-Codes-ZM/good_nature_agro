import React from 'react';

export const SearchHistory = ({ history, onSelect }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-5">
      <h2 className="text-lg font-semibold text-white mb-4">Search History</h2>
      <ul className="space-y-2">
        {history.length > 0 ? (
          history.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer text-gray-300 hover:bg-gray-700 px-4 py-2 rounded transition-colors"
              onClick={() => onSelect(item)}
            >
              <span className="font-medium text-white">{item?.city}</span>, {item?.country_code}
            </li>
          ))
        ) : (
          <li className="text-gray-400">No search history available</li>
        )}
      </ul>
    </div>
  );
};

export default SearchHistory;
