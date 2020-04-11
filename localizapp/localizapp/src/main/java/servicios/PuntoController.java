package servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import entities.Evento;
import entities.Punto;
import entities.Usuario;
import repositories.EventoRepository;
import repositories.PuntoRepository;
import repositories.UsuarioRepository;

@RestController
public class PuntoController {
	
	@Autowired
	private UsuarioRepository usuarioRepositoryDAO;
	
	@Autowired
	private PuntoRepository puntoRepositoryDAO;
	
	@Autowired
	private EventoRepository eventoRepositoryDAO;
	
	@CrossOrigin
	@RequestMapping(path="/getAllPuntos", method=RequestMethod.GET)
	public Iterable<Punto> getAllPuntos () {
		
		Iterable<Punto> findAll = puntoRepositoryDAO.findAll();
		return findAll;
	}
	
	@CrossOrigin
	@RequestMapping ("/getPuntosByUsuario")
	public Iterable<Punto> getPuntosByUsuario (@RequestParam String id) {
		Usuario usuario = usuarioRepositoryDAO.findById(Integer.parseInt(id));
		return puntoRepositoryDAO.findByUsuario(usuario);
	}
	
	@CrossOrigin
	@RequestMapping ("/getPuntosByEvento")
	public Iterable<Punto> getPuntosByEvento (@RequestParam String id) {
		Evento evento = eventoRepositoryDAO.findById(Integer.parseInt(id));
		return puntoRepositoryDAO.findByEvento(evento);
	}
	
	@CrossOrigin
	@RequestMapping ("/getPuntoByNombre")
	public Iterable<Punto> getPuntoByNombre (@RequestParam String nombre) {
		return puntoRepositoryDAO.findByNombre(nombre);
	}
	
	@CrossOrigin
	@RequestMapping ("/getPuntoByCoordenadas")
	public Iterable<Punto> getPuntoByCoordenadas (@RequestParam String coord) {
		byte[] coordenadas = coord.getBytes();
		return puntoRepositoryDAO.findByCoordenadas(coordenadas);
	}
	
	@CrossOrigin
	@RequestMapping ("/getPuntoById")
	public Punto getPuntoById(@RequestParam String id) {
		return puntoRepositoryDAO.findById(Integer.parseInt(id));
	}

}
