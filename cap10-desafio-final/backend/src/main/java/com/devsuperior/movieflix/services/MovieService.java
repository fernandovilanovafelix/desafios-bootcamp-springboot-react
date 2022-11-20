package com.devsuperior.movieflix.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.repositories.GenreRepository;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService {

	@Autowired
	private MovieRepository repository;

	@Autowired
	private GenreRepository genreRepository;

	@Autowired
	private ReviewService reviewService;

	@Transactional(readOnly = true)
	public Page<MovieDTO> findAllPaged(Long genreId, Pageable pageable) {
		Genre genre = (genreId == 0) ? null : genreRepository.getOne(genreId);
		Page<Movie> page = repository.find(genre, pageable);
		return page.map(x -> new MovieDTO(x));
	}

	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Optional<Movie> obj = repository.findById(id);
		Movie entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity Not Found"));
		return new MovieDTO(entity);
	}

	@Transactional(readOnly = true)
	public List<ReviewDTO> findMovieReviews(Long id) {
		Optional<Movie> obj = repository.findById(id);
		Movie entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity Not Found"));
		return reviewService.findByMovieId(entity.getId());
	}

	@Transactional
	public MovieDTO insert(MovieDTO dto) {
		Movie entity = new Movie();
		copyDTOToEntity(dto, entity);
		entity = repository.save(entity);
		return new MovieDTO(entity);
	}

	private void copyDTOToEntity(MovieDTO dto, Movie entity) {
		entity.setTitle(dto.getTitle());
		entity.setSubTitle(dto.getSubTitle());
		entity.setYear(dto.getYear());
		entity.setImgUrl(dto.getImgUrl());
		entity.setSynopsis(dto.getSynopsis());
		entity.setGenre(dto.getGenre());
	}
}
