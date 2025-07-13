'use server'

import { createAuthSession } from "@/lib/auth";
import { hashUserPassword } from "@/lib/hash";
import { createUser } from "@/lib/user";
import { redirect } from "next/navigation";
import { getUserByEmail } from "@/lib/user";
import { verifyPassword } from "@/lib/hash";
import { destroySession } from "@/lib/auth";

export async function SignUp(prevState, formData) {

    const email = formData.get('email');
    const password = formData.get('password');

    const errors = []

    if (!email.includes('@')) {
        errors.push('invalid Email')
    }

    if (password.trim().length < 5) {
        errors.push('invalid password')
    }

    if (errors.length > 0) {
        console.log(errors)
        return { errors: errors }
    }

    const hashedPassword = hashUserPassword(password);

    try {
        const userID = createUser(email, hashedPassword);
        await createAuthSession(userID);
        redirect('/training')
    } catch (error) {
        if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
            errors.push('Emailadresse ist schon vergeben')
            return { errors: errors }
        }
        throw error
    }

}

export async function login(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    const errors = []

    // checkt ob user in DB ist und gibt id zurück
    const existingUser = getUserByEmail(email);

    if (!existingUser) {
        errors.push('Login Daten nicht korrekt')
        return { errors: errors }

    }

    // gibt true oder false zurück über das hash.js file package
    const isValidPassword = verifyPassword(existingUser.password, password);

    if (!isValidPassword) {
        errors.push('Login Daten nicht korrekt')
        return { errors: errors }
    }

    await createAuthSession(existingUser.id);
    redirect('/training');
}

export async function auth(mode, prevState, formData) {
    if (mode === 'login') {
        return login(prevState, formData);
    }
    return SignUp(prevState, formData);
}


export async function logout() {
    await destroySession();
    redirect('/');
}
