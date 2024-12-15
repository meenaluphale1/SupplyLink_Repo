package com.wecp.progressive;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SupplyLinkApplication {
    public static void main(String[] args) {
        System.out.println("Welcome to SupplyLink Project!");
        SpringApplication.run(SupplyLinkApplication.class, args);
    }
}

 //Day 2 Test collection working 

      //  SupplierServiceImplArraylist s= new SupplierServiceImplArraylist();
      //  s.addSupplier(new Supplier(101,"s1","s1.gmail.com","12345","vasai","s1","s123","Supplier"));
      //  System.out.println(s.getAllSuppliers());

      //day 3 test jdbc working 

      // ProductDAOImpl p= new ProductDAOImpl();
      // Product product=new Product(1,101,"mobile", "samsung",100,30000l);
      // try {
      //   p.addProduct(product);
      // } catch (SQLException e) {      
      //   e.printStackTrace();
      // }