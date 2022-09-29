package com.codecool.ElProyecteGrande.model.products.ourProducts;

import com.codecool.ElProyecteGrande.enums.Country;
import com.codecool.ElProyecteGrande.enums.ProductType;
import com.codecool.ElProyecteGrande.model.products.Product;

import java.util.Date;

public class ResortProduct extends Product {
    private Country country;

    public ResortProduct() {
    }

    public ResortProduct(Long id, ProductType productType, String description, int price, Country country) {
        super(id, productType, description, price);
        this.country = country;
    }

    public Country getCountry() {
        return country;
    }

    public void setCountry(Country country) {
        this.country = country;
    }
}
