package com.codecool.ElProyecteGrande.model.products.ourProducts;

import com.codecool.ElProyecteGrande.enums.ProductType;
import com.codecool.ElProyecteGrande.model.products.Product;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import java.util.Date;
import java.util.List;

@Entity
@NoArgsConstructor
public abstract class OurProduct extends Product {
    private String location;
    private String itinerary;
    private int remainingTickets;
    private Date departureDate;
    private int days;

    public OurProduct(ProductType productType, String description, int price, List<String> images, String location, String itinerary, int remainingTickets, Date departureDate, int days) {
        super(productType, description, price, images);
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
