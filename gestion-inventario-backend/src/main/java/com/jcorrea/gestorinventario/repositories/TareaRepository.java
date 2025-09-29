package com.jcorrea.gestorinventario.repositories;

import com.jcorrea.gestorinventario.entity.Tarea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TareaRepository extends JpaRepository<Tarea,Long> {

}