
import { Component, OnInit } from '@angular/core';
import { SupplyLinkService } from '../../services/supplylink.service';
import { Supplier } from '../../types/Supplier';
import { Warehouse } from '../../types/Warehouse';
import { Product } from '../../types/Product';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    suppliers: Supplier[];
    warehouses: Warehouse[];
    products: Product[];

    role: string | null;
    userId: number;
    constructor(private supplyLinkService: SupplyLinkService, private router: Router) { }

    ngOnInit(): void {
        this.role = localStorage.getItem("role");
        this.userId = Number(localStorage.getItem("user_id"));
        if (this.role === 'ADMIN') {
            console.log('loadAdminData');
            this.loadAdminData();
        }
    }

    loadAdminData(): void {
        this.supplyLinkService.getAllSuppliers().subscribe({
            next: (response) => {
                this.suppliers = response;
            },
            error: (error) => console.log('Error loading suppliers', error)
        });

        this.supplyLinkService.getAllWarehouses().subscribe({
            next: (response) => {
                this.warehouses = response;
            },
            error: (error) => console.log('Error loading warehouses', error)
        });

        this.supplyLinkService.getAllProducts().subscribe({
            next: (response) => {
                this.products = response;
            },
            error: (error) => console.log('Error loading products', error)
        });
    }
}
