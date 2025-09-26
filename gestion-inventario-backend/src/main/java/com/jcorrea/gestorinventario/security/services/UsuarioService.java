package com.jcorrea.gestorinventario.security.services;

import com.jcorrea.gestorinventario.entity.Rol;
import com.jcorrea.gestorinventario.entity.Usuario;
import com.jcorrea.gestorinventario.security.repository.RolRepository;
import com.jcorrea.gestorinventario.security.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.swing.*;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private RolRepository rolRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Usuario buscarPorNombre(String username){
        return usuarioRepository.findByUsername(username);
    }

    @Transactional
    public Usuario guardarUsuario(Usuario usuario){

            usuario.setUsername(usuario.getUsername());
            usuario.setRoles(usuario.getRoles());
            usuario.setPassword(usuario.getPassword());

            Usuario usuarioGuardado = usuarioRepository.save(usuario);

            for (Rol rol : usuario.getRoles()) {
                    rol.getUsuarios().add(usuarioGuardado);
            }
            return usuarioGuardado;

    }
}
