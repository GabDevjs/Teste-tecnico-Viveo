import React, { useState, useEffect } from 'react';
import { Input } from './ui/input';

function SearchComponent({search, onSearch }: {search: string, onSearch: (query: string) => void }) {
  const [query, setQuery] = useState(search); 
  const [debouncedQuery, setDebouncedQuery] = useState(query); 

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); 
    
    return () => clearTimeout(timerId);
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      onSearch(debouncedQuery);
    }
  }, [debouncedQuery, onSearch]);

  return (
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="pl-8 w-full"
      />
  );
}

export default SearchComponent;