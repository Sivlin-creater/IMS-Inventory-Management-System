package com.inventdev.InventoryManagement.service;

import com.inventdev.InventoryManagement.dto.Response;
import com.inventdev.InventoryManagement.dto.SupplierDTO;

public interface SupplierService {
    Response addSupplier(SupplierDTO supplierDTO);
    Response updateSupplier(Long id, SupplierDTO supplierDTO);
    Response getAllSuppliers();
    Response getSupplierById(Long id);
    Response deleteSupplier(Long id);
}
