import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import apiClient from "../../lib/apiClient";
import { toast } from "react-toastify";

export default function CreatePost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    tags: "",
    content: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    if (!id) return;
    const fetchPost = async () => {
      try {
        const response = await apiClient.get(`/post/${id}`);
        const postData = response.data;
        setFormData({
          title: postData.title ?? "",
          category: postData.category ?? "",
          tags: postData.tags ? postData.tags.join(", ") : "",
          content: postData.content ?? "",
        });
      } catch (error) {
        console.error("Error fetching post data:", error);
        toast.error("Failed to fetch post data. Please try again.");
      }
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const tagsArray = formData.tags
        .split(",")
        .map((tag) => tag.trim().toLowerCase())
        .filter((tag) => tag.length > 0);

      if (isEdit) {
        await apiClient.put(`/post/${id}`, {
          title: formData.title,
          category: formData.category,
          tags: tagsArray,
          content: formData.content,
        });
        toast.success("Post updated successfully!");
        navigate(`/${id}`);
      } else {
        const response = await apiClient.post("/post", {
          title: formData.title,
          category: formData.category,
          tags: tagsArray,
          content: formData.content,
        });
        response.data;
        toast.success("Post created successfully!");
        navigate("/");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error("Failed to create post. Please try again.");
    }
  };

  return (
    <div className="py-16 md:w-[50%] mx-auto w-75">
      <div className="space-y-3 mb-10">
        <p className="md:text-4xl text-3xl font-bold">Create New Post</p>
        <p className="text-sm text-muted-foreground">
          Share your thoughts with the world. Fill in the details below to
          publish your article.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="rounded-xl bg-card shadow-xl w-full p-10"
      >
        <div className="flex flex-col space-y-2">
          <label className="font-bold">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter your post title..."
            className="border border-gray-300 rounded-md p-2 focus:outline-primary"
            required
          />
        </div>
        <div className="flex flex-col space-y-2 mt-8">
          <label className="font-bold">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 cursor-pointer focus:outline-primary"
            required
          >
            <option value="" disabled hidden>
              Select a Category
            </option>
            <option value="Development">Development</option>
            <option value="UX">UX</option>
            <option value="Technology">Technology</option>
            <option value="Tutorial">Tutorial</option>
            <option value="Opinion">Opinion</option>
          </select>
        </div>
        <div className="flex flex-col space-y-2 mt-8">
          <label className="font-bold">Tags</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="e.g., design, development, tutorial"
            className="border border-gray-300 rounded-md p-2 focus:outline-primary"
          />
          <p className="text-sm text-muted-foreground mt-2">
            Press add tag with coma if you have more than 1 tag. Tags will be
            lowercase and alphanumeric only.
          </p>
        </div>
        <div className="flex flex-col space-y-2 mt-8">
          <label className="font-bold">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Write your post content here..."
            className="border border-gray-300 rounded-md p-2 h-40 resize-none focus:outline-primary"
            required
          />
        </div>
        <div className="md:flex-row flex flex-col-reverse gap-3 md:gap-0 justify-between mt-8">
          <Link
            to="/"
            className="px-5 py-2 rounded-lg hover:bg-blue-100 cursor-pointer text-center"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-5 py-2 bg-primary rounded-lg text-white cursor-pointer hover:bg-primary/90"
          >
            {isEdit ? "Update Post" : "Create Post"}
          </button>
        </div>
      </form>
    </div>
  );
}
