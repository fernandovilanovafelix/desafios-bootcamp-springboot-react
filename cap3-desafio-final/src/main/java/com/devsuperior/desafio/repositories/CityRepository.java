package com.devsuperior.desafio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.desafio.entities.City;

public interface CityRepository extends JpaRepository<City, Long> {

}
