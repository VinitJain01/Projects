package com.local.MarketPlaceAPI.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.local.MarketPlaceAPI.entities.ProductData;



@Repository
public interface ProductRepository extends JpaRepository<ProductData,String>{

	
	List<ProductData> findAll();
	
	
	@Query(value="SELECT * FROM products WHERE :word IN (productcode,'', name,'',price,'',description,'',image,'',pincode,'',brand ) ",nativeQuery=true )
	public List<ProductData> findByWord(@Param("word") String word);
	
	@Query(value = "SELECT * FROM products p1 ORDER BY p1.price ASC ", nativeQuery = true)
	public List<ProductData> findAllOrderBypriceAscNative();
	
	@Query(value = "SELECT * FROM products p1 ORDER BY p1.price DESC ", nativeQuery = true)
	public List<ProductData> findAllOrderBypriceDescNative();
	
	@Query(value = "SELECT * FROM products pl WHERE :searchParam in (pl.productcode, pl.name, pl.brand, pl.image, pl.price, pl.description, pl.pincode) ORDER BY pl.price ASC", nativeQuery = true)
	public List<ProductData> findAllProductBybrandnameAndpriceAscNative(@Param("searchParam") String searchParam);			
	
		
	@Query(value = "SELECT * FROM products pl WHERE :searchParam in (pl.productcode, pl.name, pl.brand, pl.image, pl.price, pl.description, pl.pincode) ORDER BY pl.price DESC", nativeQuery = true)
	public List<ProductData> findAllProductBybrandnameAndpriceDescNative(@Param("searchParam") String searchParam);			
	
 
}

