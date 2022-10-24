package com.codecool.ElProyecteGrande.service;

import com.codecool.ElProyecteGrande.model.products.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductService extends JpaRepository<Product, Long> {
}
