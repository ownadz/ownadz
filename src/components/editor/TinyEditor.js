"use client";

import { Editor } from "@tinymce/tinymce-react";

export default function TinyEditor({
  value,
  onEditorChange,
}) {
  return (
    <Editor
      apiKey="5m6a0ju13rnpit5kpnzypqx4mc852zucr3lpqrwx9tjnv84n"
      value={value}
      onEditorChange={onEditorChange}
      init={{
        height: 500,
        menubar: true,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
        ],
        toolbar:
          "undo redo | blocks | bold italic | alignleft aligncenter alignright | bullist numlist | link image | code",
      }}
    />
  );
}