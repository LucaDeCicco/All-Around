package com.codecool.ElProyecteGrande.model.products.ourProducts;

import com.codecool.ElProyecteGrande.enums.Country;
import com.codecool.ElProyecteGrande.enums.ProductType;
import com.codecool.ElProyecteGrande.model.products.Product;
import lombok.*;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class CircuitProduct extends OurProduct {
    @ElementCollection(targetClass=Country.class)
    @Enumerated(EnumType.STRING)
    Collection<Country> countries;

    public CircuitProduct(ProductType productType, String description, int price, List<String>images, String location, String itinerary, int remainingTickets, Date departureDate, int days, Collection<Country> countries) {
        super(productType, description, price, images, location, itinerary, remainingTickets, departureDate, days);
        this.countries = countries;
    }
    public List<Country> getCountries() {
        return (List<Country>) countries;
    }

    public void setCountries(List<Country> countries) {
        this.countries = countries;
    }
}
