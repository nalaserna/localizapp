package repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import entities.Usuario;

@Repository
public interface UsuarioRepository extends CrudRepository<Usuario, Long> {
	
	public Usuario findByIdusuario(int id);
	
	public List<Usuario> findByEsAdmin(Byte esAdmin);
	
	public Usuario findByCorreo(String correo);
	
}
