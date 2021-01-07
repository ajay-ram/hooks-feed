import firebase from '../utils/firebase';
function useCommentAdd (feed,commentText){
    const feedRef = firebase.database().ref('feed_data').child(feed.id).child("comments");
    const comment = {
        commentText
    };

    feedRef.push(comment);
};

export default useCommentAdd;