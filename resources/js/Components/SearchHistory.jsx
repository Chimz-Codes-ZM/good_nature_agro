import React from 'react'

export const SearchHistory = ({ history, onSelect }) => {
  return (
    <div className='text-white'>
        <h2>Search History</h2>
        <ul>
            {history.map((item, index) => (
                <li key={index} onClick={() => onSelect(item)}>
                    {item.city}, {item.country_code}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SearchHistory