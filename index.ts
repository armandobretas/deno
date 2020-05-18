import {writeFileStrSync} from "https://deno.land/std/fs/mod.ts"
import loadUsers from './logic/loadUsers.ts';

const users = await loadUsers();

const response = users.map(user => `${user.id} - ${user.nome}`).join("\n")

writeFileStrSync("./users.txt", response);