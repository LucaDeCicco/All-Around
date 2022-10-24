package com.codecool.ElProyecteGrande.model.products.ourProducts;

import com.codecool.ElProyecteGrande.enums.Country;
import com.codecool.ElProyecteGrande.enums.ProductType;
import com.codecool.ElProyecteGrande.model.products.Product;

import java.util.Date;

public class ResortProduct extends OurProduct {
    private Country country;

    public ResortProduct() {
    }

    public ResortProduct(Long id, ProductType productType, String description, int price, String location, String itinerary, int remainingTickets, Date departureDate, int days, Country country) {
        super(productType, description, price, location, itinerary, remainingTickets, departureDate, days);
        this.country = country;
    }

    public Country getCountry() {
        return country;
    }

    public void setCountry(Country country) {
        this.country = country;
    }
}
