package com.codecool.ElProyecteGrande.controller;


import com.codecool.ElProyecteGrande.enums.ProductType;
import com.codecool.ElProyecteGrande.model.products.Product;
import com.codecool.ElProyecteGrande.model.products.externalProducts.Hotel;
import com.codecool.ElProyecteGrande.model.products.ourProducts.CircuitProduct;
import com.codecool.ElProyecteGrande.model.products.ourProducts.ResortProduct;
import com.codecool.ElProyecteGrande.payload.externalProducts.HotelRequest;
import com.codecool.ElProyecteGrande.payload.ourProducts.CircuitRequest;
import com.codecool.ElProyecteGrande.payload.ourProducts.ResortRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin
public class ProductController {


    public ProductController() {
    }



    @GetMapping()
    public String index(){
        return "homePage";
    }


    @PostMapping("/addCircuitProduct")
    public String addCircuitProduct(@RequestBody CircuitRequest product) throws ParseException {
        SimpleDateFormat formatter1=new SimpleDateFormat("dd/MM/yyyy");
        Date date=formatter1.parse(product.getDepartureDate());
        CircuitProduct newProduct = new CircuitProduct(product.getProductType(),
                product.getDescription(),product.getPrice(),product.getLocation(),product.getItinerary(),
                product.getRemainingTickets(),date, product.getDays(), product.getCountries());
        return "circuit added successfully"; //TODO
    }

    @PostMapping("/addResortProduct")
    public String addResortProduct(@RequestBody ResortRequest product) throws ParseException {
        SimpleDateFormat formatter1=new SimpleDateFormat("dd/MM/yyyy");
        Date date=formatter1.parse(product.getDepartureDate());
        ResortProduct newProduct = new ResortProduct(product.getId(), product.getProductType(), product.getDescription(),
                product.getPrice(), product.getLocation(), product.getItinerary(), product.getRemainingTickets(), date,
                product.getDays(), product.getCountry());
//        productsDao.add(newProduct);
        return "resort added successfully"; //TODO
    }

    @PostMapping("/addHotelProduct")
    public String addHotelProduct(@RequestBody HotelRequest product){
        return "hotel added successfully"; //TODO
    }


    @GetMapping("allMemProducts")
    public List<Product> getAllProducts(){
        return null;
    } //TODO

    @GetMapping("allMemCircuitProducts")
    public List<Product> getAllCircuitProducts(){
        return null; //TODO
    }

    @GetMapping("allMemResortProducts")
    public List<Product> getAllResortProducts(){
        List<Product> resortProducts = new ArrayList<>();
//        for (Product product : productsDao.getAll()) {
//            if (product.getProductType()==ProductType.RESORT){
//                resortProducts.add(product);
//            }
//        }
        return resortProducts; //TODO
    }

    @GetMapping("allMemHotelProducts")
    public List<Product> getAllHotelProducts(){
        List<Product> hotelProducts = new ArrayList<>();
//        for (Product product : productsDao.getAll()) {
//            if (product.getProductType()==ProductType.HOTEL){
//                hotelProducts.add(product);
//            }
//        }
        return hotelProducts; //TODO
    }

}
