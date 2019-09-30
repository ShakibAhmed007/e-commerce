import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

import { DashboardService } from '../../services/dashboard.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {



  datas = [
    { id: 1, name: "Shakib Ahmed", organization: "Business Automation LTD", designation: "Java Programmer", experience: "2 Years" },
    { id: 2, name: "Shakib Ahmed", organization: "Business Automation LTD", designation: "Java Programmer", experience: "2 Years" },
    { id: 3, name: "Shakib Ahmed", organization: "Business Automation LTD", designation: "Java Programmer", experience: "2 Years" },
    { id: 4, name: "Shakib Ahmed", organization: "Business Automation LTD", designation: "Java Programmer", experience: "2 Years" },
    { id: 5, name: "Shakib Ahmed", organization: "Business Automation LTD", designation: "Java Programmer", experience: "2 Years" },
    { id: 6, name: "Shakib Ahmed", organization: "Business Automation LTD", designation: "Java Programmer", experience: "2 Years" },
    { id: 7, name: "Shakib Ahmed", organization: "Business Automation LTD", designation: "Java Programmer", experience: "2 Years" },
    { id: 8, name: "Shakib Ahmed", organization: "Business Automation LTD", designation: "Java Programmer", experience: "2 Years" },
    { id: 9, name: "Shakib Ahmed", organization: "Business Automation LTD", designation: "Java Programmer", experience: "2 Years" },
    { id: 10, name: "Shakib Ahmed", organization: "Business Automation LTD", designation: "Java Programmer", experience: "2 Years" },

  ]

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
  }

  getProductsData() {
    console.log('Getting Products Data !!!! ');
    this.dashboardService.getDashboardData().subscribe(
      data => {
        console.log('data', data);
      }, err => {
        console.log('ERROR====', err);
      });
    // console.log(this.dashboardService.getDashboardData());
  }
}
