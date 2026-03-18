// server.js
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerTools } from "./src/tools/tools.js";

const server = new McpServer({ name: "neovim", version: "1.0.0" });

registerTools(server);

const transport = new StdioServerTransport();
await server.connect(transport);
