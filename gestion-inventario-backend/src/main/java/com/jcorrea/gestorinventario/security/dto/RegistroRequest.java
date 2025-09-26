package com.jcorrea.gestorinventario.security.dto;

import com.jcorrea.gestorinventario.enums.RolEnum;
import lombok.Data;

import java.util.Set;

@Data
public class RegistroRequest {

    private String username;
    private String password;
    private Set<RolEnum> roles;

}
