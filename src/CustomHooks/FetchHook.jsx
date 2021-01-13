import { useState, useEffect } from 'react';
import firebase from '../utils/firebase';

const FetchHook = () =>{
    const [data, setData] = useState([]);
    useEffect(() => {
    const feedRef = firebase.database().ref('feed_data');
    feedRef.on('value', (snapshot) => {
      const feed_data = snapshot.val();
      const data= []
      for (let id in feed_data) {
        const comments_list = []
        for (let cm_id in feed_data[id].comments){
          comments_list.push(feed_data[id].comments[cm_id].commentText)
        }
        feed_data[id].comments = comments_list;
        data.push({ id, ...feed_data[id] });
      }
      setData(data);
    });
  }, []);
  return [data]
}
export default FetchHook;