import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import axios from "axios";
import { Link } from "react-router-dom";


export default function LatestPostSection() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("http://localhost:3000/api/post/");
      setPosts(response.data);
      // console.log(response);
    }
    fetchPosts();
  }, []);

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
        {posts.map((post) => (
            <PostItem id={post.id} category={post.category} title={post.title} content={post.content} tags={post.tags} createdAt={post.createdAt} />
        ))}
      </div>
    </div>
  );
}
