import Image from "next/image";
import Link from "next/link";

const PostPage = async () => {
  const res = await fetch("https://sky-mart-server-eight.vercel.app/products", {
    next: {
      revalidate: 5,
    },
  });
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <h1 className=" text-6xl text-center py-10">This is the post route</h1>
      <div className=" grid grid-cols-3 gap-8 px-20">
        {data?.map((product) => (
          <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <Image
                width={600}
                height={100}
                src={product?.image2}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product?.name}</h2>
              <p>{product?.details}</p>
              <div className="card-actions justify-end">
                <Link href={`/posts/${product._id}`}>
                  <button className="btn btn-primary">Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
