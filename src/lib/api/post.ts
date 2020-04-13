import client from "./client";

export const writePost = async (formData: FormData) =>
  await client.post("/post/write", formData);

export const readPost = async (id: number) => await client.get(`/post/${id}`);

export const readPosts = async () => await client.get("/post/list");
