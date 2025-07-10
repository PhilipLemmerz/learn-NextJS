import Link from 'next/link'
import classes from './meals.module.css'
import MealGrid from '@/components/meals-grid'
import { getMeals } from '@/lib/meals'
import { Suspense } from 'react';
import MealsLoading from './loading-meals';

async function Meals() {
    const meals = await getMeals();
    return <MealGrid meals={meals} />
}

export default function MealsPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>Delicious Meals created by you</h1>
                <p>Choose your favrioute recipe and cook it yourselfs</p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share your favrioute recipe</Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<MealsLoading />}>
                    <Meals />
                </Suspense>

            </main>
        </>
    )
}

