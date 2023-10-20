package com.cursoJava.curso.Controllers;

import com.cursoJava.curso.DAO.UsuarioDAO;
import com.cursoJava.curso.DAO.UsuarioDAOImp;
import com.cursoJava.curso.Models.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UsuarioController{

    //sirve para hacer la inyeccion de dependencias
    @Autowired
    private UsuarioDAO usuarioDAO;
    @RequestMapping(value = "usuarios")
    public List<Usuario> getUsuario(){
        return usuarioDAO.getUsuario();
    }

    @RequestMapping(value = "get")
    public Usuario prueba(){
        Usuario usuario = new Usuario();
        usuario.setId(1);
        usuario.setNombre("Ricardo");
        usuario.setApellido("Alvarado");
        usuario.setEmail("ricardo@gmail.com");
        usuario.setTelefono("123456789");
        usuario.setPassword("contraseña");
        return usuario;

    }
}
