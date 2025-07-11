import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useProducts } from "../../store/useProducts";
import { getRandomProduct } from "../../store/productThunk";
import StarRating from "../../components/StarRatings";
import { afterDiscount, multiplyEmoji } from "../../utils/common-functions";

function ProductOverview() {
  const { dispatch, random_product } = useProducts();
  const { id } = useParams();

  const [primaryImage, setPrimaryImage] = useState(0);

  useEffect(() => {
    if (!id) return;
    dispatch(getRandomProduct(id.toString() as string));
  }, [id]);

  const shippingInformation = [
    {
      title: "Discounted Price",
      description: "- " + random_product?.discountPercentage + "%",
    },
    {
      title: "Return",
      description: random_product?.returnPolicy,
    },
    {
      title: "Shipping",
      description: random_product?.shippingInformation,
    },
    {
      title: "Warranty",
      description: random_product?.warrantyInformation,
    },
  ];

  return (
    <>
      <div className="flex md:flex-row flex-col justify-evenly gap-5 m-auto my-4 w-[90%]">
        <div className="flex flex-row md:flex-col flex-1/12">
          {random_product?.images.map((image, i) => (
            <img
              key={i}
              src={image}
              alt={random_product?.title}
              className={`bg-[var(--secondary)] cursor-pointer ${
                i === primaryImage ? "border-1 border-[var(--button-bg)]" : ""
              } ${
                random_product?.images.length > 1 ? "md:mb-2 mr-2" : ""
              } rounded-2xl w-[100px] md:w-[auto]`}
              onClick={() => setPrimaryImage(i)}
            />
          ))}
        </div>

        <div className="flex-5/12">
          <img
            className="bg-[var(--secondary)] bg-cover"
            src={random_product?.images[primaryImage]}
            alt={random_product?.title}
          />
        </div>

        <div className="flex-5/12">
          <div className="my-3 font-semibold text-2xl">
            {random_product?.title}
          </div>

          <div className="flex sm:flex-row flex-col my-3">
            <div>
              <StarRating
                rating={Number(random_product?.rating)}
                maxStars={5}
              />
            </div>
            <div>[{random_product?.reviews.length} Reviews]</div>
            <div className="text-[var(--primary1)]">
              {random_product?.availabilityStatus} ( {random_product?.stock} )
            </div>
          </div>

          {/* Discount Price */}
          <div className="my-3 text-2xl">
            $
            {afterDiscount({
              price: random_product?.price,
              discountPercentage: random_product?.discountPercentage,
            })}{" "}
            &nbsp;
            <span className="text-gray-400 line-through">
              {" "}
              ${random_product?.price}{" "}
            </span>
          </div>

          <div className="my-3 text-1xl">{random_product?.description}</div>

          <hr className="opacity-30 m-auto my-6" />

          {/* Product Dimensions */}
          <div>
            <table className="table-fixed">
              <thead className="">
                <tr>
                  <th className="p-2 border-[var(--secondary)] border-1">
                    Depth
                  </th>
                  <th className="p-2 border-[var(--secondary)] border-1">
                    Width
                  </th>
                  <th className="p-2 border-[var(--secondary)] border-1">
                    Height
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="p-2 border-[var(--secondary)] border-1">
                    {random_product?.dimensions?.depth}
                  </td>
                  <td className="p-2 border-[var(--secondary)] border-1">
                    {random_product?.dimensions?.width}
                  </td>
                  <td className="p-2 border-[var(--secondary)] border-1">
                    {random_product?.dimensions?.height}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* SKU */}
          <div className="mt-2">
            <span>SKU: </span>
            {random_product?.sku}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            <span>Tags: </span>
            {random_product?.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 hover:bg-[var(--hover-button-bg)] px-2 py-1 rounded hover:text-[var(--button-text)] text-sm cursor-pointer"
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>

          {/* Shipping & Return Info */}
          <div className="gap-4 grid grid-cols-2 mt-2 p-4 border-1 border-gray-400 rounded-[4px]">
            {shippingInformation.map((info, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-bold text-[14px] text-gray-500">
                  {info.title}
                </span>
                <span className="font-semibold text-[16px]">
                  {info.description}
                </span>
              </div>
            ))}
          </div>

          {/* Reviews */}
          <div className="mt-2">
            <span className="mb-2">Reviews: </span>
            {random_product?.reviews.map((review, idx) => (
              <div
                key={idx}
                className="mb-2 p-2 border border-gray-400 rounded-[4px] text-sm"
              >
                <p className="font-semibold">{review.reviewerName}</p>
                <p>{review.comment}</p>
                <p className="text-yellow-600">
                  {" "}
                  {multiplyEmoji("⭐", Number(review.rating))} {review.rating}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductOverview;
