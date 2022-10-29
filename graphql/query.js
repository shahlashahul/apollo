import {  gql } from '@apollo/client';


const GET_BOOKS = gql`
  {
        books {
            name
            id
            genre
        }
    }
`;
const GET_AUTHORS = gql`
  {
        authors {
            name
            id
            
        }
    }
`;
const ADDBOOK_MUTATIONS = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`;
export { GET_BOOKS, GET_AUTHORS, ADDBOOK_MUTATIONS };