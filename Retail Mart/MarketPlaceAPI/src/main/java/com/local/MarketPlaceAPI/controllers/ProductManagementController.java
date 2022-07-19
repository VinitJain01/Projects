package com.local.MarketPlaceAPI.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.local.MarketPlaceAPI.entities.ProductData;
import com.local.MarketPlaceAPI.services.ProductService;


@RestController
@RequestMapping("/marketplaceapi/v1")
@CrossOrigin(origins="http://localhost:4200")
public class ProductManagementController {
	@Autowired
	ProductService productservice;
	
	@GetMapping("/products")
	public List<ProductData> findingProducts(){
		List<ProductData> products = productservice.findProduct();
		return products;

}
	@GetMapping("/products/{word}")
	public  List<ProductData> findProductbystring(@PathVariable String word ){
		List<ProductData> products = productservice.findProductbyWord(word);
	    return products;

}
	@GetMapping("/products/Asc")
	public  List<ProductData> orderProductByAsc(){
	
		List<ProductData> products = productservice.findProductsOrderByPriceASC() ;
	
	    return products;

}
	@GetMapping("/products/desc")
	public  List<ProductData> orderProductBydesc(){
	
		List<ProductData> products = productservice.findProductsOrderByPriceDESC() ;
		
	
	    return products;

}
	
	@GetMapping("/products/Asc/{brand}")
	public  List<ProductData> findProductbybrandandprice(@PathVariable String brand ){
		
		List<ProductData> products = productservice.findProductbyPriceandBrandAsc(brand);
	
	    return products;

}
	
	@GetMapping("/products/desc/{brand}")
	public  List<ProductData> findProductbybrandandpricedesc(@PathVariable String brand ){
		
		List<ProductData> products = productservice.findProductbyPriceandBrandDesc(brand);
	
	    return products;

}

}
