# Appwrite Categories Collection — Attribute List

Create this collection in your Appwrite database with the name **categories**.

## Attributes

| # | Attribute Name | Type | Size | Notes |
|---|---|---|---|---|
| 1 | `title` | string | 255 | Category name (e.g. "SEO", "Digital Marketing") |
| 2 | `slug` | string | 255 | URL slug (e.g. "seo", "digital-marketing") |
| 3 | `description` | string | 1000 | Short description (optional) |
| 4 | `status` | string | 50 | `active` or `inactive` |
| 5 | `image` | string | 255 | Appwrite file ID of the category image (optional) |

## Steps in Appwrite Console

1. Go to **Databases → Your Database**
2. Click **Create Collection** → Name it **categories**
3. Click **Add Attribute** for each field above
4. Copy the Collection ID and add it to `.env.local`:
   ```
   NEXT_PUBLIC_CATEGORIES_COLLECTION_ID=your_categories_collection_id_here
   ```

> **Note:** If your categories collection was created before the `image` attribute existed, add a new **string (255)** attribute named `image` to the collection in the Appwrite console. Existing categories will simply have an empty image until one is uploaded via the admin edit form.

