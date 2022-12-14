package com.codecool.ElProyecteGrande.payload.util;

import com.codecool.ElProyecteGrande.enums.Country;
import com.codecool.ElProyecteGrande.enums.ProductType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FilterCriteriaRequest {
    private Country country;
    private ProductType productType;
}
