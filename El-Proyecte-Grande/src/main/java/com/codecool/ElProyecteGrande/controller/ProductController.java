package com.codecool.ElProyecteGrande.controller;


import com.codecool.ElProyecteGrande.enums.ProductType;
import com.codecool.ElProyecteGrande.model.products.Product;
import com.codecool.ElProyecteGrande.model.products.externalProducts.Hotel;
import com.codecool.ElProyecteGrande.model.products.ourProducts.CircuitProduct;
import com.codecool.ElProyecteGrande.model.products.ourProducts.ResortProduct;
import com.codecool.ElProyecteGrande.payload.externalProducts.HotelRequest;
import com.codecool.ElProyecteGrande.payload.ourProducts.CircuitRequest;
import com.codecool.ElProyecteGrande.payload.ourProducts.ResortRequest;
import com.codecool.ElProyecteGrande.service.ProductService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.PUT, RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST})
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping()
    public String index() {
        return "homePage";
    }

    @PostMapping("/addImageApi")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public String addImageApi(@RequestBody String addImage) throws ParseException {
        Pattern pattern = Pattern.compile("data:image.+?=");
        ArrayList list = new ArrayList();
        Matcher matcher = pattern.matcher(addImage);
        while (matcher.find()) {
            list.add(matcher.group());
        }
        return "circuit added successfully";
    }

    @PostMapping("/add-circuit")
    @PreAuthorize("hasRole('ADMIN')")
    public String addCircuit(@RequestBody String product) {
        System.out.println(product);
        ObjectMapper objectMapper = new ObjectMapper();
        CircuitRequest prod;
        try {
            prod = objectMapper.readValue(product, CircuitRequest.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

        CircuitProduct circuitProduct = new CircuitProduct(ProductType.CIRCUIT, prod.getDescription(), prod.getPrice(), prod.getImages(), prod.getLocation(),
                prod.getItinerary(), prod.getRemainingTickets(), prod.getDepartureDate(), prod.getDays(), prod.getCountries());
        productService.save(circuitProduct);
        return "circuit added successfully";
    }

    @GetMapping("allMemCircuitProducts")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public List<Product> getAllCircuitProducts() {
        List<Product> circuitProducts = new ArrayList<>();
        for (Product product : productService.findAll()) {
            if (product.getProductType() == ProductType.CIRCUIT) {
                circuitProducts.add(product);
            }
        }
        return circuitProducts;
    }

    @PostMapping("/add-resort")
    @PreAuthorize("hasRole('ADMIN')")
    public String addResortProduct(@RequestBody ResortRequest product) throws ParseException {
        ResortProduct newProduct = new ResortProduct(ProductType.RESORT, product.getDescription(),
                product.getPrice(), product.getImages(), product.getLocation(),"", product.getRemainingTickets(), product.getDepartureDate(),
                product.getDays(), product.getCountry());
        productService.save(newProduct);
        return "resort added successfully";
    }

    @GetMapping("allMemResortProducts")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public List<Product> getAllResortProducts() {
        List<Product> resortProducts = new ArrayList<>();
        for (Product product : productService.findAll()) {
            if (product.getProductType() == ProductType.RESORT) {
                resortProducts.add(product);
            }
        }
        return resortProducts;
    }









    /////////////////////////////////////////////////////////////////////////





    @PostMapping("/addHotelApi")
    public String addHotel(@RequestBody String product) throws ParseException, JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        HotelRequest prod = objectMapper.readValue(product, HotelRequest.class);
//        Hotel hotelProduct = new Hotel(ProductType.HOTEL, prod.getDescription(), prod.getPrice(), prod.getImages(), prod.getCountry(),
//                prod.getLocation(), prod.getUrl());
//        productService.save(hotelProduct);
        return "circuit added successfully";
    }

    @PostMapping("/addCircuitProduct")
//    @PreAuthorize("hasRole('ADMIN')")
    public String addCircuitProduct(@RequestBody CircuitRequest product) throws ParseException {
//        SimpleDateFormat formatter1=new SimpleDateFormat("dd/MM/yyyy");
//        Date date=formatter1.parse(product.getDepartureDate());
        CircuitProduct newProduct = new CircuitProduct(product.getProductType(),
                product.getDescription(), product.getPrice(), product.getImages(), product.getLocation(), product.getItinerary(),
                product.getRemainingTickets(), new Date(), product.getDays(), product.getCountries());
        productService.save(newProduct);
        return "circuit added successfully";
    }

    @PostMapping("/addHotelProduct")
    public String addHotelProduct(@RequestBody HotelRequest product) {
//        Hotel newProduct = new Hotel(product.getProductType(), product.getDescription(), product.getPrice(),
//                product.getImages(),
//                product.getCountry(), product.getLocation(), product.getUrl());
//        productService.save(newProduct);
        return "hotel added successfully";
    }

    @GetMapping("allMemProducts")
    public List<Product> getAllProducts() {
        return productService.findAll();
    }





    @GetMapping("allMemHotelProducts")
    public List<Product> getAllHotelProducts() {
        List<Product> hotelProducts = new ArrayList<>();
        for (Product product : productService.findAll()) {
            if (product.getProductType() == ProductType.HOTEL) {
                hotelProducts.add(product);
            }
        }
        return hotelProducts;
    }

}
