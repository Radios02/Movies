import movies from "../data/movies.js"

export const getAllMovies = (req, res) => { 
    res.status(200).json(movies)
}

export const getMovieById = (req, res
    ) => {
    const id = req.params.id
    if (id < 0 || id >= movies.length) {
        return res.status(404).json({message: 'Film nem található'})
    }
    res.status(200).json(movies[id])
}

export const createMovie = (req, res) => {
    const {title, director, year, oscar} = req.body
    if (!title || !director || !year || !oscar) {
        return res.status(400).json({message: 'Hiányzó adatok'})
    }
    const newMovie = {title, director, year, oscar}
    movies.push(newMovie)
    res.status(201).json(newMovie)
}

export const updateMovie = (req, res) => {
    const id = req.params.id
    if (id < 0 || id >= movies.length) {
        return res.status(404).json({message: 'Film nem található'})
    }
    const {title, director, year, oscar} = req.body
    if (!title || !director || !year || !oscar) {
        return res.status(400).json({message: 'Hiányzó adatok'})
    }
    movies[id] = {title, director, year, oscar}
    res.status(200).json(movies[id])
}

export const deleteMovie = (req, res) => {
    const id = req.params.id
    if (id < 0 || id >= movies.length) {
        return res.status(404).json({message: 'Film nem található'})
    }
    movies.splice(id, 1)
    res.status(200).json({message: 'A film törölve'})
}