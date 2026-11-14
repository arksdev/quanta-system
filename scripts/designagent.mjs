import { randomUUID } from "node:crypto";
import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";

const PORT = Number(process.env.DESIGNAGENT_BRIDGE_PORT ?? 3790);
const WS_URL = `ws://127.0.0.1:${PORT}`;

export function callBridge(command, params = {}, timeoutMs = 90000) {
  return new Promise((res, rej) => {
    let ws;
    try {
      ws = new WebSocket(WS_URL);
    } catch (e) {
      return rej(new Error(`Failed to connect to ${WS_URL}: ${e.message}`));
    }

    const timer = setTimeout(() => {
      try { ws.close(); } catch {}
      rej(new Error(`Timed out waiting for bridge response (${timeoutMs / 1000}s)`));
    }, timeoutMs);

    const cleanup = () => {
      clearTimeout(timer);
      try { ws.close(); } catch {}
    };

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: "register",
        role: "mcp-server",
        sessionId: randomUUID(),
        version: 2,
        root: process.cwd(),
        label: "HR",
        pluginVersion: "0.20.0"
      }));
    };

    ws.onmessage = (event) => {
      let msg;
      try {
        msg = JSON.parse(event.data);
      } catch {
        return;
      }

      if (msg.type === "register_ack") {
        const id = randomUUID();
        ws.send(JSON.stringify({
          type: "request",
          id,
          command,
          params
        }));
      } else if (msg.type === "response") {
        cleanup();
        if (msg.ok) {
          res(msg.result);
        } else {
          rej(new Error(msg.error || "Bridge error"));
        }
      }
    };

    ws.onerror = (err) => {
      cleanup();
      rej(new Error(`WebSocket error: ${err.message || "Connection refused"}`));
    };
  });
}

// CLI runner
const [,, cmd = "status", ...args] = process.argv;
if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    let params = {};
    if (args.length > 0) {
      try {
        params = JSON.parse(args.join(" "));
      } catch {
        params = { target: args[0] };
      }
    }
    console.log(`Calling bridge: command="${cmd}" params=`, params);
    const result = await callBridge(cmd, params);
    console.log("Success:\n", typeof result === "object" ? JSON.stringify(result, null, 2) : result);

    if (cmd === "get_design_md") {
      const md = result?.markdown ?? result;
      if (typeof md === "string") {
        writeFileSync("DESIGN.md", md, "utf8");
        console.log("Wrote DESIGN.md successfully.");
      }
    } else if (cmd === "get_spec") {
      const outFile = process.env.OUT_FILE || (args[0] && args[0].endsWith(".json") ? args[0] : "spec.json");
      writeFileSync(outFile, JSON.stringify(result, null, 2), "utf8");
      console.log(`Wrote ${outFile} successfully.`);
    }
  } catch (err) {
    console.error("Bridge call failed:", err.message);
    process.exit(1);
  }
}
