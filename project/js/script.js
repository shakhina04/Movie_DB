/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Логан666",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};
/////////////////////////////////////////////
let promo__interactive_list = document.querySelector(".promo__interactive-list")
let promo__bg = document.querySelector(".promo__bg");
let promo__genre = document.querySelector(".promo__genre");
let promo__title = document.querySelector('.promo__title');
let promo__descr = document.querySelector('.promo__descr')
let imdb = document.querySelector('.imdb')
let reserch = document.querySelector('.reserch')
let genUl = document.querySelector('.genUl')
let promo__adv = document.querySelector(".promo__adv");
let imgRemove = document.querySelectorAll("img");

//////////////////// 1 //////////////////// 
for (let image of imgRemove) { image.remove(); }
//////////////////// 2 //////////////////// 
promo__genre.innerHTML = "драма";
//////////////////// 3 //////////////////// 
promo__bg.style.backgroundImage = "url(img/bg.jpg)";
//////////////////// 4 //////////////////// 
reload(movieDB.movies);

function reload(arr) {
  promo__interactive_list.innerHTML = ""
  movieDB.movies.sort()
  ChangeMovies(arr[0])

  for (let item of arr) {
    let li = document.createElement("li");
    let del = document.createElement("div");
    
    li.classList.add('promo__interactive-item')
    // li.innerHTML = item
    li.innerHTML = `. ${item.Title}`

    del.classList.add('delete')
    li.append(del)

    promo__interactive_list.append(li)

    li.onclick = () => {
        ChangeMovies(item)
    }
  }
}
/////////////////////////////////////////////
reload(movies);
function ChangeMovies(movie) {
  // li.innerHTML = ""
  promo__bg.style.backgroundImage = `url("${movie.Poster}")`
  promo__genre.innerHTML = movie.Genre
  promo__title.innerHTML = movie.Title
  promo__descr.innerHTML = movie.Plot
  imdb.innerHTML = `IMDb: ${movie.imdbRating}`
  reserch.innerHTML = `Кинопоиск: ${movie.Metascore}`
}

