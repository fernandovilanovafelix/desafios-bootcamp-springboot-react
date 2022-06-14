package com.devsuperior.desafio.tdd.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.desafio.tdd.entities.Event;

public interface EventRepository extends JpaRepository<Event, Long> {

}
