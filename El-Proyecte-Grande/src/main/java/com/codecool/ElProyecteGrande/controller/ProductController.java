package com.codecool.ElProyecteGrande.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class ProductController {

    @GetMapping("allProducts")
    public String getAllProducts(){
        return "All products.";
    }
}
