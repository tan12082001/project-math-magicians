import { useEffect, useState } from 'react';

const Quote = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=courage', {
        method: 'GET',
        withCredentials: true,
        headers: {
          'X-Api-Key': 'uCHBJSjC0mhJo8VJsKMGKw==TE5WVQkHClEOg2cP',
          'Content-Type': 'application/json',
        },
      });
      const json = await res.json();
      setData(json[0]);
    };
    fetchData();
  }, [setData]);
  return (
    <div className="quote-display">
      <p className="quote">
        {data.quote}
      </p>
      <p className="author">
        {data.author}
      </p>
    </div>
  );
};

export default Quote;
