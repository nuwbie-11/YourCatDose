import Image from "next/image";
import { fetchBreeds } from "@/Services/api";

export default async function BreedDetail({
  params,
}: {
  params: { slug: string };
}) {
  const data = await fetchBreeds(
    new AbortController(),
    `https://api.thecatapi.com/v1/images/search?limit=3&breed_ids=${params.slug}&api_key=live_Vyw5vT7hgi8WtDFHZq43CfAt6Ru24vTcSslcvAK95UixQ4WcoNbdMLEdgvytVvRZ`
  );

  return (
    <>
      {data ? (
        <div className="w-screen flex md:flex-nowrap flex-col lg:py-8 mt-12">
          <div className="texts-section grid grid-cols-1 gap-y-2 mx-auto px-5">
            <h1 className="text-3xl font-semibold">
              {data[0]["breeds"][0]["name"]}
            </h1>
            <p className="text-lg">{data[0]["breeds"][0]["description"]}</p>
            <p className="pt-1 text-xs text-slate-200">Origin of Breeds : {data[0]["breeds"][0]["origin"]}</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-5 justify-center items-center max-w-screen mt-5">
            {data.map((obj: any, ix: number) => (
              <Image
                key={ix}
                className="h-72 w-96 px-5"
                src={obj["url"]}
                width={500}
                height={250}
                quality={95}
                alt=""
              />
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
