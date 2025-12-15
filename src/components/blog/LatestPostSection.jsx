import { Search } from "lucide-react";
import React from "react";
import PostItem from "./PostItem";

const dataPosts = [
    {
        id: 1,
        genre: "Design",
        title: "The Art",
        description:
          "Minimalist design is more than just an aesthetic choice—it's a philosophy that emphasizes clarity and purpose.",
        tags: ["#minimalis", "#ui", "#aesthetic"],

    },
    {
        id: 2,
        genre: "Besign",
        title: "The Ort",
        description:
          "Minimalist design is more than just an aesthetic choice—it's a philosophy that emphasizes clarity and purpose.",
        tags: ["#minimalis", "#aesthetic"],

    },
    {
        id: 3,
        genre: "Resign",
        title: "The Winner",
        description:
          "Minimalist design is more than just an aesthetic choice—it's a philosophy that emphasizes clarity and purpose.",
        tags: ["#minimalis"],

    }
]

export default function LatestPostSection() {
  return (
    <div className="px-30 border-y border-gray-300 py-10">
      {/* Latest Post dan Search */}
      <div className="flex justify-between mb-10">
        <p className="text-3xl font-bold">Latest Post</p>
        <div className="flex items-center rounded-lg border border-gray-300 py-2 px-3 gap-3 ">
          <Search className="size-5 text-gray-400" />
          <input
            placeholder="Search"
            className="focus:outline-none text-sm"
          ></input>
        </div>
      </div>
      {/* List Post Items */}
      <div className="list-post grid grid-cols-2 gap-5">
        {dataPosts.map((post) => (
            <PostItem key={post.id} genre={post.genre} title={post.title} description={post.description} tags={post.tags} />
        ))}
      </div>
    </div>
  );
}
