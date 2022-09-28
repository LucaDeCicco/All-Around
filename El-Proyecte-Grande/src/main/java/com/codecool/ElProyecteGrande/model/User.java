package com.codecool.ElProyecteGrande.model;

//import javax.persistence.*;

import java.util.ArrayList;
import java.util.List;

//@Entity
public class User {
    //    @Id
//    @SequenceGenerator(
//            name = "product_sequence",
//            allocationSize = 1
//    )
//    @GeneratedValue(
//            generator = "product_sequence",
//            strategy = GenerationType.SEQUENCE
//    )
    private long id;
    private String firstName;
    private String lastName;
    private String email;

    private List<Product> history;

    public User() {
        history=new ArrayList<>();
    }

    public User(Long id, String firstName, String lastName, String email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        history=new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Product> getHistory() {
        return history;
    }

    public void addToHistory(Product product) {
        history.add(product);
    }
}

