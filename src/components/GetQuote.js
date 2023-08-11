import { useEffect, useState } from 'react';

const category = 'funny';
const BAPI = 'https://api.api-ninjas.com/v1/quotes?category=';
const MY_API = `${BAPI}${category}`;

const Quote = () => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch(MY_API, {
        method: 'GET',
        withCredentials: true,
        headers: {
          'X-Api-Key': 'uCHBJSjC0mhJo8VJsKMGKw==TE5WVQkHClEOg2cP',
          'Content-Type': 'application/json',
        },
      });
      const json = await res.json();
      if (!isCancelled) {
        setData(json[0]);
        setIsLoading(false);
      }
    };
    fetchData();
    return () => {
      isCancelled = true;
    };
  }, [setData, setIsLoading]);

  if (isLoading) {
    return <div>Loading quote</div>;
  }
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
