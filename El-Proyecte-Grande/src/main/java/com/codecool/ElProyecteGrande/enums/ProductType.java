package com.codecool.ElProyecteGrande.enums;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum ProductType {
    @JsonProperty("Circuit") CIRCUIT("Circuit"),
    @JsonProperty("Resort") RESORT("Resort"),
    @JsonProperty("Hotel") HOTEL("Hotel");

    private String productType;

    ProductType(String productType) {
        this.productType = productType;
    }

    public String getProductType() {
        return productType;
    }
}
