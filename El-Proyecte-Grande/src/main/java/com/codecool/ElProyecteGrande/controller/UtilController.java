package com.codecool.ElProyecteGrande.controller;


import com.codecool.ElProyecteGrande.enums.Country;
import com.codecool.ElProyecteGrande.enums.ProductType;
import com.codecool.ElProyecteGrande.model.products.Product;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/util")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
public class UtilController {

    @GetMapping("/countries")
    public List<Country> getAllHotelProducts(){
        List<Country> result = new ArrayList<>();
        for (Country value : Country.values()) {
            result.add(value);
        }
        return result;
    }
}
