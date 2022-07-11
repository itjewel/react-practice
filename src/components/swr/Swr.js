import React from 'react';
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const url = "http://api.quotable.io/random";
const Swr = () => {
      const { data, error } = useSWR(url, fetcher, { suspense: true });
      if (error) return <h1>Something went wrong!</h1>
      return (
            <>
                  <p>{data.content}</p>

            </>
      )
}

export default Swr