import BookCard from "./BookCard";

const BookGrid = () => {
  const books = [
    {
      id: "1",
      title: "Мастер и Маргарита",
      author: "Михаил Булгаков",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      cover:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      genre: "Классика",
      isBestseller: true,
    },
    {
      id: "2",
      title: "Преступление и наказание",
      author: "Фёдор Достоевский",
      price: 349,
      rating: 4.7,
      cover:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      genre: "Классика",
    },
    {
      id: "3",
      title: "Война и мир",
      author: "Лев Толстой",
      price: 499,
      originalPrice: 699,
      rating: 4.9,
      cover:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
      genre: "Классика",
      isNew: true,
    },
    {
      id: "4",
      title: "Евгений Онегин",
      author: "Александр Пушкин",
      price: 249,
      rating: 4.6,
      cover:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
      genre: "Поэзия",
    },
    {
      id: "5",
      title: "Анна Каренина",
      author: "Лев Толстой",
      price: 399,
      rating: 4.7,
      cover:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      genre: "Классика",
      isBestseller: true,
    },
    {
      id: "6",
      title: "Отцы и дети",
      author: "Иван Тургенев",
      price: 279,
      originalPrice: 349,
      rating: 4.5,
      cover:
        "https://images.unsplash.com/photo-1525538182201-02cd1909effb?w=300&h=400&fit=crop",
      genre: "Классика",
      isNew: true,
    },
  ];

  return (
    <section id="catalog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Популярные книги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Откройте для себя лучшие произведения классической и современной
            литературы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium">
            Показать больше книг
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookGrid;
