package com.local.MarketPlaceAPI.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.local.MarketPlaceAPI.entities.ProductData;
import com.local.MarketPlaceAPI.repositories.ProductRepository;



@Service
@Component
public class ProductService {
	@Autowired
	private ProductRepository productrepo;
	

	public List<ProductData> findProduct(){
		return productrepo.findAll();
	}
	
	public List<ProductData> findProductbyWord(String word){
		return productrepo.findByWord(word);
	}
	
	public List<ProductData> findProductsOrderByPriceASC(){
		return productrepo.findAllOrderBypriceAscNative();
	}
	
	public List<ProductData> findProductsOrderByPriceDESC(){
		return productrepo.findAllOrderBypriceDescNative();
	}
	
	public List<ProductData> findProductbyPriceandBrandDesc(String brand){
		return productrepo.findAllProductBybrandnameAndpriceDescNative(brand);
	}
	
	public List<ProductData> findProductbyPriceandBrandAsc(String brand){
		return productrepo.findAllProductBybrandnameAndpriceAscNative(brand);
	}
	

}

