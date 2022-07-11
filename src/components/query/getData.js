
const getData = async () => {
      const res = await fetch("http://api.quotable.io/random");
      const resData = await res.json();
      return resData;
}

export default getData