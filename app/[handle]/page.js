import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { handle } = await params

  const client = await clientPromise;
    const db = client.db("linktree");
    const collection = db.collection("links");

    const item = await collection.findOne({ handle: handle });

    if (!item) {
      return notFound();
    }

    const item2 = {
  "_id": {
    "$oid": "686a43ce49d9bd581801d28f"
  },
  "links": [
    {
      "link": "facebook",
      "linktext": "https://www.facebook.com/CodeWithHarry/"
    },
    {
      "link": "instagram",
      "linktext": "https://www.instagram.com/codewithharry/?hl=en"
    }
  ],
  "pic": "https://via.placeholder.com/150"
}

  return <div className="flex min-h-screen bg-purple-400 justify-center items-center">
    <div className="photo flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-2xl">
      <img src={item.pic} alt={item._id.$oid} />
      <span className="text-xl font-bold">@{handle}</span>
      <div className="link">
        <div className="flex flex-col items-center mt-2 p-8 rounded-lg">
            {item.links.map((link, index) => {
              return (
                <div key={index} className="link-item m-6">
                  <a href={link.linktext} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:bg-purple-900 transition-colors duration-200 bg-purple-800 py-4 px-15 rounded-full m-2 text-xl">
                    {link.link}
                  </a>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  </div>
}
