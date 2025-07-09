function MealDetailPage({params}) {
    return (
        <main>
            <h1>Meal Detail</h1>
            <p>{params.slug}</p>
        </main>
    )
}

export default MealDetailPage