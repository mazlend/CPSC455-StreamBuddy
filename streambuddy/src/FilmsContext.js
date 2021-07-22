import React from 'react';
import { featuredMovieList } from "./featuredMovieList";

const initialMovieList = featuredMovieList;

export const FilmContext = React.createContext(initialMovieList);