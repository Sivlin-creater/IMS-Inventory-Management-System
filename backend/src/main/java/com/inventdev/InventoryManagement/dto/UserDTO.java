package com.inventdev.InventoryManagement.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.inventdev.InventoryManagement.enums.UserRole;
import java.time.LocalDateTime;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserDTO {

    private Long id;

    private String name;

    private String email;
   
    @JsonIgnore
    private String password;
    
    private String phoneNumber;
    
    private UserRole role;
    
    private List<TransactionDTO> transactions;
    
    private LocalDateTime createdAt;
    
}
