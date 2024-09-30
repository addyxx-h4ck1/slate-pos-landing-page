'use client';
import Image from 'next/image';
import React from 'react';
import ReviewImage from '@/public/reviews/testimonial-pic-5.jpg';

const ReviewCard = () => {
  return (
    <article className="w-full max-w-[700px] p-2 cursor-pointer">
      <div className="p-6  rounded-lg shadow-custom w-full h-full min-h-[200px] flex justify-center items-center">
        <p className="text-fontSecondary text-sm text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora
          ea asperiores fugiat numquam, veniam et laboriosam. Optio ex quia
          dolore amet voluptas, sapiente praesentium recusandae tenetur
          doloribus totam laudantium.
        </p>
      </div>
      <div className="mt-2 px-3 text-sm flex items-center gap-3">
        <Image
          alt="review1"
          src={ReviewImage}
          width={100}
          height={100}
          className="w-[50px] h-[50px] object-cover rounded-full"
        />
        <div className="text-left">
          <h4 className="font-semibold">Ann Doe</h4>
          <p className="text-fontSecondary">Product Manager</p>
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;
