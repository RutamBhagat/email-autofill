"use client";
import { CopilotKit } from "@copilotkit/react-core";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CopilotKit runtimeUrl="/api/copilotkit">{children}</CopilotKit>;
}
