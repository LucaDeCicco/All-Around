package com.codecool.ElProyecteGrande.payload;

import javax.validation.constraints.NotBlank;

public class PersonRequest {
    @NotBlank
    private long id;
    @NotBlank
    private String firstName;
    @NotBlank
    private String lastName;
    @NotBlank
    private String email;




    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }
}
