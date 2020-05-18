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
import entities.Funcion;
import entities.Poligono;
import entities.Punto;
import repositories.EventoRepository;
import repositories.FuncionRepository;
import repositories.PoligonoRepository;
import repositories.PuntoRepository;

@RestController
public class FuncionController {
	
	@Autowired
	private FuncionRepository funcionRepositoryDAO;
	
	@Autowired
	private PuntoRepository puntoRepositoryDAO;
	
	@Autowired
	private PoligonoRepository poligonoRepositoryDAO;
	
	@Autowired
	private EventoRepository eventoRepositoryDAO;
	
	@CrossOrigin
	@RequestMapping(path="/getAllFunciones", method=RequestMethod.GET)
	public Iterable<Funcion> getAllFunciones () {
		
		Iterable<Funcion> findAll = funcionRepositoryDAO.findAll();
		return findAll;
	}
	
	@CrossOrigin
	@RequestMapping(path="/newFuncion", method=RequestMethod.POST) 
	public @ResponseBody String newFuncion
	(@RequestParam String nombre, @RequestParam String fechaInicio, 
	@RequestParam String fechaFin, @RequestParam String horaInicio, @RequestParam String horaFin,
	@RequestParam String descripcion, @RequestParam String poligonoId, 
	@RequestParam String puntoId) throws ParseException {
		
		Punto punto = puntoRepositoryDAO.findById(Integer.parseInt(puntoId));
		Poligono poligono = poligonoRepositoryDAO.findById(Integer.parseInt(poligonoId));
		Date fechaIn = new SimpleDateFormat("yyyy-MM-dd").parse(fechaInicio); 
		Date fechaFi = new SimpleDateFormat("yyyy-MM-dd").parse(fechaFin);
		Funcion nuevaFuncion = new Funcion();
		nuevaFuncion.setDescripcion(descripcion);
		nuevaFuncion.setNombre(nombre);
		nuevaFuncion.setFechaFin(fechaFi);
		nuevaFuncion.setFechaInicio(fechaIn);
		nuevaFuncion.setHoraInicio(horaInicio);
		nuevaFuncion.setHoraFin(horaFin);
		nuevaFuncion.setPoligono(poligono);
		nuevaFuncion.setPunto(punto);
		funcionRepositoryDAO.save(nuevaFuncion);
		
		return "Nueva Funcion Guardada";
		
	}
	
	@CrossOrigin
	@RequestMapping(path="/updateFuncion", method=RequestMethod.POST) 
	public @ResponseBody String updateFuncion
	(@RequestParam String funcionId, @RequestParam String nombre, @RequestParam String fechaInicio, 
	@RequestParam String fechaFin, @RequestParam String horaInicio, @RequestParam String horaFin,
	@RequestParam String descripcion, @RequestParam String poligonoId, 
	@RequestParam String puntoId) throws ParseException {
		
		Funcion funcion = funcionRepositoryDAO.findById(Integer.parseInt(funcionId));
		Punto punto = puntoRepositoryDAO.findById(Integer.parseInt(puntoId));
		Poligono poligono = poligonoRepositoryDAO.findById(Integer.parseInt(poligonoId));
		Date fechaIn = new SimpleDateFormat("yyyy-MM-dd").parse(fechaInicio); 
		Date fechaFi = new SimpleDateFormat("yyyy-MM-dd").parse(fechaFin);
		
		funcion.setDescripcion(descripcion);
		funcion.setNombre(nombre);
		funcion.setFechaFin(fechaFi);
		funcion.setFechaInicio(fechaIn);
		funcion.setHoraInicio(horaInicio);
		funcion.setHoraFin(horaFin);
		funcion.setPoligono(poligono);
		funcion.setPunto(punto);
		funcionRepositoryDAO.save(funcion);
		
		return "Nueva Funcion Guardada";
		
	}
	
	
	
	@CrossOrigin
	@RequestMapping(path="/deleteFuncion", method=RequestMethod.POST) 
	public @ResponseBody String deleteFuncion
	(@RequestParam String id) {
		
		Funcion funcion = funcionRepositoryDAO.findById(Integer.parseInt(id));
		funcionRepositoryDAO.delete(funcion);
		return "Funcion Eliminada";
		
	}
	
	@CrossOrigin
	@RequestMapping ("/getFuncionById")
	public Funcion getFuncionById (@RequestParam String id) {
		return funcionRepositoryDAO.findById(Integer.parseInt(id));
	}
	
	@CrossOrigin
	@RequestMapping ("/getFuncionByFechaInicio")
	public Iterable<Funcion> getFuncionByFechaInicio(@RequestParam String fecha) throws ParseException {
		Date fechaInicio = new SimpleDateFormat("yyyy-MM-dd").parse(fecha); 
		return funcionRepositoryDAO.findByFechaInicio(fechaInicio);
	}
	
	@CrossOrigin
	@RequestMapping ("/getFuncionByFechaFin")
	public Iterable<Funcion> getFuncionByFechaFin(@RequestParam String fecha) throws ParseException {
		Date fechaFin = new SimpleDateFormat("yyyy-MM-dd").parse(fecha); 
		return funcionRepositoryDAO.findByFechaFin(fechaFin);
	}
	
	@CrossOrigin
	@RequestMapping ("/getFuncionByHoraInicio")
	public Iterable<Funcion> getFuncionByHoraInicio(@RequestParam String hora) {
		return funcionRepositoryDAO.findByHoraInicio(hora);
	}

	@CrossOrigin
	@RequestMapping ("/getFuncionByHoraFin")
	public Iterable<Funcion> getFuncionByHoraFin(@RequestParam String hora) {
		return funcionRepositoryDAO.findByHoraFin(hora);
	}
	
	@CrossOrigin
	@RequestMapping ("/getFuncionByNombre")
	public Iterable<Funcion> getFuncionByNombre(@RequestParam String nombre) {
		return funcionRepositoryDAO.findByNombre(nombre);
	}
	
	@CrossOrigin
	@RequestMapping ("/getFuncionByPunto")
	public Iterable<Funcion> getFuncionByPunto(@RequestParam String id) {
		Punto punto = puntoRepositoryDAO.findById(Integer.parseInt(id));
		return funcionRepositoryDAO.findByPunto(punto);
	}
	
	@CrossOrigin
	@RequestMapping ("/getFuncionByPoligono")
	public Iterable<Funcion> getFuncionByPoligono(@RequestParam String id) {
		Poligono poligono = poligonoRepositoryDAO.findById(Integer.parseInt(id));
		return funcionRepositoryDAO.findByPoligono(poligono);
	}
	
	/*@CrossOrigin
	@RequestMapping ("/getFuncionByPoligonoAndFechaInicio")
	public Iterable<Funcion> getFuncionByPoligonoAndFechaInicio(@RequestParam String id, 
			@RequestParam) {
		Poligono poligono = poligonoRepositoryDAO.findById(Integer.parseInt(id));
		return funcionRepositoryDAO.findByPoligono(poligono);
	}
	*/
	
	@CrossOrigin
	@RequestMapping ("/getFuncionLikeNombre")
	public Iterable<Funcion> getFuncionLikeNombre(@RequestParam String nombre){
		return funcionRepositoryDAO.findByNombreContainsIgnoreCase(nombre);
	}

	
}
