import React, { Suspense } from "react";

import LandingClient from './LandingClient';

export default function Page() {
   return (
    <Suspense fallback={<div>Loading…</div>}>
      <LandingClient />
    </Suspense>
  );
}

