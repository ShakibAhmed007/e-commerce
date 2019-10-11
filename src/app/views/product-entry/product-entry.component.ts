import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormControlName } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.scss']
})
export class ProductEntryComponent implements OnInit {

  productEntryForm = new FormGroup({
    productName: new FormControl(''),
    productPrice: new FormControl(''),
    productWeight: new FormControl('1'),
    productDescription: new FormControl(''),
    productViewerDescription: new FormControl('1'),
    productImage: new FormControl(''),
    productCategoryId: new FormControl(''),
    productStock: new FormControl(''),
    productLive: new FormControl('')
  });

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
  }

  saveProduct(){
    console.log(this.productEntryForm.get('productName').value);
    console.log(this.productEntryForm.get('productPrice').value);
    console.log(this.productEntryForm.get('productWeight').value);
    console.log(this.productEntryForm.get('productDescription').value);
    console.log(this.productEntryForm.get('productViewerDescription').value);
    console.log(this.productEntryForm.get('productImage').value);
    console.log(this.productEntryForm.get('productCategoryId').value);
  }

}
