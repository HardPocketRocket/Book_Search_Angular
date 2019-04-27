interface RootObject {
  book: Book;
}
interface Book {
  authors: AuthorInfo[];
  publishers: Publisher[];
  pagination: string;
  title: string;
  url: string;
  notes: string;
  number_of_pages: number;
  cover: Cover;
  key: string;
  publish_date: string;
  publish_places: Publisher[];
}

interface Cover {
  small: string;
  large: string;
  medium: string;
}

interface Publisher {
  name: string;
}

interface AuthorInfo {
  url: string;
  name: string;
}