package com.codecool.ElProyecteGrande.enums;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum ProductType {
    @JsonProperty("Circuit") CIRCUIT,
    @JsonProperty("Resort") RESORT,
    @JsonProperty("Hotel") HOTEL
}
