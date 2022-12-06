import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import { useEffect, useState, useCallback } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getMeals = useCallback(async () => {
    const request = await fetch(
      "https://react-http-6161a-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
    );

    if (!request.ok) {
      throw new Error("Something went wrong");
    }

    const mealsJson = await request.json();
    const mealItems = [];
    for (var mealId in mealsJson) {
      const mealData = mealsJson[mealId];
      mealItems.push({
        id: mealId,
        name: mealData.name,
        description: mealData.description,
        price: mealData.price,
      });
    }

    setMeals(mealItems);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getMeals().catch((err) => {
      setIsLoading(false);
      setError(err.message);
    });
  }, [getMeals]);

  if (error !== "") {
    return (
      <section className={classes.meals}>
        <Card>Error: {error}</Card>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading ? (
          <p>Is loading ...</p>
        ) : (
          <ul>
            {meals.map((meal) => (
              <MealItem
                id={meal.id}
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
              />
            ))}
          </ul>
        )}
      </Card>
    </section>
  );
};

export default AvailableMeals;
