package com.luizdeveloper.gometas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.luizdeveloper.gometas.entities.Sale;
import com.luizdeveloper.gometas.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	public List<Sale> findSales() {
		
		return repository.findAll();
		
	}
	
}
