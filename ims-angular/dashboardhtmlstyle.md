<div class="dashboard-container" style="padding: 20px; max-width: 1200px; margin: auto;">

  <h1 style="text-align: center; margin-bottom: 40px;">Transaction Dashboard</h1>

  <!-- Transaction Selection -->
  <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; margin-bottom: 50px;">
    <div>
      <label>Select Month:</label>
      <select [(ngModel)]="selectedMonth">
        <option *ngFor="let month of months" [value]="month.value">{{ month.name }}</option>
      </select>
    </div>

    <div>
      <label>Select Year:</label>
      <select [(ngModel)]="selectedYear">
        <option *ngFor="let year of years" [value]="year">{{ year }}</option>
      </select>
    </div>

    <div>
      <button (click)="loadMonthlyData()" style="padding: 5px 15px; cursor: pointer;">Show Monthly Data</button>
    </div>
  </div>

  <!-- =================== -->
  <!-- Transaction Counts Pie Chart Card -->
  <!-- =================== -->
  <div class="card" style="margin-bottom: 40px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); border-radius: 10px;">
    <h2 style="text-align: center; margin-bottom: 20px;">Transaction Counts by Type</h2>
    <apx-chart
      *ngIf="chartTypeOptions"
      [series]="chartTypeOptions.series"
      [chart]="chartTypeOptions.chart"
      [labels]="chartTypeOptions.labels"
      [colors]="chartTypeOptions.colors"
      [legend]="chartTypeOptions.legend"
      [dataLabels]="chartTypeOptions.dataLabels"
    ></apx-chart>
  </div>

  <!-- =================== -->
  <!-- Total Amount by Type Bar Chart Card -->
  <!-- =================== -->
  <div class="card" style="margin-bottom: 40px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); border-radius: 10px;">
    <h2 style="text-align: center; margin-bottom: 20px;">Total Transaction Amount by Type</h2>
    <apx-chart
      *ngIf="chartAmountOptions"
      [series]="chartAmountOptions.series"
      [chart]="chartAmountOptions.chart"
      [xaxis]="chartAmountOptions.xaxis"
      [colors]="chartAmountOptions.colors"
      [dataLabels]="chartAmountOptions.dataLabels"
      [legend]="chartAmountOptions.legend"
    ></apx-chart>
  </div>

  <!-- =================== -->
  <!-- Monthly Transaction Line Chart Card -->
  <!-- =================== -->
  <div class="card" style="margin-bottom: 40px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); border-radius: 10px;">
    <h2 style="text-align: center; margin-bottom: 20px;">Monthly Transaction Chart</h2>
    <apx-chart
      *ngIf="chartMonthlyOptions"
      [series]="chartMonthlyOptions.series"
      [chart]="chartMonthlyOptions.chart"
      [xaxis]="chartMonthlyOptions.xaxis"
      [colors]="chartMonthlyOptions.colors"
      [dataLabels]="chartMonthlyOptions.dataLabels"
    ></apx-chart>
  </div>

</div>

<!-- Responsive Styles -->
<style>
  @media (max-width: 768px) {
    .dashboard-container {
      padding: 10px;
    }
    select, button {
      width: 100%;
    }
    .card {
      padding: 15px;
    }
  }
</style>
