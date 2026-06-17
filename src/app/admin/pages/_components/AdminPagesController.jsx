"use client";

import { useState } from "react";
import Link from "next/link";

import DeletePageButton from "@/components/admin/DeletePageButton";
import DeleteServiceButton from "@/components/admin/DeleteServiceButton";
import DeletePostButton from "@/components/admin/DeletePostButton.jsx";
import DeleteMainPageButton from "@/components/admin/DeleteMainPageButton";

const getPageUrl = (slug) =>
  ["about", "contact", "home"].includes(slug)
    ? `/${slug}`
    : `/pages/${slug}`;
const getDocumentId = (doc) => doc?.$id || doc?.id || "";

export default function AdminPagesController({
  homepage,
  homepageFaqs,
  mainPagesResponse,
  pagesResponse,
  servicesResponse,
  postsResponse,
}) {
  const [tab, setTab] = useState("allPages");

  const tabs = [
    { key: "allPages", label: "All Pages" },
    { key: "mainPages", label: "Main Pages" },
    { key: "services", label: "Services" },
    { key: "posts", label: "Posts" },
  ];


  const [allPagesSubTab, setAllPagesSubTab] = useState("pages");
  const [pagesSortOrder, setPagesSortOrder] = useState("asc");

  const renderMainPages = () => {
    const mainPages = mainPagesResponse || [];

    return (
      <div className="p-6">
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-bold">Main Pages</h1>
          <Link
            href="/admin/pages/main-pages/create"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Create Main Page
          </Link>
        </div>

        {mainPages.length === 0 ? (
          <div className="text-center py-8 text-gray-600">
            <p>No main pages created yet.</p>
          </div>
        ) : (
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Title</th>
                <th className="border p-3 text-left">Slug</th>
                <th className="border p-3 text-left">URL</th>
                <th className="border p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mainPages.map((page) => (
                <tr key={getDocumentId(page)}>
                  <td className="border p-3">{page.title}</td>
                  <td className="border p-3">
                    <code className="bg-gray-100 px-2 py-1 rounded">{page.slug}</code>
                  </td>
                  <td className="border p-3">
                    <code className="bg-gray-100 px-2 py-1 rounded">/{page.slug}</code>
                  </td>
                  <td className="border p-3">
                    <div className="flex gap-2 justify-center">
                      <a
                        href={`/${page.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm"
                      >
                        View
                      </a>

                      <Link
                        href={`/admin/pages/main-pages/edit/${getDocumentId(page)}`}
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                      >
                        Edit
                      </Link>

                      <DeleteMainPageButton id={getDocumentId(page)} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  };

  const renderAllPages = () => {
    const pagesDocs = pagesResponse?.documents || [];
    const postsDocs = postsResponse?.documents || [];

    const allPageItems = [
      ...(mainPagesResponse || []).map((page) => ({
        ...page,
        pageType: "Main Page",
      })),
      ...(servicesResponse?.documents || []).map((service) => ({
        ...service,
        pageType: "Service",
      })),
      ...(pagesResponse?.documents || []).map((page) => ({
        ...page,
        pageType: "Page",
      })),
    ]
      .slice()
      .sort((a, b) => {
        const titleA = (a.title || "").toLowerCase();
        const titleB = (b.title || "").toLowerCase();

        if (titleA < titleB) return pagesSortOrder === "asc" ? -1 : 1;
        if (titleA > titleB) return pagesSortOrder === "asc" ? 1 : -1;
        return 0;
      });

    const renderPagesTable = () => (
      <div className="p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold">Pages</h1>
            <p className="text-sm text-gray-500">
              Showing Main Pages, Service Pages, and regular Pages together.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Sort by title:</span>
            <button
              type="button"
              onClick={() => setPagesSortOrder("asc")}
              className={
                pagesSortOrder === "asc"
                  ? "bg-black text-white px-3 py-1 rounded"
                  : "bg-gray-100 text-black px-3 py-1 rounded hover:bg-gray-200"
              }
            >
              Ascending
            </button>
            <button
              type="button"
              onClick={() => setPagesSortOrder("desc")}
              className={
                pagesSortOrder === "desc"
                  ? "bg-black text-white px-3 py-1 rounded"
                  : "bg-gray-100 text-black px-3 py-1 rounded hover:bg-gray-200"
              }
            >
              Descending
            </button>
          </div>
        </div>

        <table className="w-full border">
          <thead>
            <tr>
              <th className="border p-3">Title</th>
              <th className="border p-3">Slug</th>
              <th className="border p-3">Type</th>
              <th className="border p-3">Status</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allPageItems.map((page) => {
              const id = getDocumentId(page);
              const isService = page.pageType === "Service";
              const isMainPage = page.pageType === "Main Page";

              return (
                <tr key={`${page.pageType}-${id}`}> 
                  <td className="border p-3">{page.title}</td>
                  <td className="border p-3">{page.slug}</td>
                  <td className="border p-3">{page.pageType}</td>
                  <td className="border p-3">{page.status}</td>
                  <td className="border p-3">
                    <div className="flex gap-2 flex-wrap">
                      <a
                        href={
                          isService
                            ? `/services/${page.slug}`
                            : isMainPage
                            ? `/${page.slug}`
                            : getPageUrl(page.slug)
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 text-white px-3 py-1 rounded"
                      >
                        View
                      </a>

                      <Link
                        href={
                          isService
                            ? `/admin/services/edit/${id}`
                            : isMainPage
                            ? `/admin/pages/main-pages/edit/${id}`
                            : `/admin/pages/edit/${id}`
                        }
                        className="bg-blue-600 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </Link>

                      {isService ? (
                        <DeleteServiceButton id={id} />
                      ) : isMainPage ? (
                        <DeleteMainPageButton id={id} />
                      ) : (
                        <DeletePageButton id={id} />
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );

    const renderBlogsTable = () => (
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Blogs</h1>
          <Link
            href="/admin/posts/create"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Create Blog
          </Link>
        </div>

        <div className="space-y-4">
          {postsDocs.map((post) => (
            <div key={post.$id} className="border p-4 rounded">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-lg">{post.title}</h3>
                  <p className="text-sm text-gray-600">{post.slug}</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    View
                  </a>
                  <Link
                    href={`/admin/posts/edit/${post.$id}`}
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    return (
      <div>
        <div className="px-6 pt-4">
          <h1 className="text-4xl font-bold mb-4">All Pages</h1>

          <div className="flex gap-2 flex-wrap mb-4">
            <button
              type="button"
              onClick={() => setAllPagesSubTab("pages")}
              className={
                allPagesSubTab === "pages"
                  ? "bg-black text-white px-4 py-2 rounded"
                  : "bg-gray-100 text-black px-4 py-2 rounded hover:bg-gray-200"
              }
            >
              Page
            </button>

            <button
              type="button"
              onClick={() => setAllPagesSubTab("blogs")}
              className={
                allPagesSubTab === "blogs"
                  ? "bg-black text-white px-4 py-2 rounded"
                  : "bg-gray-100 text-black px-4 py-2 rounded hover:bg-gray-200"
              }
            >
              Blogs
            </button>
          </div>
        </div>

        {allPagesSubTab === "pages" && renderPagesTable()}
        {allPagesSubTab === "blogs" && renderBlogsTable()}
      </div>
    );
  };



  const renderPages = () => {
    const docs = pagesResponse?.documents || [];

    return (
      <div className="p-6">
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-bold">Main Pages</h1>
          <Link
            href="/admin/pages/create"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Add Page
          </Link>
        </div>

        <table className="w-full border">
          <thead>
            <tr>
              <th className="border p-3">Title</th>
              <th className="border p-3">Slug</th>
              <th className="border p-3">Status</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {docs.map((page) => (
              <tr key={getDocumentId(page)}>
                <td className="border p-3">{page.title}</td>
                <td className="border p-3">{page.slug}</td>
                <td className="border p-3">{page.status}</td>

                <td className="border p-3">
                  <div className="flex gap-2">
                    <a
                      href={getPageUrl(page.slug)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      View
                    </a>

                    <Link
                      href={`/admin/pages/edit/${getDocumentId(page)}`}
                      className="bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </Link>

                    <DeletePageButton id={getDocumentId(page)} />

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderServices = () => {
    const docs = servicesResponse?.documents || [];

    return (
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Services</h1>
          <Link
            href="/admin/services/create"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Create Service
          </Link>
        </div>

        <table className="w-full border border-gray-300">
          <thead>
            <tr>
              <th className="border p-3 text-left">Title</th>
              <th className="border p-3 text-left">Slug</th>
              <th className="border p-3 text-left">Status</th>
              <th className="border p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {docs.map((service) => (
              <tr key={service.$id}>
                <td className="border p-3">{service.title}</td>
                <td className="border p-3">{service.slug}</td>
                <td className="border p-3">{service.status}</td>
                <td className="border p-3">
                  <div className="flex gap-2 justify-center">
                    <a
                      href={`/services/${service.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      View
                    </a>

                    <Link
                      href={`/admin/services/edit/${service.$id}`}
                      className="bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </Link>
                    <DeleteServiceButton id={service.$id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderPosts = () => {
    const docs = postsResponse?.documents || [];

    return (
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Posts</h1>
          <Link
            href="/admin/posts/create"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Create Post
          </Link>
        </div>

        <div className="space-y-4">
          {docs.map((post) => (
            <div key={post.$id} className="border p-4 rounded">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-lg">{post.title}</h3>
                  <p className="text-sm text-gray-600">{post.slug}</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    View
                  </a>
                  <Link
                    href={`/admin/posts/edit/${post.$id}`}
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </Link>
                  <DeletePostButton id={post.$id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="px-6 pt-4">
        <h1 className="text-4xl font-bold mb-4">Admin Controller</h1>

        <div className="flex gap-2 flex-wrap mb-4">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className={
                tab === t.key
                  ? "bg-black text-white px-4 py-2 rounded"
                  : "bg-gray-100 text-black px-4 py-2 rounded hover:bg-gray-200"
              }
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="border-t pt-4">
          {tab === "allPages" && renderAllPages()}

          {tab === "mainPages" && renderMainPages()}

          {tab === "services" && renderServices()}
          {tab === "posts" && renderPosts()}
        </div>
      </div>
    </div>
  );
}

