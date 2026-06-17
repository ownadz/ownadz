import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { path } = await request.json();

    if (!path) {
      return NextResponse.json(
        { message: "Missing path parameter" },
        { status: 400 }
      );
    }

    revalidatePath(path);

    return NextResponse.json({
      revalidated: true,
      path,
      executionTime: Date.now(),
    });
  } catch (err) {
    return NextResponse.json(
      {
        message: "Internal revalidation error",
        error: err?.message,
      },
      { status: 500 }
    );
  }
}

