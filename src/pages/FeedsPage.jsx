import FeedList from '../components/templates/FeedList/FeedList';
import FetchHook from '../CustomHooks/FetchHook';
function FeedsPage(){
const [data] = FetchHook();
  return (
    <FeedList data = {data}/>
  );
}
export default FeedsPage;