import { Link } from "react-router-dom";
import SampleData from "../../Asset/SampleData.json";
import "./List.css";
import { useState } from "react";

export const List = function List() {
  let originalDataList = [];

  for (const [i, data] of SampleData.entries()) {
    const detailData = {
      id: "q-" + (i + 1),
      title: data["title"],
      query: data["query"],
      averageReview: data["averageReview"],
      reviewers: data["reviewers"],
      example: data["example"],
    };
    originalDataList.push(detailData);
  }

  let [dataList, setDataList] = useState(originalDataList);

  const searchQueryByText = (keyword) => {
    const keywords = keyword.toLowerCase().split(" ");
    setDataList(
      originalDataList.filter(
        (x) =>
          keywords.every((k) => x.title.toLowerCase().includes(k)) ||
          keywords.every((k) => x.query.toLowerCase().includes(k)) ||
          keywords.every((k) => x.example.toLowerCase().includes(k))
      )
    );
  };

  const search = (e) => {
    searchQueryByText(e.target.value);
  };

  return (
    <div className="List">
      <div id="search-box">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => search(e)}
        />
      </div>
      <hr></hr>
      <div id="query-list">
        {dataList.map((item) => {
          return (
            <Link to={{ pathname: "../detail/" + item.id }} state={item}>
              <div class="list-item">
                <p class="title">{item.title}</p>
                <div>{omitLongQuery(item.query, 50)}</div>
                <p>
                  Star:{item.averageReview} ({item.reviewers})
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const omitLongQuery = (query, maxLength) => {
  if (query.length > maxLength) {
    return query.substring(0, maxLength) + "...";
  }
  return query;
};
