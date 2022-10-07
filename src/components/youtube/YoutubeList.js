import React from "react";
import { data } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = () => {
  return (
    <div>
      <div className="youtube-list">
        {data.map((item, index) => {
          return (
            <YoutubeItem
              key={item.id}
              image={item.image}
              avatar={item.avatar}
              title={item.title}
              author={item.author}
            ></YoutubeItem>
          );
        })}
      </div>
    </div>
  );
};

export default YoutubeList;
