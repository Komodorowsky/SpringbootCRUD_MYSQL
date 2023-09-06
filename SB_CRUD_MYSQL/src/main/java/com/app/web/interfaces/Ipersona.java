package com.app.web.interfaces;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.app.web.modelo.Persona;

@Repository
public interface Ipersona extends CrudRepository <Persona,Integer>{

}
