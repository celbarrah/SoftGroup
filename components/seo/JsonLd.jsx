/**
 * JsonLd — injects JSON-LD structured data as a <script> tag.
 *
 * Usage:
 *   import JsonLd from "@/components/seo/JsonLd"
 *   import { orgSchema, webPageSchema } from "@/lib/seo"
 *
 *   <JsonLd data={orgSchema()} />
 *   <JsonLd data={webPageSchema({ ... })} />
 *
 * You can also pass an array to merge multiple schemas
 * into a single @graph script tag:
 *   <JsonLd data={[orgSchema(), breadcrumbSchema(items)]} />
 */
export default function JsonLd({ data }) {
  const json = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data.flatMap(d => d["@graph"] ?? [d]) }
    : data

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json, null, 0) }}
    />
  )
}
