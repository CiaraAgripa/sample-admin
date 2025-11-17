import { showSwalError, showSwalSuccess } from "@/contants/swal";
import { localService } from "@/services/localServices";
import { TContentPagination, TGetPostParams, TGetPosts, TPostContentParams } from "@/types/mainSchema";
import { useState } from "react";

const usePosts = () => {
  const [posts, setPosts] = useState<TGetPosts[]>([]);
  const [postsPagination, setPostsPagination] = useState<TContentPagination>({ page: 0, limit: 0, total: 0, totalPages: 0 });

  const getPostContent = async ({ params }: { params: TGetPostParams }) => {
    const response = await localService.getPosts({ params });

    if (response?.success) {
      setPosts(response.data.posts);
      setPostsPagination(response.data.pagination);
    }
  };

  const postContent = async ({ params }: { params: TPostContentParams }) => {
    const response = await localService.postContent({ params });

    if (response?.success) {
      showSwalSuccess("Your post has been uploaded");
    } else if (!response.success) {
      showSwalError("There seems to be a problem in uploading your post. Please try again later.");
    }
  };

  return { getPostContent, postsPagination, setPostsPagination, posts, setPosts, postContent };
};

export default usePosts;
