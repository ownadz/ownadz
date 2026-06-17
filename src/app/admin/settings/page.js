"use client";

import { useEffect, useState } from "react";

import {
  getSettings,
  createSettings,
  updateSettings,
} from "@/services/settingsService";

export default function SettingsPage() {

  const [docId, setDocId] =
    useState(null);

  const [form, setForm] =
    useState({
      siteName: "",
      phone: "",
      email: "",
      address: "",
      facebook: "",
      instagram: "",
      youtube: "",
      linkedin: "",
      twitter: "",
      footerText: "",
    });

  useEffect(() => {

    loadSettings();

  }, []);

  const loadSettings =
    async () => {

      try {

        const data =
          await getSettings();

        if (!data) return;

        setDocId(data.$id);

        setForm({
          siteName:
            data.siteName || "",

          phone:
            data.phone || "",

          email:
            data.email || "",

          address:
            data.address || "",

          facebook:
            data.facebook || "",

          instagram:
            data.instagram || "",

          youtube:
            data.youtube || "",

          linkedin:
            data.linkedin || "",

          twitter:
            data.twitter || "",

          footerText:
            data.footerText || "",
        });

      } catch (error) {

        console.error(error);

      }
    };

  const handleChange = (
    e
  ) => {

    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        if (docId) {

          await updateSettings(
            docId,
            form
          );

          alert(
            "Settings Updated"
          );

        } else {

          const created =
            await createSettings(
              form
            );

          setDocId(
            created.$id
          );

          alert(
            "Settings Saved"
          );
        }

      } catch (error) {

        console.error(error);

        alert(
          error.message
        );
      }
    };

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Website Settings
      </h1>

      <form
        onSubmit={handleSubmit}
      >

        <input
          name="siteName"
          placeholder="Site Name"
          value={form.siteName}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />

        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />

        <input
          name="facebook"
          placeholder="Facebook URL"
          value={form.facebook}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />

        <input
          name="instagram"
          placeholder="Instagram URL"
          value={form.instagram}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />

        <input
          name="youtube"
          placeholder="YouTube URL"
          value={form.youtube}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />

        <input
          name="linkedin"
          placeholder="LinkedIn URL"
          value={form.linkedin}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />

        <input
          name="twitter"
          placeholder="Twitter URL"
          value={form.twitter}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />

        <textarea
          name="footerText"
          placeholder="Footer Text"
          value={form.footerText}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />

        <button
          type="submit"
          className="bg-black text-white px-5 py-2 rounded"
        >
          Save Settings
        </button>

      </form>

    </div>
  );
}