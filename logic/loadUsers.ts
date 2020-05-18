import { Client } from "https://deno.land/x/mysql/mod.ts";
import User from "../model/user.ts";

export default async (): Promise<User[]> => {

    const client = await new Client().connect({
        hostname: "127.0.0.1",
        username: "root",
        password: "",
        db: "deno"
    });

    const dados = await client.query("select id, nome from usuario");
    const users: User[] = dados.map(
        (reg: any): User => {
        return {
            id: reg.id,
            nome: reg.nome,
        }
    })
    return users;

};