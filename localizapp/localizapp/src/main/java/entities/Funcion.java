package entities;
// Generated 11/04/2020 11:08:44 AM by Hibernate Tools 4.3.5.Final

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * Funcion generated by hbm2java
 */
@Entity
@Table(name = "funcion", catalog = "localizapp")
public class Funcion implements java.io.Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idfuncion;
	
	@OneToOne(fetch = FetchType.EAGER)
	private Poligono poligono;
	
	@OneToOne(fetch = FetchType.EAGER)
	private Punto punto;
	
	private String horaInicio;
	private String horaFin;
	private String nombre;
	private String descripcion;

	public Funcion() {
	}

	public Funcion(int idfuncion, String horaInicio, String horaFin, String nombre, String descripcion) {
		this.idfuncion = idfuncion;
		this.horaInicio = horaInicio;
		this.horaFin = horaFin;
		this.nombre = nombre;
		this.descripcion = descripcion;
	}

	public Funcion(int idfuncion, Poligono poligono, Punto punto, String horaInicio, String horaFin, String nombre,
			String descripcion) {
		this.idfuncion = idfuncion;
		this.poligono = poligono;
		this.punto = punto;
		this.horaInicio = horaInicio;
		this.horaFin = horaFin;
		this.nombre = nombre;
		this.descripcion = descripcion;
	}

	/*@Column(name = "idfuncion", unique = true, nullable = false)*/
	public int getIdfuncion() {
		return this.idfuncion;
	}

	public void setIdfuncion(int idfuncion) {
		this.idfuncion = idfuncion;
	}

	@Column(name = "id_poligono", nullable=true)
	public Poligono getPoligono() {
		return this.poligono;
	}

	public void setPoligono(Poligono poligono) {
		this.poligono = poligono;
	}

	@Column(name = "id_punto", nullable=true)
	public Punto getPunto() {
		return this.punto;
	}

	public void setPunto(Punto punto) {
		this.punto = punto;
	}

	@Column(name = "hora_inicio", nullable = false, length = 5)
	public String getHoraInicio() {
		return this.horaInicio;
	}

	public void setHoraInicio(String horaInicio) {
		this.horaInicio = horaInicio;
	}

	@Column(name = "hora_fin", nullable = false, length = 5)
	public String getHoraFin() {
		return this.horaFin;
	}

	public void setHoraFin(String horaFin) {
		this.horaFin = horaFin;
	}

	@Column(name = "nombre", nullable = false, length = 65)
	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	@Column(name = "descripcion", nullable = false, length = 200)
	public String getDescripcion() {
		return this.descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

}