package com.devsuperior.desafio.tdd.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.desafio.tdd.dto.CityDTO;
import com.devsuperior.desafio.tdd.entities.City;
import com.devsuperior.desafio.tdd.repositories.CityRepository;
import com.devsuperior.desafio.tdd.services.exceptions.DatabaseException;
import com.devsuperior.desafio.tdd.services.exceptions.ResourceNotFoundException;

@Service
public class CityService {

	@Autowired
	private CityRepository repository;

	@Transactional(readOnly = true)
	public Page<CityDTO> findAll(PageRequest pageRequest) {
		Page<City> list = repository.findAll(pageRequest);
		return list.map(x -> new CityDTO(x));
	}

	@Transactional
	public CityDTO insert(CityDTO dto) {
		City entity = new City();
		entity.setName(dto.getName());
		entity = repository.save(entity);
		return new CityDTO(entity);
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not Found " + id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity Violation");
		}
	}
}
