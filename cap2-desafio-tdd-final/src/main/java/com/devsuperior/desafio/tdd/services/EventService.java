package com.devsuperior.desafio.tdd.services;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.desafio.tdd.dto.EventDTO;
import com.devsuperior.desafio.tdd.entities.City;
import com.devsuperior.desafio.tdd.entities.Event;
import com.devsuperior.desafio.tdd.repositories.CityRepository;
import com.devsuperior.desafio.tdd.repositories.EventRepository;
import com.devsuperior.desafio.tdd.services.exceptions.ResourceNotFoundException;

@Service
public class EventService {

	@Autowired
	private EventRepository repository;

	@Autowired
	private CityRepository cityRepository;

	@Transactional
	public EventDTO update(Long id, EventDTO dto) {
		try {
			Event entity = repository.getOne(id);
			copyDTOToEntity(dto, entity);
			entity = repository.save(entity);
			return new EventDTO(entity);

		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id Not Found " + id);
		}
	}

	private void copyDTOToEntity(EventDTO dto, Event entity) {
		entity.setName(dto.getName());
		entity.setDate(dto.getDate());
		entity.setUrl(dto.getUrl());

		City city = cityRepository.getOne(dto.getCityId());
		entity.setCity(city);
	}
}
