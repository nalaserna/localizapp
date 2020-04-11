package repositories;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import entities.Evento;
import entities.Punto;
import entities.Usuario;

@Repository
public interface PuntoRepository extends CrudRepository<Usuario, Long> {
	
	public Punto findById(int id);
	
	public List<Punto> findByUsuario(Usuario usuario);
	
	public List<Punto> findByEvento(Evento evento);
	
	public List<Punto> findByNombre(String nombre);
	
	public List<Punto> findByCoordenadas(Byte coordenadas);
	
}