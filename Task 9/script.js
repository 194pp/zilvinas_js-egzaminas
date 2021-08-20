/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
- title
- director
- budget
Metodas: 
- wasExpensive() - jeigu filmo "budget" bus daugiau nei 100 000 000 (šimtas milijonų), tada gražins true, kitu atveju - false.
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive() {
    return this.budget > 100000000;
  }
}

const movie1 = new Movie("Cheap Life", "Money Savington", 100);
const movie2 = new Movie("Interstellar 2", "Jeff Bezos", 999999999);

console.log(movie1.wasExpensive());
console.log(movie2.wasExpensive());