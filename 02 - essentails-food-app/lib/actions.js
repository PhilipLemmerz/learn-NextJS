'use server'

import { redirect } from 'next/navigation';
import { saveMeal } from './meals'
import { revalidatePath } from 'next/cache';

export async function FormHandler(prevState, formData) {

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    }

    // Validation
    if (meal.title.trim().length < 3 ||
        meal.summary.trim().length < 3 ||
        meal.instructions.trim().lenth < 3 ||
        meal.image.size === 0 ||
        meal.creator.trim().length < 3) {
        return {
            error: true,
            message: 'invalid input'
        }

    }

    await saveMeal(meal);
    
    revalidatePath('/meals', 'layout'); // app refresh: revalidatePath('/', 'layout');
    redirect('/meals')
}
