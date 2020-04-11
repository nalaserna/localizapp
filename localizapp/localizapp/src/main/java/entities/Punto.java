package entities;
// Generated 11/04/2020 11:08:44 AM by Hibernate Tools 4.3.5.Final

import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * Punto generated by hbm2java
 */
@Entity
@Table(name = "punto", catalog = "localizapp")
public class Punto implements java.io.Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idpunto;
	
	@OneToOne(fetch = FetchType.EAGER)
	private Evento evento;
	
	@OneToOne(fetch = FetchType.EAGER)
	private Usuario usuario;
	
	private String nombre;
	private byte[] coordenadas;


	public Punto() {
	}

	public Punto(int idpunto, Evento evento, Usuario usuario, String nombre, byte[] coordenadas) {
		this.idpunto = idpunto;
		this.evento = evento;
		this.usuario = usuario;
		this.nombre = nombre;
		this.coordenadas = coordenadas;
	}



	/*@Column(name = "idpunto", unique = true, nullable = false)*/
	public int getIdpunto() {
		return this.idpunto;
	}

	public void setIdpunto(int idpunto) {
		this.idpunto = idpunto;
	}

	/*@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "evento_idevento", nullable = false)*/
	@Column(name = "id_evento", nullable = false)
	public Evento getEvento() {
		return this.evento;
	}

	public void setEvento(Evento evento) {
		this.evento = evento;
	}

	/*@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "usuario_idusuario", nullable = false)*/
	@Column(name="id_usuario", nullable = false)
	public Usuario getUsuario() {
		return this.usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	@Column(name = "nombre", nullable = false, length = 45)
	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	@Column(name = "coordenadas", nullable = false)
	public byte[] getCoordenadas() {
		return this.coordenadas;
	}

	public void setCoordenadas(byte[] coordenadas) {
		this.coordenadas = coordenadas;
	}


}