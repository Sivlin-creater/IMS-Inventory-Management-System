import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Api } from '../service/api';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard {
  // Define the properties for storing transaction data and chart data
  transactions: any[] = []; // Array to hold all transactions
  transactionTypeData: any[] = []; // Data for the chart showing count of transactions by type
  transactionAmountData: any[] = []; // Data for the chart showing total amount by transaction type
  monthlyTransactionData: any[] = []; // Data for the chart showing daily totals for the selected month

  // List of months, used for selecting a month
  months = [
    { name: 'January', value: '01' },
    { name: 'February', value: '02' },
    { name: 'March', value: '03' },
    { name: 'April', value: '04' },
    { name: 'May', value: '05' },
    { name: 'June', value: '06' },
    { name: 'July', value: '07' },
    { name: 'August', value: '08' },
    { name: 'September', value: '09' },
    { name: 'October', value: '10' },
    { name: 'November', value: '11' },
    { name: 'December', value: '12' },
  ];

  // Array to store the years (last 10 years from current year)
  years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i); 

  // Selected month and year for filtering monthly data
  selectedMonth = '';
  selectedYear = '';

  // Chart view dimensions, legend, and animations settings
  chartTypeOptions: any;
  chartAmountOptions: any;
  chartMonthlyOptions: any;

  // Constructor to inject ApiService for API calls
  constructor(private api: Api) {}

  // ngOnInit lifecycle hook, called when the component initializes
  ngOnInit(): void {
    this.loadTransactions(); // Load transactions when the component initializes
  }

  // Method to fetch all transactions from the API
  loadTransactions(): void {
    this.api.getAllTransactions('').subscribe((data) => {
      this.transactions = data.transactions; // Store transactions data
      this.processChartData(); // Process data to generate charts
    });
  }

  // ========= Process Main Chart Data =========
  // Method to process transaction data for type-based and amount-based charts
  processChartData(): void {
    // Object to count the number of transactions by type
    const typeCounts: { [key: string]: number } = {};

    // Object to sum the transaction amounts by type
    const amountByType: { [key: string]: number } = {};

    // Loop through each transaction to calculate totals by type
    this.transactions.forEach((transaction) => {
      const type = transaction.transactionType;
      typeCounts[type] = (typeCounts[type] || 0) + 1;
      amountByType[type] =
        (amountByType[type] || 0) + transaction.totalPrice;
    });

    // Prepare data for chart displaying number of transactions by type
    this.transactionTypeData = Object.keys(typeCounts).map((type) => ({
      name: type,
      value: typeCounts[type],
    }));

    // Prepare data for chart displaying total transaction amount by type
    this.transactionAmountData = Object.keys(amountByType).map((type) => ({
      name: type,
      value: amountByType[type],
    }));

    this.buildCharts(); // Build the chart configurations
  }

  // ================================
  // BUILD CHART OPTIONS FOR APEXCHARTS
  // ================================
  buildCharts(): void {
    // Pie chart for TRANSACTION TYPE
    this.chartTypeOptions = {
      chart: { type: 'pie' },
      labels: this.transactionTypeData.map((d) => d.name),
      series: this.transactionTypeData.map((d) => d.value),
      legend: { show: true },
    };

    // Bar chart for TRANSACTION AMOUNT
    this.chartAmountOptions = {
      chart: { type: 'bar' },
      xaxis: {
        categories: this.transactionAmountData.map((d) => d.name),
      },
      series: [
        {
          name: 'Total Amount',
          data: this.transactionAmountData.map((d) => d.value),
        },
      ],
      legend: { show: true },
    };
  }

  // Method to load transaction data for a specific month and year
  loadMonthlyData(): void {
    // If no month or year is selected, exit the function
    if (!this.selectedMonth || !this.selectedYear) {
      return;
    }

    // Call API to get transactions for the selected month and year
    this.api
      .getTransactionsByMonthAndYear(
        Number.parseInt(this.selectedMonth), // Convert month string to number
        Number.parseInt(this.selectedYear) // Convert year string to number
      )
      .subscribe((data) => {
        this.transactions = data.transactions; // Store transactions for the selected month
        this.processChartData(); // Process the overall data for charts
        this.processMonthlyData(data.transactions); // Process the data for the daily chart
      });
  }

  // Method to process daily transaction data for the selected month
  processMonthlyData(transactions: any[]): void {
    // Object to store daily total amounts (key = day, value = total amount)
    const dailyTotals: { [key: string]: number } = {};

    // Loop through each transaction and accumulate totals for each day
    transactions.forEach((transaction) => {
      const date = new Date(transaction.createdAt).getDate().toString(); // Get the day from transaction date
      dailyTotals[date] = (dailyTotals[date] || 0) + transaction.totalPrice; // Sum daily totals
    });

    // Prepare data for chart displaying daily totals for the selected month
    this.monthlyTransactionData = Object.keys(dailyTotals).map((day) => ({
      name: `Day ${day}`,
      value: dailyTotals[day],
    }));

    // Build line chart
    this.chartMonthlyOptions = {
      chart: { type: 'line' },
      xaxis: {
        categories: this.monthlyTransactionData.map((d) => d.name),
      },
      series: [
        {
          name: 'Daily Total',
          data: this.monthlyTransactionData.map((d) => d.value),
        },
      ],
    };
  }

}
