package com.codecool.ElProyecteGrande.payload.externalProducts;

import com.codecool.ElProyecteGrande.enums.Country;
import com.codecool.ElProyecteGrande.enums.ProductType;

import javax.validation.constraints.NotBlank;
import java.util.List;

public class HotelRequest {

    @NotBlank
    private String description;

    @NotBlank
    private int price;

    @NotBlank
    private List<String> images;

    @NotBlank
    private Country country;

    @NotBlank
    private String location;

//    @NotBlank
//    private String url;





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

//    public String getUrl() {
//        return url;
//    }

    public List<String> getImages() {
        return images;
    }
}
