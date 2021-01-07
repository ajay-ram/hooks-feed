import firebase from '../utils/firebase';

function updateChildren (feed,type) {
    const feed_ref = firebase.database().ref('feed_data/'+feed.id);
    if(type==='like')
    {
        if(feed.isLiked)
        {
            const likes = feed.likes - 1;
            feed_ref.child("likes").set(likes);    
            feed_ref.child("isLiked").set(false);
        }
        else{
            const likes = feed.likes + 1;
            feed_ref.child("isLiked").set(true);
            feed_ref.child("likes").set(likes);
        }
        
    }
    else{
        const shares = feed.shares + 1;
        feed_ref.child("shares").set(shares);
    }
    
    return feed;
};
export default updateChildren;