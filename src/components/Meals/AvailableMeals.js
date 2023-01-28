import style from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 2299,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 1650,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 1299,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 1899,
    },
  ];

const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map((meal, index) => {
        return <MealItem key={meal.id} name={meal.name} descr={meal.description} price={meal.price} id={meal.id}/>
    });

    return (
        <section className={style.meals}>
          <Card>
            <ul>
                {mealsList}
            </ul>
          </Card>
        </section>
    );
}

export default AvailableMeals;