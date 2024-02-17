import SampleData from "../../Asset/SampleData.json";
import "./List.css";

export const List = function List() {
  let list = [];

  for (const [i, data] of SampleData.entries()) {
    list.push(
      <div class="list-item">
        <p class="title">{data["title"]}</p>
        <div>{data["query"]}</div>
        <p>
          Star:{data["averageReview"]} ({data["reviewers"]})
        </p>
      </div>
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
