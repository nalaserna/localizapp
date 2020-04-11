package repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

import entities.Funcion;
import entities.Poligono;
import entities.Punto;
import entities.Usuario;

@Repository
public interface FuncionRepository extends CrudRepository<Funcion, Long> {
	
	public Funcion findById(int id);
	
	public List<Funcion> findByPunto(Punto punto);
	
	public List<Funcion> findByNombre(String nombre);
	
	public List<Funcion> findByPoligono(Poligono poligono);
	
	public List<Funcion> findByFechaInicio(Date fechaInicio);
	
	public List<Funcion> findByFechaFin(Date fechaFin);
	
	public List<Funcion> findByHoraInicio(String horaInicio);
	
	public List<Funcion> findByHoraFin(String horaFin);
	
	
	
	
}
