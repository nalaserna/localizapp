package servicios;

import java.text.ParseException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import entities.Usuario;
import repositories.UsuarioRepository;

@RestController
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository usuarioRepositoryDAO;
	
	@CrossOrigin
	@RequestMapping(path="/getAllUsers", method=RequestMethod.GET)
	public Iterable<Usuario> getAllUsers () {
		
		Iterable<Usuario> findAll = usuarioRepositoryDAO.findAll();
		return findAll;
	}
	
	@CrossOrigin
	@RequestMapping(path="/register", method=RequestMethod.POST) 
	public @ResponseBody String addUsuario
	(@RequestParam String nombre, @RequestParam String apellido, 
	@RequestParam String correo, @RequestParam String password) {
		
		Usuario nuevoUsuario = new Usuario();
		nuevoUsuario.setNombre(nombre);
		nuevoUsuario.setApellido(apellido);
		nuevoUsuario.setCorreo(correo);
		nuevoUsuario.setPassword(password);
		nuevoUsuario.setEsAdmin((byte) 0);
		usuarioRepositoryDAO.save(nuevoUsuario);
		return "Usuario Guardado";
		
	}
	
	@CrossOrigin
	@RequestMapping(path="/registerAdmin", method=RequestMethod.POST) 
	public @ResponseBody String addAdmin
	(@RequestParam String nombre, @RequestParam String apellido, 
	@RequestParam String correo, @RequestParam String password) {
		
		Usuario nuevoUsuario = new Usuario();
		nuevoUsuario.setNombre(nombre);
		nuevoUsuario.setApellido(apellido);
		nuevoUsuario.setCorreo(correo);
		nuevoUsuario.setPassword(password);
		nuevoUsuario.setEsAdmin((byte) 1);
		usuarioRepositoryDAO.save(nuevoUsuario);
		return "Admin Guardado";
		
	}
	
	@CrossOrigin
	@RequestMapping(path="/deleteUsuario", method=RequestMethod.POST) 
	public @ResponseBody String deleteUsuario
	(@RequestParam String id) {
		
		Usuario usuario = usuarioRepositoryDAO.findById(Integer.parseInt(id));
		usuarioRepositoryDAO.delete(usuario);
		return "Usuario Eliminado";
		
	}
	
	@CrossOrigin
	@RequestMapping(path="/deleteAdmin", method=RequestMethod.POST) 
	public @ResponseBody String deleteAdmin
	(@RequestParam String id) {
		
		Usuario admin = usuarioRepositoryDAO.findById(Integer.parseInt(id));
		usuarioRepositoryDAO.delete(admin);
		return "Admin Eliminado";
		
	}
	

	
	@CrossOrigin
	@RequestMapping (path="/getAllAdmins", method=RequestMethod.GET)
	public Iterable<Usuario> getAllAdmins() {
		Iterable<Usuario> admins= usuarioRepositoryDAO.findByEsAdmin((byte)1);
		return admins;
	}
	
	@CrossOrigin
	@RequestMapping (path="/getAllUsuarios", method=RequestMethod.GET)
	public Iterable<Usuario> getAllUsuarios() {
		Iterable<Usuario> usuarios= usuarioRepositoryDAO.findByEsAdmin((byte)0);
		return usuarios;
	}
	
	@CrossOrigin
	@RequestMapping ("/getUsuarioById")
	public Usuario getUsuarioById (@RequestParam String id) {
		return usuarioRepositoryDAO.findById(Integer.parseInt(id));
		
	}
	
	@CrossOrigin
	@RequestMapping ("/getUsuarioByEmail")
	public Usuario getUsuarioByEmail (@RequestParam String email) {
		return usuarioRepositoryDAO.findByCorreo(email);
	}
	

}
