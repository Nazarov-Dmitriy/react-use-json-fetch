import { useEffect, useState } from "react";

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, { opts });
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.status);
        }
        setData((prev) => responseData);
      } catch (e) {
        setError(e.message);
      } finally {
        setTimeout(() => setLoading(false), 2000);
      }
    };
    fetchData();
  }, []);

  return [data, loading, error];
}
