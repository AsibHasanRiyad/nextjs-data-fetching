import Image from "next/image";
import React from "react";

const DetailsPage = async ({ params }) => {
  const res = await fetch(
    `https://sky-mart-server-eight.vercel.app/products/${params.id}`
  );
  const details = await res.json();
  console.log(details);
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <Image width={600} height={100} src={details?.image2} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{details?.name}</h2>
          <p>{details?.details}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
