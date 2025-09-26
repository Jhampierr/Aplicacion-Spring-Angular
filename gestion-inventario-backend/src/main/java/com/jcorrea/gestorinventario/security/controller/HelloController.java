package com.jcorrea.gestorinventario.security.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String index(){
        System.out.println("Hello world en el hello controller");
        return "Hello world desde hello controller";
    }

}
