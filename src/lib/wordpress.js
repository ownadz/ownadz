const API = "https://blog.ownadz.com/wp-json/wp/v2";

export async function getPosts() {
  const res = await fetch(
    `${API}/posts?_embed&per_page=20`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return await res.json();
}

export async function getPostBySlug(slug) {
  const res = await fetch(
    `${API}/posts?slug=${slug}&_embed`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const posts = await res.json();

  return posts.length ? posts[0] : null;
}