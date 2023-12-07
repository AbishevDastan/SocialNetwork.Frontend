import { Injectable } from "@angular/core";
import { User } from "../models/user/user";

@Injectable({
    providedIn: 'root'
})

export class UserProvider {
    currentUser: User | null = null;
}