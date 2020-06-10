import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 12:00PM"
        content="I loved your blog!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Hevani"
        timeAgo="Today at 11:00AM"
        content="When will you post again?"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Cheka"
        timeAgo="Yesterday at 6:00PM"
        content="What a load of crap!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
