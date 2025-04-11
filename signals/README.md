# Angular Signals – Category Filter Demo

This project shows how to use Angular Signals in a small demo app.

## Structure

The app consists of three components:

- **CategorySelectComponent**  
  Displays a list of categories and emits selected ones.

- **ProductTableComponent**  
  Displays a table of products. Can be filtered by category.

- **ProductComponent**  
  Connects the other two. Loads products, filters them based on the selected categories, and passes the data to the table.

## Getting Started

```bash
npm install
ng serve
```

Then open browser at `http://localhost:4200/`

## Official Documentation

[Accepting data with input properties](https://angular.dev/guide/components/inputs)
