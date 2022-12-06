package com.codecool.ElProyecteGrande.payload.ourProducts;

import com.codecool.ElProyecteGrande.enums.Country;
import com.codecool.ElProyecteGrande.enums.ProductType;

import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.List;

public class ResortRequest {

    @NotBlank
    private String description;

    @NotBlank
    private int price;

    @NotBlank
    private List<String> images;

    @NotBlank
    private String location;

//    @NotBlank
//    private String itinerary;

    @NotBlank
    private int remainingTickets;

    @NotBlank
    private Date  departureDate;

    @NotBlank
    private int days;

    @NotBlank
    private Country country;


    public String getDescription() {
        return description;
    }

    public int getPrice() {
        return price;
    }

    public String getLocation() {
        return location;
    }

//    public String getItinerary() {
//        return itinerary;
//    }

    public int getRemainingTickets() {
        return remainingTickets;
    }

    public Date getDepartureDate() {
        return departureDate;
    }

    public int getDays() {
        return days;
    }

    public Country getCountry() {
        return country;
    }

    public List<String> getImages() {
        return images;
    }
}
