package com.codecool.ElProyecteGrande.payload.externalProducts;

import com.codecool.ElProyecteGrande.enums.Country;
import com.codecool.ElProyecteGrande.enums.ProductType;

import javax.validation.constraints.NotBlank;

public class HotelRequest {

    @NotBlank
    private Long id;

    @NotBlank
    private ProductType productType;

    @NotBlank
    private String description;

    @NotBlank
    private int price;

    @NotBlank
    private Country country;

    @NotBlank
    private String location;

    @NotBlank
    private String url;


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

    public Country getCountry() {
        return country;
    }

    public String getLocation() {
        return location;
    }

    public String getUrl() {
        return url;
    }
}
