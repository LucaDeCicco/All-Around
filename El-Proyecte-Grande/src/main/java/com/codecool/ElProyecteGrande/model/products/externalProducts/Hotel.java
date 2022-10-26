package com.codecool.ElProyecteGrande.model.products.externalProducts;

import com.codecool.ElProyecteGrande.enums.Country;
import com.codecool.ElProyecteGrande.enums.ProductType;
import com.codecool.ElProyecteGrande.model.products.Product;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
//@Table(name = "resorts")
public class Hotel extends Product {

    @Enumerated(EnumType.STRING)

    private Country country;

    private String location;

    private String url;

    public Hotel(ProductType productType, String description, int price, List<String>images, Country country, String location, String url) {
        super(productType, description, price, images);
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
