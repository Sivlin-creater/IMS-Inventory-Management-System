package com.inventdev.InventoryManagement.service;

import com.inventdev.InventoryManagement.dto.ProductDTO;
import com.inventdev.InventoryManagement.dto.Response;
import org.springframework.web.multipart.MultipartFile;

public interface ProductService {
    Response saveProduct(ProductDTO productDTO, MultipartFile imageFile);
    Response updateProduct(ProductDTO productDTO, MultipartFile imageFile);
    Response getAllProducts();
    Response getProductById(Long id);
    Response deleteProduct(Long id);
}
