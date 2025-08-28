"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useAuthStore from "@/store/authStore";

export function BlogFormDialog() {
  const APP_ID = process.env.NEXT_PUBLIC_APP_ID;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const { user } = useAuthStore();

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      setLoading(true);

      // Save blog to Backendless
      await fetch(
        `https://api.backendless.com/${APP_ID}/${API_KEY}/data/blogs`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            body,
            author: user.username, // comes from authStore
            dates: new Date().toLocaleDateString(), // maps to your DB "dates" column
          }),
        }
      );

      // reset form
      setTitle("");
      setBody("");
      setOpen(false);
    } catch (err) {
      console.error("Error saving blog:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-600">+ Add Blog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Blog Post</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <Input
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Textarea
            placeholder="Blog Content..."
            rows={6}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Publishing..." : "Publish"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
