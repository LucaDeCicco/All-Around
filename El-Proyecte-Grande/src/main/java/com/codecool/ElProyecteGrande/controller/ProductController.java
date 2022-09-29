package com.codecool.ElProyecteGrande.controller;


import com.codecool.ElProyecteGrande.enums.ProductType;
import com.codecool.ElProyecteGrande.model.products.Product;
import com.codecool.ElProyecteGrande.model.products.externalProducts.Hotel;
import com.codecool.ElProyecteGrande.model.products.ourProducts.CircuitProduct;
import com.codecool.ElProyecteGrande.model.products.ourProducts.ResortProduct;
import com.codecool.ElProyecteGrande.payload.ProductRequest;
import com.codecool.ElProyecteGrande.payload.externalProducts.HotelRequest;
import com.codecool.ElProyecteGrande.payload.ourProducts.CircuitRequest;
import com.codecool.ElProyecteGrande.payload.ourProducts.ResortRequest;
import com.codecool.ElProyecteGrande.repository.ProductDaoMem;
import com.codecool.ElProyecteGrande.repository.ProductsDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/")
public class ProductController {

    ProductsDao productsDao;

    public ProductController() {
    }

        @Autowired
    public ProductController(ProductsDao productsDao) {
        this.productsDao = productsDao;
    }

    @GetMapping()
    public String index(){
        return "homePage";
    }
//
//    @GetMapping("allProducts")
//    public String getAllProducts(){
//        return "All products.";
//    }
//
//    @PostMapping("postProduct")
//    public String postProduct(@RequestBody ProductRequest product) {
//        return (product.getName() + " " + product.getPrice() + " successfully added!");
//    }

    @PostMapping("/addCircuitProduct")
    public String addCircuitProduct(@RequestBody CircuitRequest product) throws ParseException {
        SimpleDateFormat formatter1=new SimpleDateFormat("dd/MM/yyyy");
        Date date=formatter1.parse(product.getDepartureDate());
        CircuitProduct newProduct = new CircuitProduct(product.getId(),product.getProductType(),
                product.getDescription(),product.getPrice(),product.getLocation(),product.getItinerary(),
                product.getRemainingTickets(),date, product.getDays(), product.getCountries());
        productsDao.add(newProduct);
        return "circuit added successfully";
    }

    @PostMapping("/addResortProduct")
    public String addResortProduct(@RequestBody ResortRequest product) throws ParseException {
        SimpleDateFormat formatter1=new SimpleDateFormat("dd/MM/yyyy");
        Date date=formatter1.parse(product.getDepartureDate());
        ResortProduct newProduct = new ResortProduct(product.getId(), product.getProductType(), product.getDescription(),
                product.getPrice(), product.getCountry());
        productsDao.add(newProduct);
        return "resort added successfully";
    }

    @PostMapping("/addHotelProduct")
    public String addHotelProduct(@RequestBody HotelRequest product){
        Hotel newProduct = new Hotel(product.getId(), product.getProductType(), product.getDescription(), product.getPrice(),
                product.getCountry(), product.getLocation(), product.getUrl());
        productsDao.add(newProduct);
        return "hotel added successfully";
    }


    @GetMapping("allMemProducts")
    public List<Product> getAllMemProducts(){
        return productsDao.getAll();
    }

}
