import { NextRequest, NextResponse } from "next/server";

import { unsplash } from "@/lib/unsplash";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const search = url.searchParams.get("search");
    const perPage = url.searchParams.get("perPage");

    console.log("search", search);
    console.log("perPage", perPage);

    const response = await unsplash.search.getPhotos({
      query: search || "",
      perPage: perPage || '50',
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
