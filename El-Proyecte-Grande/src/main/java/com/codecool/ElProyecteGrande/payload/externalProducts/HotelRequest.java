package com.codecool.ElProyecteGrande.payload.externalProducts;

import com.codecool.ElProyecteGrande.enums.Country;
import com.codecool.ElProyecteGrande.enums.ProductType;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
@Setter
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

    @NotBlank
    private String url;
}
