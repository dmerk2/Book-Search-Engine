// import { gql } from "@apollo/client";

// // GraphQL query to get logged in user's info
// export const GET_ME = gql`
//   query GetMe {
//     me {
//       _id
//       username
//       email
//       bookCount
//       savedBooks {
//         bookId
//         authors
//         description
//         title
//         image
//         link
//       }
//     }
//   }
// `;

// // GraphQL mutation to create a user
// export const CREATE_USER = gql`
//   mutation CreateUser($userData: CreateUserInput!) {
//     createUser(input: $userData) {
//       // Include the fields you want to retrieve for the newly created user
//       // Example: id, username, email, etc.
//     }
//   }
// `;

// // GraphQL mutation to login a user
// export const LOGIN_USER = gql`
//   mutation LoginUser($userData: LoginUserInput!) {
//     loginUser(input: $userData) {
//       // Include the fields you want to retrieve for the logged-in user
//       // Example: id, username, email, etc.
//     }
//   }
// `;

// // GraphQL mutation to save a book for a logged in user
// export const SAVE_BOOK = gql`
//   mutation SaveBook($bookData: SaveBookInput!) {
//     saveBook(input: $bookData) {
//       // Include the fields you want to retrieve for the saved book
//       // Example: id, title, author, etc.
//     }
//   }
// `;

// // GraphQL mutation to delete a saved book for a logged in user
// export const DELETE_BOOK = gql`
//   mutation DeleteBook($bookId: ID!) {
//     deleteBook(id: $bookId)
//   }
// `;

// // GraphQL query to search Google Books API
// export const SEARCH_GOOGLE_BOOKS = gql`
//   query SearchGoogleBooks($query: String!) {
//     searchGoogleBooks(query: $query) {
//       // Include the fields you want to retrieve for each book from the Google Books API
//       // Example: id, title, authors, etc.
//     }
//   }
// `;

// route to get logged in user's info (needs the token)
export const getMe = (token) => {
  return fetch("/api/users/me", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

// save book data for a logged in user
export const saveBook = (bookData, token) => {
  return fetch("/api/users", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookData),
  });
};

// remove saved book data for a logged in user
export const deleteBook = (bookId, token) => {
  return fetch(`/api/users/books/${bookId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};
