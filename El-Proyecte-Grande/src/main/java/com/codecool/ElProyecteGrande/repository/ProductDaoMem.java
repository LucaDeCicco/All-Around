package com.codecool.ElProyecteGrande.repository;

import com.codecool.ElProyecteGrande.model.products.Product;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

//@Component
@Repository
@Scope()
public class ProductDaoMem implements ProductsDao {


    private List<Product> data;

    private ProductDaoMem() {
        data = new ArrayList<>();
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
