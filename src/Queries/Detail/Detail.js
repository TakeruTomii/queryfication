import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";

export const Detail = function Detail(props) {
  const { id } = useParams();
  const { state } = useLocation();
  return (
    <div className="Detail">
      <Link to={"../edit/" + id} state={state}>
        EDIT
      </Link>
      <div id="detail-id">id: {id}</div>
      <div id="title">title: {state.title}</div>
      <div id="review">
        review: {state.averageReview} ({state.reviewers})
      </div>
      <div id="query">query: {state.query}</div>
      <div id="example">example: {state.example}</div>
      <div id="evaluate">
        <form>
          <label for="star">star: </label>
          <select name="star">
            <option value=""></option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
            <option value="0">0</option>
          </select>
        </form>
      </div>
      <br />
      <br />
      <br />
      <Link to="/list">Back to Link</Link>
    </div>
  );
};
