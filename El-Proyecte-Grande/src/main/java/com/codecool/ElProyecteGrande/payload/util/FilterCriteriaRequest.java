package com.codecool.ElProyecteGrande.payload.util;

import com.codecool.ElProyecteGrande.enums.Country;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FilterCriteriaRequest {
    private Country country;
    private String orderByPrice;
}
