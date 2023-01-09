package com.codecool.ElProyecteGrande.payload;

import javax.validation.constraints.NotBlank;
import java.util.List;

public class AddImageRequestTest {
    @NotBlank
    private List<String> Images;

    public List<String> getImages() {
        return Images;
    }
}
