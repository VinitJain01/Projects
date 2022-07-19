package com.local.MarketPlaceAPI.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="users")
public class UserData {
	@Id
	String idusers;
	String fname;
	String lname;
	String password;
	public String getIdusers() {
		return idusers;
	}
	public void setIdusers(String idusers) {
		this.idusers = idusers;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "UserData [idusers=" + idusers + ", fname=" + fname + ", lname=" + lname + ", password=" + password
				+ "]";
	}
	

}

