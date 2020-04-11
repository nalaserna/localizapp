package servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import entities.Evento;
import entities.Poligono;
import entities.Punto;
import entities.Usuario;
import repositories.EventoRepository;
import repositories.PuntoRepository;
import repositories.PoligonoRepository;
import repositories.UsuarioRepository;

@RestController
public class PoligonoController {

	@Autowired
	private PoligonoRepository poligonoRepositoryDAO;

	@Autowired
	private UsuarioRepository usuarioRepositoryDAO;

	@Autowired
	private EventoRepository eventoRepositoryDAO;

	@CrossOrigin
	@RequestMapping(path = "/getAllPoligonos", method = RequestMethod.GET)
	public Iterable<Poligono> getAllPoligonos() {

		Iterable<Poligono> findAll = poligonoRepositoryDAO.findAll();
		return findAll;
	}

	
	@CrossOrigin
	@RequestMapping("/getPoligonosByUsuario")
	public Iterable<Poligono> getPoligonosByUsuario(@RequestParam String id) {
		Usuario usuario = usuarioRepositoryDAO.findById(Integer.parseInt(id));
		return poligonoRepositoryDAO.findByUsuario(usuario);
	}

	@CrossOrigin
	@RequestMapping("/getPoligonoByEvento")
	public Iterable<Poligono> getPoligonoByEvento(@RequestParam String id) {
		Evento evento = eventoRepositoryDAO.findById(Integer.parseInt(id));
		return poligonoRepositoryDAO.findByEvento(evento);
	}

	@CrossOrigin
	@RequestMapping("/getPoligonoByNombre")
	public Iterable<Poligono> getPoligonoByNombre(@RequestParam String nombre) {
		return poligonoRepositoryDAO.findByNombre(nombre);
	}

/*	@CrossOrigin
	@RequestMapping("/getPoligonoByPolygon")
	public Iterable<Punto> getPoligonoByPolygon(@RequestParam String coord) {
		byte[] coordenadas = coord.getBytes();
		return poligonoRepositoryDAO.findByCoordenadas(coordenadas);
	}*/

	@CrossOrigin
	@RequestMapping("/getPoligonoById")
	public Poligono getPoligonoById(@RequestParam String id) {
		return poligonoRepositoryDAO.findById(Integer.parseInt(id));
	}

}
