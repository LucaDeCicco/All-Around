package com.codecool.ElProyecteGrande.payload.ourProducts;

import com.codecool.ElProyecteGrande.enums.Country;
import com.codecool.ElProyecteGrande.enums.ProductType;

//import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.List;

public class CircuitRequest {

    private Long id;
    private ProductType productType;
    private String description;
    private int price;
    private List<String> images;
    private String location;
    private String itinerary;
    private int remainingTickets;
    private Date departureDate;
    private int days;
    private List<Country> countries;

    public Long getId() {
        return id;
    }

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

    public Date getDepartureDate() {
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
