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

    @NotBlank
    private long userId;

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
    public long getUserId() {return userId;}
}
