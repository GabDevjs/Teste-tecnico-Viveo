import { NextRequest, NextResponse } from "next/server";

import { unsplash } from "@/lib/unsplash";

export async function GET(req: NextRequest) {
  try {
  
    const response = await unsplash.search.getPhotos({
      query: req.nextUrl.searchParams.get("search") || "",
      perPage: req.nextUrl.searchParams.get("perPage") || '50',
    });

    if (response.errors) {
      return NextResponse.json(response.errors[0], { status: 500 });
    }

    return NextResponse.json(response);
  } catch (e) {
    console.error(e);
    return NextResponse.json(e, { status: 500 });
  }
}
