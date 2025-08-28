"use client";
import useAuthStore from "@/store/authStore";
import { BlogFormDialog } from "./BlogFromDialog";

const AddBlog = () => {
  const { user } = useAuthStore();

  return <div>{user && <BlogFormDialog />}</div>;
};
export default AddBlog;
