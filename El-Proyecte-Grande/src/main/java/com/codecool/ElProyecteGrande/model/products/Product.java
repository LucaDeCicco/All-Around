package com.codecool.ElProyecteGrande.model.products;

//import javax.persistence.*;

import com.codecool.ElProyecteGrande.enums.ProductType;

//@Entity
public abstract class Product {
    //    @Id
//    @SequenceGenerator(
//            name = "product_sequence",
//            allocationSize = 1
//    )
//    @GeneratedValue(
//            generator = "product_sequence",
//            strategy = GenerationType.SEQUENCE
//    )
    private Long id;

    private ProductType productType;
    private String description;
    private int price;

    public Product() {
    }

    public Product(Long id, ProductType productType, String description, int price) {
        this.id = id;
        this.productType = productType;
        this.description = description;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}

