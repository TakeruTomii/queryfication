import { Link } from "react-router-dom";
import SampleData from "../../Asset/SampleData.json";
import "./List.css";

export const List = function List() {
  let list = [];

  for (const [i, data] of SampleData.entries()) {
    const detailData = {
      title: data["title"],
      query: data["query"],
      averageReview: data["averageReview"],
      reviewers: data["reviewers"],
      example: data["example"],
    };

    list.push(
      <Link to={{ pathname: "../detail/q-" + (i + 1) }} state={detailData}>
        <div class="list-item">
          <p class="title">{data["title"]}</p>
          <div>{data["query"]}</div>
          <p>
            Star:{data["averageReview"]} ({data["reviewers"]})
          </p>
        </div>
      </Link>
    );
  }

  return (
    <div className="List">
      <div id="search-box">
        <input type="text" />
      </div>
      <hr></hr>
      <div id="query-list">{list}</div>
    </div>
  );
};
