package com.devsuperior.desafio.tdd.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.desafio.tdd.entities.City;

public interface CityRepository extends JpaRepository<City, Long> {

}
