"use client";

import { useEffect, useState } from "react";

type Props = {};

type Book = {
  id: number;
  title: string;
  author: string;
};

const Home = (props: Props) => {
  const [message, setMessage] = useState("");
  const [people, setPeople] = useState([]);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("/api/home/");
      let data = await response.json();
      setMessage(data.message);
      setPeople(data.people);

      response = await fetch("/api/data/");
      data = await response.json();
      setBooks(data.books);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-4">Message:</h1>
        <p className="mb-8">{message}</p>
        <h1 className="text-xl font-bold mb-4">People:</h1>
        <ul className="list-disc pl-5 mb-8">
          {people.map((person: string) => (
            <li key={person}>{person}</li>
          ))}
        </ul>
        <h1 className="text-xl font-bold mb-4">Books:</h1>
        <ul className="divide-y divide-gray-200">
          {books.map((book: Book) => (
            <li key={book.id} className="py-4">
              <p className="font-semibold">{book.title}</p>
              <p className="text-gray-600">{book.author}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
