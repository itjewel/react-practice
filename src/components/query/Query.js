
import { useQuery } from 'react-query';
import getData from './getData';

const Query = () => {
      const { data } = useQuery("query", () => getData())

      return (
            <>
                  {/* {console.log(data)} */}
                  <p>{data?.content}</p>

            </>
      )
}

export default Query