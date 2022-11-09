package com.codecool.ElProyecteGrande.payload.security;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;

@Getter
@Setter
public class SignupRequest {
    @NotBlank
    @Size(min = 3, max = 20)
    @JsonProperty("name")
    private String username;

    @NotBlank
    @Size(max = 50)
//    @Email
    private String email;

    private Set<String> role;
//    private String role;

    @NotBlank
    @Size(min = 6, max = 40)
    private String password;
}