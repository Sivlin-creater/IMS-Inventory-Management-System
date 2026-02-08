package com.inventdev.InventoryManagement.repository;

import com.inventdev.InventoryManagement.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long>{
    
}
