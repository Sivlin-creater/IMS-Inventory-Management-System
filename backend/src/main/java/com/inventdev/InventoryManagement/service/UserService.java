package com.inventdev.InventoryManagement.service;

import com.inventdev.InventoryManagement.dto.LoginRequest;
import com.inventdev.InventoryManagement.dto.RegisterRequest;
import com.inventdev.InventoryManagement.dto.Response;
import com.inventdev.InventoryManagement.dto.UserDTO;
import com.inventdev.InventoryManagement.entity.User;

public interface UserService {
    Response registerUser(RegisterRequest registerRequest);
    Response loginUser(LoginRequest loginRequest);
    Response getAllUsers();
    User getCurrentLoggedInUser();
    Response updateUser(Long id, UserDTO userDTO);
    Response deleteUser(Long id);
    Response getUserTransactions(Long id);
}
