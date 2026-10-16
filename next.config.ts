import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the sandboxed preview host to talk to the dev server.
  allowedDevOrigins: ["*.e2b.app", "localhost:3000"],
};

export default nextConfig;
