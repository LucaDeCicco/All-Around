package com.codecool.ElProyecteGrande.model.products.ourProducts;

import com.codecool.ElProyecteGrande.enums.ProductType;
import com.codecool.ElProyecteGrande.model.products.Product;

import java.util.Date;

public abstract class OurProduct extends Product {
    private String location;
    private String itinerary;
    private int remainingTickets;
    private Date departureDate;
    private int days;

    public OurProduct() {
    }

    public OurProduct(Long id, ProductType productType, String description, int price, String location, String itinerary, int remainingTickets, Date departureDate, int days) {
        super(id, productType, description, price);
        this.location = location;
        this.itinerary = itinerary;
        this.remainingTickets = remainingTickets;
        this.departureDate = departureDate;
        this.days = days;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getItinerary() {
        return itinerary;
    }

    public void setItinerary(String itinerary) {
        this.itinerary = itinerary;
    }

    public int getRemainingTickets() {
        return remainingTickets;
    }

    public void setRemainingTickets(int remainingTickets) {
        this.remainingTickets = remainingTickets;
    }

    public Date getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(Date departureDate) {
        this.departureDate = departureDate;
    }

    public int getDays() {
        return days;
    }

    public void setDays(int days) {
        this.days = days;
    }
}
