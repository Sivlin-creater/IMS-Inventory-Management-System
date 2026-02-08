package com.inventdev.InventoryManagement.exceptions;

public class NameValueRequiredException extends RuntimeException {
    public NameValueRequiredException(String message){
        super(message);
    }
}
