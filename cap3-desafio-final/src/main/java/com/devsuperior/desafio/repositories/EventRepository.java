package com.devsuperior.desafio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.desafio.entities.Event;

public interface EventRepository extends JpaRepository<Event, Long> {

}
