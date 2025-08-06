import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db("linktree");
    const collection = db.collection("links");

    // If the handle already exists, return an error

    const existingLink = await collection.findOne({ handle: body.handle });
    if (existingLink) {
        return Response.json({ success: false, error: true, message: 'This handle already exists. Please choose a different one.', result: null });
    }

    const result = await collection.insertOne(body);

    return Response.json({ success: true, error: false, message: 'Your linktree has been Generated!', result: result })
}