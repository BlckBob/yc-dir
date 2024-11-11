import { auth } from "@/auth";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Boban" },
      _id: 1,
      description: "A new way to connect with people",
      image:
        "https://images.unsplash.com/photo-1581878611345-3fe425a0f833?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdFJTIwcm9ib3RzfGVufDB8fDB8fHww",
      category: "Technology",
      title: "Connectify",
    },
    {
      // 2 days ago
      _createdAt: new Date(Date.now() - 172800000),
      views: 90,
      author: { _id: 1, name: "Ana" },
      _id: 2,
      description: "A digital platform for farmers",
      image:
        "https://images.unsplash.com/photo-1731168168200-23c438871160?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
      category: "Agriculture",
      title: "Farmers Connect",
    },
    {
      // 3 days ago
      _createdAt: new Date(Date.now() - 259200000),
      views: 75,
      author: { _id: 1, name: "Mima" },
      _id: 3,
      description: "A platform for sharing your favorite books",
      image:
        "https://images.unsplash.com/photo-1533915828531-55b274d98dc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFdFJTIwcm9ib3RzfGVufDB8fDB8fHww",
      category: "Books",
      title: "Bookshelf",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="card_grid mt-7">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
