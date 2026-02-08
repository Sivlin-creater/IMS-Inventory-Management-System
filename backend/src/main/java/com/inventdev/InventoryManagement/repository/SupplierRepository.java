package com.inventdev.InventoryManagement.repository;

import com.inventdev.InventoryManagement.entity.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierRepository extends JpaRepository<Supplier, Long>{
    
}
