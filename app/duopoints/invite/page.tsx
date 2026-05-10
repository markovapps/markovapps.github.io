"use client";

import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";

const SCHEME = "duopoints-markovapps";
const IOS_STORE = "https://apps.apple.com/app/id6759785571";

export default function DuoPointsInvitePage() {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setToken(params.get("token") ?? "");
  }, []);

  const openInApp = () => {
    if (!token) return;
    const start = Date.now();
    window.location.href = `${SCHEME}://invite?token=${encodeURIComponent(token)}`;
    setTimeout(() => {
      if (Date.now() - start < 2000) {
        window.location.href = IOS_STORE;
      }
    }, 1500);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-6 py-16 px-4 text-center">
      <h1 className="text-3xl font-bold">You&apos;ve been invited to DuoPoints</h1>
      <p className="max-w-md text-default-500">
        DuoPoints is a tiny rewards app for two. Open the invite to connect with your partner.
      </p>

      {token ? (
        <Button color="primary" size="lg" onClick={openInApp} className="px-8">
          Open in app
        </Button>
      ) : (
        <p className="text-danger">No invite token in this link.</p>
      )}

      <p className="text-sm text-default-500">
        Don&apos;t have the app yet?{" "}
        <a className="underline" href={IOS_STORE}>
          Download DuoPoints
        </a>
      </p>
    </section>
  );
}
