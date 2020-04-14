package repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

import entities.Evento;
import entities.Usuario;

@Repository
public interface EventoRepository extends CrudRepository<Evento, Long> {
	
	public Evento findById(int id);
	
	public Evento findByNombre(String nombre);
	
	public List<Evento> findByFechaInicio(Date fechaInicio);
	
	public List<Evento> findByFechaFin(Date fechaFin);
	
	public List<Evento> findByHoraInicio(String horaInicio);
	
	public List<Evento> findByHoraFin(String horaFin);
	
}
