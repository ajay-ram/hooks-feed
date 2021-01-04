import React, { useState, useEffect } from 'react';
import FeedList from '../components/templates/FeedList/FeedList';

function FeedsPage(){
const [data, setData] = useState([]);
  const getData = () =>
    fetch('http://www.json-generator.com/api/json/get/bPHuBCstea?indent=2')
      .then((res) => res.json())
  useEffect(() => {
    getData().then((data) => setData(data))
  }, [])
  console.log(data);
  return (
    <FeedList data = {data}/>
  );
}
export default FeedsPage;