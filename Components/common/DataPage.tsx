import Link from 'next/link'
import React from 'react'

const DataPage = (data) => {
  return (
    <>
    <section className="flex flex-col md:flex-row  bg-gray-50/50 md:px-24 p-4 my-4">
          <img
            className="basis-1/2 object-fit"
            width={"500px"}
            height={"400px"}
            src={data?.thumbnail || "/nothumbnail.jpg"}
            alt="video thumbnail"
          />
          <div className="px-4 flex flex-col justify-between">
            <h1 className="font-bold text-3xl overflow-hidden capitalize text-center md:text-start mb-4">
              {data?.title}
            </h1>

            <div className="flex flex-col md:flex-row justify-between">
              <Link
                className="p-4 bg-black text-blue-600 mb-4 md:mb-0 text-center"
                href={data?.links["Download Low Quality"]}
              >
                Download in low quality
              </Link>

              <Link
                className="p-4 bg-black text-blue-600 text-center"
                href={data?.links["Download High Quality"]}
              >
                Download in HD quality
              </Link>
            </div>
          </div>
        </section>
    </>
  )
}

export default DataPage