const movies = [
  {
    _id: "5b515",
    title: "Terminator",
    genre: { _id: "5b515", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03",
    liked: true,
  },
  {
    _id: "5b516",
    title: "Die Hard",
    genre: { _id: "5b516", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03",
    liked: true,
  },
  {
    _id: "5b517",
    title: "Rab ne Bana di jodi",
    genre: { _id: "5b517", name: "Romance" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03",
    liked: true,
  },
  {
    _id: "5b518",
    title: "War",
    genre: { _id: "5b518", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03",
    liked: true,
  },
  {
    _id: "5b519",
    title: "Now You can see me",
    genre: { _id: "5b515", name: "Thriller" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03",
    liked: false,
  },
  {
    _id: "5b520",
    title: "Now You See Me 2",
    genre: { _id: "5b520", name: "Thriller" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03",
    liked: false,
  },
  {
    _id: "5b521",
    title: "Sherlock Holmes",
    genre: { _id: "5b521", name: "Thriller" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03",
    liked: false,
  },
  {
    _id: "5b522",
    title: "Son of Sardar",
    genre: { _id: "5b522", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03",
    liked: false,
  },
  {
    _id: "5b523",
    title: "Kaabil",
    genre: { _id: "5b523", name: "Romance" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03",
    liked: false,
  },
  {
    _id: "5b524",
    title: "The Blacklist",
    genre: { _id: "5b524", name: "Thriller" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03",
    liked: false,
  },
  {
    _id: "5b525",
    title: "Now You See Me 3",
    genre: { _id: "5b525", name: "Thriller" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03",
    liked: false,
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(m) {
  //return movies.find((m) => m._id === _id);
}
