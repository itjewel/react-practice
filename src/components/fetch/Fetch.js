import { useEffect, useState } from 'react';

const Fetch = () => {
      const [data, setData] = useState(null);
      useEffect(() => {
            const fetchData = async () => {
                  const res = await fetch("http://api.quotable.io/random");
                  const resData = await res.json();
                  setData(resData)
            }
            fetchData();
      }, [])
      return (
            <>
                  {/* {console.log(data)} */}
                  <p>{data?.content}</p>

            </>
      )
}

export default Fetch