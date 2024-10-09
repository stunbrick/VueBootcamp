import { defineStore } from "pinia";
import {auth, usersCollection} from "@/includes/firebase.js";

export default defineStore("user", {
    state: () => ({
        userLoggedIn: false,
    }),
    actions: {
        async signOut() {
            await auth.signOut();
            this.userLoggedIn = false;
        },
        async register(values) {
            const userCred = await auth.createUserWithEmailAndPassword(
                values.email, values.password
            );
            await usersCollection.doc(userCred.user.uid).set({
                name: values.name,
                email: values.email,
                age: values.age,
                country: values.country,
            });
            await userCred.user.updateProfile({
                displayName: values.name,
            });

            console.log('registered new user');
            this.userLoggedIn = true;
        },
        async authenticate(values) {
            await auth.signInWithEmailAndPassword(values.email, values.password);
            this.userLoggedIn = true;
        }
    }
});