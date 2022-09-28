package com.codecool.ElProyecteGrande.controller;


import com.codecool.ElProyecteGrande.model.Product;
import com.codecool.ElProyecteGrande.payload.ProductRequest;
import com.codecool.ElProyecteGrande.repository.ProductDaoMem;
import com.codecool.ElProyecteGrande.repository.ProductsDao;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/")
public class ProductController {

    @GetMapping()
    public String index(){
        return "homePage";
    }

    @GetMapping("allProducts")
    public String getAllProducts(){
        return "All products.";
    }

    @PostMapping("postProduct")
    public String postProduct(@RequestBody ProductRequest product) {
        return (product.getName() + " " + product.getPrice() + " successfully added!");
    }

    @PostMapping("addProduct")
    public void addProduct(@RequestBody ProductRequest product){
        ProductsDao productDaoMem = com.codecool.ElProyecteGrande.repository.ProductDaoMem.getInstance();
        Product newProduct = new Product(product.getId(), product.getName(), product.getDescription(), product.getPrice());
        productDaoMem.add(newProduct);
    }

    @GetMapping("allMemProducts")
    public List<Product> getAllMemProducts(){
        return ProductDaoMem.getInstance().getAll();
    }

}
