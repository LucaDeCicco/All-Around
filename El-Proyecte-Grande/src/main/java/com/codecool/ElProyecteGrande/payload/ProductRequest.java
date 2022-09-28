package com.codecool.ElProyecteGrande.payload;

import javax.validation.constraints.NotBlank;

public class ProductRequest {

    @NotBlank
    private long id;
    @NotBlank
    private String name;

    @NotBlank
    private String description;

    @NotBlank
    private int price;

    public String getName() {
        return name;
    }

    public int getPrice() {
        return price;
    }

    public long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }
}
