package com.codecool.ElProyecteGrande.controller;


import com.codecool.ElProyecteGrande.enums.ProductType;
import com.codecool.ElProyecteGrande.model.products.Product;
import com.codecool.ElProyecteGrande.model.products.externalProducts.Hotel;
import com.codecool.ElProyecteGrande.model.products.ourProducts.CircuitProduct;
import com.codecool.ElProyecteGrande.model.products.ourProducts.ResortProduct;
import com.codecool.ElProyecteGrande.payload.AddImageRequestTest;
import com.codecool.ElProyecteGrande.payload.externalProducts.HotelRequest;
import com.codecool.ElProyecteGrande.payload.ourProducts.CircuitRequest;
import com.codecool.ElProyecteGrande.payload.ourProducts.ResortRequest;
import com.codecool.ElProyecteGrande.service.ProductService;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.json.JsonMapper;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@RestController
@RequestMapping("/")
@CrossOrigin
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }


    @GetMapping()
    public String index(){
        return "homePage";
    }


    @PostMapping("/addImageApi")
    public String addImageApi(@RequestBody String addImage) throws ParseException {
        Pattern pattern = Pattern.compile("data:image.+?=");
//        Matcher matcher = pattern.matcher(addImage);
        ArrayList list = new ArrayList();
        //Matching the compiled pattern in the String
        Matcher matcher = pattern.matcher(addImage);
        while (matcher.find()) {
            list.add(matcher.group());
        }
//        for (Object o : list) {
//            System.out.println(String.valueOf(o));
//            System.out.println("/////////////////");
//            System.out.println("/////////////////");
//            System.out.println("/////////////////");
//            System.out.println("/////////////////");
//            System.out.println("/////////////////");
//        }
        return "circuit added successfully";
    }


    @PostMapping("/addCircuitApi")
    public String addCircuit(@RequestBody String product) throws ParseException, JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        CircuitRequest prod = objectMapper.readValue(product, CircuitRequest.class);
//        SimpleDateFormat formatter1=new SimpleDateFormat("dd/MM/yyyy");
//        Date date=formatter1.parse(prod.getDepartureDate());//TODO
        CircuitProduct circuitProduct = new CircuitProduct(ProductType.CIRCUIT, prod.getDescription(), prod.getPrice(), prod.getImages(), prod.getLocation(),
                prod.getItinerary(), prod.getRemainingTickets(), new Date(), prod.getDays(), prod.getCountries());
        productService.save(circuitProduct);
        return "circuit added successfully";
    }
    @PostMapping("/addCircuitProduct")
    public String addCircuitProduct(@RequestBody CircuitRequest product) throws ParseException {
        SimpleDateFormat formatter1=new SimpleDateFormat("dd/MM/yyyy");
        Date date=formatter1.parse(product.getDepartureDate());
        CircuitProduct newProduct = new CircuitProduct(product.getProductType(),
                product.getDescription(),product.getPrice(), product.getImages(), product.getLocation(),product.getItinerary(),
                product.getRemainingTickets(),date, product.getDays(), product.getCountries());
        productService.save(newProduct);
        return "circuit added successfully";
    }

    @PostMapping("/addResortProduct")
    public String addResortProduct(@RequestBody ResortRequest product) throws ParseException {
        SimpleDateFormat formatter1=new SimpleDateFormat("dd/MM/yyyy");
        Date date=formatter1.parse(product.getDepartureDate());
        ResortProduct newProduct = new ResortProduct(product.getProductType(), product.getDescription(),
                product.getPrice(), product.getImages(), product.getLocation(), product.getItinerary(), product.getRemainingTickets(), date,
                product.getDays(), product.getCountry());
        productService.save(newProduct);
        return "resort added successfully";
    }

    @PostMapping("/addHotelProduct")
    public String addHotelProduct(@RequestBody HotelRequest product){
        Hotel newProduct = new Hotel(product.getProductType(), product.getDescription(), product.getPrice(),
                product.getImages(),
                product.getCountry(), product.getLocation(), product.getUrl());
        productService.save(newProduct);
        return "hotel added successfully";
    }

    @GetMapping("allMemProducts")
    public List<Product> getAllProducts(){
        return productService.findAll();
    }

    @GetMapping("allMemCircuitProducts")
    public List<Product> getAllCircuitProducts(){
        List<Product> circuitProducts = new ArrayList<>();
        for (Product product : productService.findAll()) {
            if (product.getProductType()== ProductType.CIRCUIT){
                circuitProducts.add(product);
            }
        }
        return circuitProducts;
    }

    @GetMapping("allMemResortProducts")
    public List<Product> getAllResortProducts(){
        List<Product> resortProducts = new ArrayList<>();
        for (Product product : productService.findAll()) {
            if (product.getProductType()==ProductType.RESORT){
                resortProducts.add(product);
            }
        }
        return resortProducts;
    }

    @GetMapping("allMemHotelProducts")
    public List<Product> getAllHotelProducts(){
        List<Product> hotelProducts = new ArrayList<>();
        for (Product product : productService.findAll()) {
            if (product.getProductType()==ProductType.HOTEL){
                hotelProducts.add(product);
            }
        }
        return hotelProducts;
    }

}
