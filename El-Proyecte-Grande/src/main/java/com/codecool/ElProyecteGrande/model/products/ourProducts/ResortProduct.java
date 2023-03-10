package com.codecool.ElProyecteGrande.model.products.ourProducts;

import com.codecool.ElProyecteGrande.enums.Country;
import com.codecool.ElProyecteGrande.enums.ProductType;
import com.codecool.ElProyecteGrande.model.products.Product;
import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;


@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class ResortProduct extends OurProduct {
    @Enumerated(EnumType.STRING)
    private Country country;
    public ResortProduct(ProductType productType, String description, int price, List<String> images, String location, String itinerary, int remainingTickets, Date departureDate, int days, Country country) {
        super(productType, description, price, images, location, itinerary, remainingTickets, departureDate, days);
        this.country = country;
    }

    public Country getCountry() {
        return country;
    }

    public void setCountry(Country country) {
        this.country = country;
    }
}
