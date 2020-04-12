package servicios;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
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
	@RequestMapping(path="/newPoligono", method=RequestMethod.POST) 
	public @ResponseBody String newPoligono
	(@RequestParam String nombre, @RequestParam String idEvento, 
	@RequestParam String idUsuario, @RequestParam String coordenadas, 
	@RequestParam String descripcion) throws ParseException {
		
		Evento evento = eventoRepositoryDAO.findById(Integer.parseInt(idEvento));
		Usuario usuario = usuarioRepositoryDAO.findByIdusuario(Integer.parseInt(idUsuario));
		byte[] coord = coordenadas.getBytes();
		Poligono poligono = new Poligono();
		poligono.setNombre(nombre);
		poligono.setDescripcion(descripcion);
		poligono.setEvento(evento);
		poligono.setPolygon(coord);
		poligonoRepositoryDAO.save(poligono);
		
		return "Nuevo Poligono Guardado";
		
	}
	
	@CrossOrigin
	@RequestMapping(path="/updatePoligono", method=RequestMethod.POST) 
	public @ResponseBody String updatePoligono
	(@RequestParam String idPoligono, @RequestParam String nombre, @RequestParam String idEvento, 
	@RequestParam String idUsuario, @RequestParam String coordenadas, 
	@RequestParam String descripcion) throws ParseException {
		Poligono poligono = poligonoRepositoryDAO.findById(Integer.parseInt(idPoligono));
		Evento evento = eventoRepositoryDAO.findById(Integer.parseInt(idEvento));
		Usuario usuario = usuarioRepositoryDAO.findByIdusuario(Integer.parseInt(idUsuario));
		byte[] coord = coordenadas.getBytes();
		poligono.setNombre(nombre);
		poligono.setDescripcion(descripcion);
		poligono.setEvento(evento);
		poligono.setPolygon(coord);
		poligonoRepositoryDAO.save(poligono);
		
		return "Poligono Actualizado";
		
	}
	
	@CrossOrigin
	@RequestMapping("/getPoligonosByUsuario")
	public Iterable<Poligono> getPoligonosByUsuario(@RequestParam String id) {
		Usuario usuario = usuarioRepositoryDAO.findByIdusuario(Integer.parseInt(id));
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
