import { useEffect, useState } from 'react';

const category = 'funny';
const BAPI = 'https://api.api-ninjas.com/v1/quotes?category=';
const MY_API = `${BAPI}${category}`;

const Quote = () => {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    const fetchData = async () => {
      setIsLoading(true);
      try {
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
        }
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();

    // cleanup method for the useEffect hook
    return () => {
      isCancelled = true;
    };
  }, []);

  // DOM element to show when error has been thrown
  if (hasError) {
    return <div>Something went wrong!</div>;
  }

  // DOM element to show while component is waiting for API response
  if (isLoading) {
    return <div>Loading quote</div>;
  }

  // DOM element to display quote and author from successful API request.
  return (
    <div className="quote-display">
      <p className="quote">
        {data.quote}
      </p>
      <p className="author">
        <b>
          {data.author}
        </b>
      </p>
    </div>
  );
};

export default Quote;
