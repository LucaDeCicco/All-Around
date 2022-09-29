package com.codecool.ElProyecteGrande.model.products.ourProducts;

import com.codecool.ElProyecteGrande.enums.Country;
import com.codecool.ElProyecteGrande.enums.ProductType;
import com.codecool.ElProyecteGrande.model.products.Product;

import java.util.Date;
import java.util.List;

public class CircuitProduct extends OurProduct {
    private List<Country> countries;

    public CircuitProduct() {
    }

    public CircuitProduct(Long id, ProductType productType, String description, int price, String location, String itinerary, int remainingTickets, Date departureDate, int days, List<Country> countries) {
        super(id, productType, description, price, location, itinerary, remainingTickets, departureDate, days);
        this.countries = countries;
    }

    public List<Country> getCountries() {
        return countries;
    }

    public void setCountries(List<Country> countries) {
        this.countries = countries;
    }
}
