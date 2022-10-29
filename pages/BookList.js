import { GET_BOOKS } from "../graphql/query";
import { useQuery, gql } from "@apollo/client";

export default function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);
  return data.books.map((book) => {
    return (
      <ul id="book-list">
        <li key={book.id}>{book.name}</li>
        <li>{book.id}</li>
        <li>{book.genre}</li>
      </ul>
    );
  });
}
