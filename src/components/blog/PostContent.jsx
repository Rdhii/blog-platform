import apiClient from "../../lib/apiClient";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function PostContent() {
  const [post, setPost] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!window.confirm("Hapus post ini?")) return;
    try {
      await apiClient.delete(`/post/${id}`);
      toast.success("Post berhasil dihapus.");
      navigate("/");
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error("Gagal menghapus post. Silakan coba lagi.");
    }
  };

  const handleUpdate = async () => {
    navigate(`/create/${id}`);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await apiClient.get(`/post/${id}`);
      setPost(response.data);
    };
    fetchPosts();
  }, [id]);

  const formattedDate = post?.createdAt
    ? new Intl.DateTimeFormat("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(new Date(post.createdAt))
    : "Tanggal tidak tersedia";

  return (
    <div className="md:w-[50%] w-75 mx-auto py-20">
      <Link
        to="/"
        className="flex items-center gap-3 w-fit py-2 px-4 rounded-lg hover:bg-blue-100 hover:text-blue-500 hover:cursor-pointer text-sm mb-9"
      >
        {" "}
        <ArrowLeft className="size-4" /> Back to all post
      </Link>
      <div className="flex gap-3 mb-4 w-fit items-center">
        <p className="px-2.5 py-0.5 rounded-2xl text-sm bg-gray-200">
          {post?.category}
        </p>
        <p className="text-sm text-muted-foreground">{formattedDate}</p>
      </div>
      <p className="mb-6 font-bold text-4xl">{post?.title}</p>
      <div className="flex gap-2 mb-10 text-sm items-center">
        {post?.tags.map((tag) => (
          <p className="border bg-gray-100 rounded-lg py-0.5 px-2.5">{tag}</p>
        ))}
      </div>
      <div className="prose prose-slate mb-12 text-lg">
        <ReactMarkdown>{post?.content}</ReactMarkdown>
      </div>
      <div className="flex items-center gap-3 border-t border-gray-200 py-4 text-sm">
        <button
          onClick={handleUpdate}
          className="border border-gray-200 shadow-lg rounded-lg px-4 py-1.5 hover:bg-blue-100 hover:text-blue-500 cursor-pointer"
        >
          Edit Post
        </button>
        <button
          onClick={handleDelete}
          className="border border-gray-200 shadow-lg rounded-lg px-4 py-1.5 text-red-500 hover:bg-red-100 cursor-pointer"
        >
          Delete Post
        </button>
      </div>
    </div>
  );
}
