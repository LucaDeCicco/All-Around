package com.codecool.ElProyecteGrande.repository;

import com.codecool.ElProyecteGrande.model.Product;

import java.util.List;

public interface ProductsDao {
    void add(Product product);
    Product find(int id);
    void remove(int id);

    List<Product> getAll();
//    List<Product> getBy(Supplier supplier);
//    List<Product> getBy(ProductCategory productCategory); TODO
}
