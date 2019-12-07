import { useEffect, useState } from 'react';

export const useFetchFonts = () => {
  const [fonts, setFonts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(
      'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDEKxv-YoRAEvZQmpoWgg659aOtADswW30'
    )
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        if (json.items) {
          setFonts(json.items);
        } else {
          setFonts([]);
        }
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  return { fonts, loading, error };
};
