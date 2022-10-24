package com.codecool.ElProyecteGrande.model.products.externalProducts;

import com.codecool.ElProyecteGrande.enums.Country;
import com.codecool.ElProyecteGrande.enums.ProductType;
import com.codecool.ElProyecteGrande.model.products.Product;

public class Hotel extends Product {

    private Country country;

    private String location;

    private String url;

    public Hotel() {
    }

    public Hotel(ProductType productType, String description, int price, Country country, String location, String url) {
        super(productType, description, price);
        this.country = country;
        this.location = location;
        this.url = url;
    }

    public Country getCountry() {
        return country;
    }

    public void setCountry(Country country) {
        this.country = country;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
