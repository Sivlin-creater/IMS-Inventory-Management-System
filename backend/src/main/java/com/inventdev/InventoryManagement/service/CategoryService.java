package com.inventdev.InventoryManagement.service;

import com.inventdev.InventoryManagement.dto.CategoryDTO;
import com.inventdev.InventoryManagement.dto.Response;

public interface CategoryService {
    Response createCategory(CategoryDTO categoryDTO);
    Response getAllCategories();
    Response getCategoryById(Long id);
    Response updateCategory(Long id, CategoryDTO categoryDTO);
    Response deleteCategory(Long id);
    
}
