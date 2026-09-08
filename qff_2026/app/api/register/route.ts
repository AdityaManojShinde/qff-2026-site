import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const data = await request.json();

        console.log("Server: ",data);

        return NextResponse.json(
            {
                message: "Registration successful",
                data,
            },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                message: "Invalid request",
            },
            { status: 400 }
        );
    }
}