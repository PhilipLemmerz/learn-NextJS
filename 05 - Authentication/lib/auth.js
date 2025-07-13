import { Lucia } from "lucia";
import { cookies } from "next/headers";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import db from "./db";

const adapter = new BetterSqlite3Adapter(db, {
    user: 'users',
    session: 'sessions',
});

const lucia = new Lucia(adapter, {
    sessionCookie: {
        expires: false,
        attributes: {
            secure: process.env.NODE_ENV === 'production',
        },
    },
});

export async function createAuthSession(userId) {
    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    );
}

export async function verifyAuth() {
    const sessionCookie = cookies().get(lucia.sessionCookieName)

    if (!sessionCookie) {
        return { // könnten auch false rutrnen
            user: null,
            session: null
        }
    }

    const sessionID = sessionCookie.value;

    if (!sessionID) {
        return {
            user: null,
            session: null
        }
    }

    const result = await lucia.validateSession(sessionID)

    // Optional: Wir erstellen eine neue Session, wenn User einloggt, damit die alte
    // nicht abläuft kurz nach login
    // lucia spezifisch (Dokumentation) -> next mag keine cookies setzen während dem page rendering
    // deswegen können fehler geworfen werden die ignoriert werden sollen (leerer Catch blog)
    try {
        if (result.session && result.session.fresh) {
            const sessionCookie = lucia.createSessionCookie(result.session.id);
            cookies().set(
                sessionCookie.name,
                sessionCookie.value,
                sessionCookie.attributes
            );
        };
        // clear cookie wenn keine session und neu erstellen
        if (!result.session) {
            const sessionCookie = lucia.createBlankSessionCookie();
            cookies().set(
                sessionCookie.name,
                sessionCookie.value,
                sessionCookie.attributes
            );
        }
    } catch (err) {

    }

    return result
}


export async function destroySession() {
    // prüfen ob User eingeloggt ist
  const { session } = await verifyAuth();
  if (!session) {
    return {
      error: 'Unauthorized!',
    };
  }

  await lucia.invalidateSession(session.id);

  // cookie im browser leeren
  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
}


