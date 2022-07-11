import axios from 'axios';
import { useEffect, useState } from 'react';


const Axios = () => {

      const [data, setData] = useState(null);
      useEffect(() => {
            const fetchData = async () => {
                  const res = await axios.get("http://api.quotable.io/random");
                  setData(res.data)
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

export default Axios