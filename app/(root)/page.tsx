import { Button } from "@/components/ui/button";
import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";
import { users } from "@/database/schema";
import { db } from "@/database/drizzle";

// @ts-ignore
const Home = async () => {
  const result = await db.select().from(users);

  console.log(JSON.stringify(result, null, 2));
  return (
    <>
      <BookOverview {...sampleBooks[0]} />

      <BookList title="Latest Books" books={sampleBooks} container="mt-28" />
    </>
  );
}


export default Home;
