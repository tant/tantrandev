import { BlogPost } from "./BlogSection";

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const query = `{
    publication(host: "blog.tantran.dev") {
      posts(first: 3) {
        edges {
          node {
            id
            title
            brief
            url
            coverImage { url }
            publishedAt
            author { name profilePicture }
          }
        }
      }
    }
  }`;
  const res = await fetch('https://gql.hashnode.com/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
    next: { revalidate: 86400 }, // Revalidate once per day
  });
  const data = await res.json();
  const posts = (data.data?.publication?.posts?.edges || []).map((edge: any) => {
    const node = edge.node;
    return {
      id: node.id,
      title: node.title,
      href: node.url,
      description: node.brief,
      imageUrl: node.coverImage?.url || '/no-image.jpg',
      date: new Date(node.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      datetime: node.publishedAt.split('T')[0],
      author: {
        name: node.author.name,
        imageUrl: node.author.profilePicture || '/profile-pic.jpg',
      },
    };
  });
  return posts;
}
