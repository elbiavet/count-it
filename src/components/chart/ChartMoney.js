
import { useSelector } from "react-redux";
import Chart from "chart.js/auto";
import { DoughnutChart } from "./DoughnutChart";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);


export const ChartMoney = () => {

  const { expenseList, incomeList } = useSelector(state =>state.countApp)

  const expenseCategories = ["Ropa", "Suministros", "Compra", "Restauración", "Gasolina", "Ocio", "Otros"];

  const getExpenseByCategory = (category) => {
      return expenseList
        .filter(e => e.category === category)
        .reduce((a, c) => a + parseInt(c.amount), 0)
    };
  
  const arrayExpenses = expenseCategories.map(category => {
      return {
        category,
        amount: getExpenseByCategory(category)
      };
    });

  
  const incomeCategories = ["Nómina","Autónomo", "Regalos", "Intereses", "Otros" ];
  
  const getIncomeByCategory = (category) => {
      return incomeList
        .filter(e => e.category === category)
        .reduce((a, c) => a + parseInt(c.amount), 0);
    };

  const arrayIncomes = incomeCategories.map(category => {
      return {
        category,
        amount: getIncomeByCategory(category)
      };
    });
  
  return (
    <div className="d-md-flex">
      <DoughnutChart chartData={ arrayExpenses } text="Gastos"/>
      <DoughnutChart chartData={ arrayIncomes } text="Ingresos"/>
    </div>
  );
}


