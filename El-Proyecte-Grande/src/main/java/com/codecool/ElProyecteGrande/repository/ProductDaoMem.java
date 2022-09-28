package com.codecool.ElProyecteGrande.repository;

import com.codecool.ElProyecteGrande.model.Product;

import java.util.ArrayList;
import java.util.List;

public class ProductDaoMem implements ProductsDao {


    private List<Product> data;
    private static ProductDaoMem instance = null;

    private ProductDaoMem() {
        data = new ArrayList<>();
    }

    public static ProductDaoMem getInstance() {
        if (instance == null) {
            instance = new ProductDaoMem();
        }
        return instance;
    }

    @Override
    public void add(Product product) {
        data.add(product);
    }

    @Override
    public Product find(int id) {
        for (Product product : data) {
            if (product.getId()==id){
                return product;
            }
        }
        return null;
    }

    @Override
    public void remove(int id) {
        data.remove(find(id));
    }

    @Override
    public List<Product> getAll() {
        return data;
    }
}
