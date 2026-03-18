import net from "net";
import { attach } from "neovim";

let instance = null;

export async function getNvim() {
    if (instance) return instance;

    const socketPath = process.env.NVIM;
    if (!socketPath) throw new Error("NVIM env var not set");

    const socket = net.createConnection(socketPath);

    instance = await attach({
        reader: socket,
        writer: socket,
    });

    return instance;
}
