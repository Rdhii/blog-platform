import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import axios from "axios";
import { Link } from "react-router-dom";

export default function LatestPostSection() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Kirim query ke backend sebagai parameter
        const response = await axios.get("http://localhost:3000/api/post/", {
          params: { search: query },
        });
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    // Debounce untuk menghindari terlalu banyak request
    const timeoutId = setTimeout(() => {
      fetchPosts();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div className="md:px-30 px-7 border-y border-gray-300 py-10">
      {/* Latest Post dan Search */}
      <div className="md:flex justify-between mb-10 ">
        <p className="md:text-3xl md:mb-0 text-xl font-bold mb-2">
          Latest Post
        </p>
        <div className="flex items-center rounded-lg border border-gray-300 py-2 px-3 gap-3 ">
          <Search className="size-5 text-gray-400" />
          <input
            placeholder="Search"
            className="focus:outline-none text-sm"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
        </div>
      </div>
      {/* List Post Items */}
      <div className="list-post grid md:grid-cols-2 gap-5 ">
        {posts.map((post) => (
          <PostItem
            id={post.id}
            category={post.category}
            title={post.title}
            content={post.content}
            tags={post.tags}
            createdAt={post.createdAt}
          />
        ))}
      </div>
    </div>
  );
}
