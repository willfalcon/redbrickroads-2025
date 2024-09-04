import { validatePreviewUrl } from "@sanity/preview-url-secret"
import { client } from "@/sanity/lib/client";
import { token } from "@/sanity/lib/token";
import { NextRequest, NextResponse } from "next/server";
import { draftMode } from "next/headers";

const clientWithToken = client.withConfig({token});

export async function GET(request: NextRequest) {
  if (!process.env.SANITY_API_READ_TOKEN) {
    return new Response("Missing environment variable SANITY_API_READ_TOKEN", {
      status: 500
    });
  }

  const { isValid, redirectTo = '/' } = await validatePreviewUrl(clientWithToken, request.url);

  if (!isValid) {
    return new Response("Invalid secret", {status: 401});
  }

  draftMode().enable();
  return NextResponse.redirect(new URL(redirectTo, request.url))
}