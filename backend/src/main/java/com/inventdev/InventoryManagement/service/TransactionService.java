package com.inventdev.InventoryManagement.service;

import com.inventdev.InventoryManagement.dto.Response;
import com.inventdev.InventoryManagement.dto.TransactionRequest;
import com.inventdev.InventoryManagement.enums.TransactionStatus;

public interface TransactionService {
    Response restockInventory(TransactionRequest transactionRequest);
    Response sell(TransactionRequest transactionRequest);
    Response returnToSupplier(TransactionRequest transactionRequest);
    Response getAllTransactions(int page, int size, String searchText);
    Response getTransactionById(Long id);
    Response getAllTransactionByMonthAndYear(int month, int year);
    Response updateTransactionStatus(Long transactionId, TransactionStatus transactionStatus);
}
