package repositories;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import entities.Evento;
import entities.Poligono;
import entities.Punto;
import entities.Usuario;

@Repository
public interface PoligonoRepository extends CrudRepository<Poligono, Long> {
	
	public Poligono findById(int id);
	
	public List<Poligono> findByUsuario(Usuario usuario);
	
	public List<Poligono> findByEvento(Evento evento);
	
	public List<Poligono> findByNombre(String nombre);
	
	public List<Poligono> findByPolygon(Byte[] polygon);
	
}