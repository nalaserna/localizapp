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
import entities.Usuario;
import repositories.EventoRepository;
import repositories.PuntoRepository;
import repositories.UsuarioRepository;

@RestController
public class EventoController {
	
	@Autowired
	private EventoRepository eventoRepositoryDAO;

	@CrossOrigin
	@RequestMapping(path="/getAllEventos", method=RequestMethod.GET)
	public Iterable<Evento> getAllEventos () {
		
		Iterable<Evento> findAll = eventoRepositoryDAO.findAll();
		return findAll;
	}
	
	@CrossOrigin
	@RequestMapping(path="/newEvento", method=RequestMethod.POST) 
	public @ResponseBody String newEvento
	(@RequestParam String nombre, @RequestParam String fechaInicio, 
	@RequestParam String fechaFin, @RequestParam String horaInicio, @RequestParam String horaFin,
	@RequestParam String descripcion) throws ParseException {
		
		Date fechaIn = new SimpleDateFormat("yyyy-MM-dd").parse(fechaInicio); 
		Date fechaFi = new SimpleDateFormat("yyyy-MM-dd").parse(fechaFin);
		Evento nuevoEvento = new Evento();
		nuevoEvento.setNombre(nombre);
		nuevoEvento.setFechaInicio(fechaIn);
		nuevoEvento.setFechaFin(fechaFi);
		nuevoEvento.setDescripcion(descripcion);
		nuevoEvento.setHoraInicio(horaInicio);
		nuevoEvento.setHoraFin(horaFin);
		eventoRepositoryDAO.save(nuevoEvento);
		
		return "Nuevo Evento Guardado";
		
	}
	
	@CrossOrigin
	@RequestMapping(path="/updateEvento", method=RequestMethod.POST) 
	public @ResponseBody String updateEvento
	(@RequestParam String id, @RequestParam String nombre, @RequestParam String fechaInicio, 
	@RequestParam String fechaFin, @RequestParam String horaInicio, @RequestParam String horaFin,
	@RequestParam String descripcion) throws ParseException {
		
		Date fechaIn = new SimpleDateFormat("yyyy-MM-dd").parse(fechaInicio); 
		Date fechaFi = new SimpleDateFormat("yyyy-MM-dd").parse(fechaFin);
		Evento evento = eventoRepositoryDAO.findById(Integer.parseInt(id));
		evento.setNombre(nombre);
		evento.setFechaInicio(fechaIn);
		evento.setFechaFin(fechaFi);
		evento.setDescripcion(descripcion);
		evento.setHoraInicio(horaInicio);
		evento.setHoraFin(horaFin);
		eventoRepositoryDAO.save(evento);
		
		return "Evento Actualizado";
		
	}
	
	@CrossOrigin
	@RequestMapping(path="/deleteEvento", method=RequestMethod.POST) 
	public @ResponseBody String deleteEvento
	(@RequestParam String id) {
		
		Evento evento = eventoRepositoryDAO.findById(Integer.parseInt(id));
		eventoRepositoryDAO.delete(evento);
		return "Evento Eliminado";
		
	}
	
	@CrossOrigin
	@RequestMapping ("/getEventoById")
	public Evento getEventoById (@RequestParam String id) {
		return eventoRepositoryDAO.findById(Integer.parseInt(id));
	}
	
	@CrossOrigin
	@RequestMapping ("/getEventoByFechaInicio")
	public Iterable<Evento> getEventoByFechaInicio(@RequestParam String fecha) throws ParseException {
		Date fechaInicio = new SimpleDateFormat("yyyy-MM-dd").parse(fecha); 
		return eventoRepositoryDAO.findByFechaInicio(fechaInicio);
	}
	
	@CrossOrigin
	@RequestMapping ("/getEventoByFechaFin")
	public Iterable<Evento> getEventoByFechaFin(@RequestParam String fecha) throws ParseException {
		Date fechaFin = new SimpleDateFormat("yyyy-MM-dd").parse(fecha); 
		return eventoRepositoryDAO.findByFechaFin(fechaFin);
	}
	
	@CrossOrigin
	@RequestMapping ("/getEventoByHoraInicio")
	public Iterable<Evento> getEventoByHoraInicio(@RequestParam String hora) {
		return eventoRepositoryDAO.findByHoraInicio(hora);
	}

	@CrossOrigin
	@RequestMapping ("/getEventoByHoraFin")
	public Iterable<Evento> getEventoByHoraFin(@RequestParam String hora) {
		return eventoRepositoryDAO.findByHoraFin(hora);
	}
	
	@CrossOrigin
	@RequestMapping ("/getEventoByNombre")
	public Evento getEventoByNombre(@RequestParam String nombre) {
		return eventoRepositoryDAO.findByNombre(nombre);
	}
	

	
}
