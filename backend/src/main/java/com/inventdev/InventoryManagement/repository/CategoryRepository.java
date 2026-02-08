package com.inventdev.InventoryManagement.repository;

import com.inventdev.InventoryManagement.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long>{
    
}
