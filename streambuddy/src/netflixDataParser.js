const xlsx = require("xlsx");
const fs = require("fs");

const workBook = xlsx.readFile('./netflix_movie_list.xlsx', {cellText: true});
const workSheet = workBook.Sheets['movies'];
const data = xlsx.utils.sheet_to_json(workSheet);


fs.writeFileSync('./netflixMovieList.json', JSON.stringify(data));