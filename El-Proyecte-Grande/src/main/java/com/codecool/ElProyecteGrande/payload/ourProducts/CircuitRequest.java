package com.codecool.ElProyecteGrande.payload.ourProducts;

import com.codecool.ElProyecteGrande.enums.Country;
import com.codecool.ElProyecteGrande.enums.ProductType;

import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.List;

public class CircuitRequest {

    @NotBlank
    private Long id;

    @NotBlank
    private ProductType productType;

//    @NotBlank
//    private String productType;

    @NotBlank
    private String description;

    @NotBlank
    private int price;

    @NotBlank
    private List<String> images;

    @NotBlank
    private String location;

    @NotBlank
    private String itinerary;

    @NotBlank
    private int remainingTickets;

    @NotBlank
    private String departureDate;

    @NotBlank
    private int days;

    @NotBlank
    private List<Country> countries;

    public Long getId() {
        return id;
    }

//    public ProductType getProductType() {
//        return productType;
//    }
    public ProductType getProductType() {
        return productType;
    }

    public String getDescription() {
        return description;
    }

    public int getPrice() {
        return price;
    }

    public String getLocation() {
        return location;
    }

    public String getItinerary() {
        return itinerary;
    }

    public int getRemainingTickets() {
        return remainingTickets;
    }

    public String getDepartureDate() {
        return departureDate;
    }

    public int getDays() {
        return days;
    }

    public List<Country> getCountries() {
        return countries;
    }

    public List<String> getImages() {
        return images;
    }
}
