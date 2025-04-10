import { PortableText, PortableTextComponents } from "@portabletext/react"
import React from "react"

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const url = value?.asset?._ref
        ? `https://cdn.sanity.io/images/93c8ux96/production/${
            value.asset._ref.split("-")[1]
          }-${value.asset._ref.split("-")[2]}.${value.asset._ref.split("-")[3]}`
        : ""
      return (
        <img
          src={url}
          alt="Sanity Image"
          className="my-6 rounded-xl shadow-md max-w-full"
        />
      )
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-4 mt-10">{children}</h1>
    ),
    normal: ({ children }) => <p className="mb-2">{children}</p>,
  },
}

const PostBody = ({ value }: { value: any }) => {
  return <PortableText value={value} components={components} />
}

export default PostBody
