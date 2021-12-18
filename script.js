'use strict';

document.body.style.background = '#333';

const personalMovieDB = {
	count: null,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	start: function() {
		while (personalMovieDB.count === "" || personalMovieDB.count == null || isNaN(personalMovieDB.count) || personalMovieDB.count > 30000) {
			personalMovieDB.count = +prompt('Сколько фильмов посмотрел?');
		}
	},
	detectPersonalLvl: function() {
		if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
			console.log('Просмотренно довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log('Вы классический зритель');
		} else if (personalMovieDB.count >= 30) {
			console.log('Киноман!')
		} else {
			console.log('Ошибка')
		}
	},
	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++) {
			let film, rate;
			while (film === "" || film == null || film == undefined || film.length > 10) {
				film = prompt('Последний просмотренный фильм?');	
			}

			while (rate === "" || rate == null || rate == undefined || isNaN(rate) || rate < 0 || rate > 10) {
				rate = prompt('Оценка?');
			}

			personalMovieDB.movies[film] = rate;
		}
	},
	writeGenres: function() {
		for (let i = 0; i < 1; i++) {
			let genre = prompt(`Введите жанры через запятую`).toLowerCase();
			if (genre === "" || genre == null) {
				console.log('Введены некорректные данные');
				i--;
			} else {
				personalMovieDB.genres = genre.split(', ');
				personalMovieDB.genres.sort();
			}
		}
		personalMovieDB.genres.forEach((item, z) => console.log(`Жанр ${z + 1} - ${item}`))

	},
	showMyDB: function() {
		personalMovieDB.privat ? console.log(personalMovieDB) : console.log('Database is privat');
	},
	toggleVisibleMyDB: function() {
		personalMovieDB.privat ? personalMovieDB.privat = false : personalMovieDB.privat = true;
	}

};


console.log(personalMovieDB)