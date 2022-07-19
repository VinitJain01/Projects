package com.local.MarketPlaceAPI.entities;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="products")
public class ProductData {
	@Id
	int productcode;
	String name;
	int price;
	String description;
	String image;
	int pincode;
	String brand;
	
	public int getProductcode() {
		return productcode;
	}
	public void setProductcode(int productcode) {
		this.productcode = productcode;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}

	@Override
	public String toString() {
		return "ProductData [productcode=" + productcode + ", name=" + name + ", price=" + price + ", description="
				+ description + ", image=" + image + ", pincode=" + pincode + ", brand=" + brand + "]";
	}
	
}