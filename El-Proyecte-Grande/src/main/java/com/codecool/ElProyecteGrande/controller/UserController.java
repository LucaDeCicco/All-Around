package com.codecool.ElProyecteGrande.controller;


import com.codecool.ElProyecteGrande.payload.ProductRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @GetMapping("history/{userId}")
    public String getUserHistory(@PathVariable(name="userId") int id){
        return "History of user with id = "+id;
    }

    @PostMapping("/addToHistory/{userId}")
    public String addToHistory(@RequestBody ProductRequest product, @PathVariable(name = "userId") int id){
        return product.getName()+" "+product.getPrice()+" "+"Added to userHistory with userId = "+ id;
    }
}
