package com.codecool.ElProyecteGrande.service;

import com.codecool.ElProyecteGrande.model.products.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ProductService extends JpaRepository<Product, Long> {
}
