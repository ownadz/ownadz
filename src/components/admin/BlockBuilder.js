"use client";

import { useState } from "react";
import MediaLibraryPicker from "@/components/admin/MediaLibraryPicker";
import { uploadImage } from "@/services/storageService";
import {
  FaHeading,
  FaParagraph,
  FaImage,
  FaListUl,
  FaQuoteLeft,
  FaBullhorn,
  FaQuestionCircle,
  FaTable,
  FaCode,
  FaGripVertical,
  FaTrash,
  FaPlus,
  FaChevronDown,
  FaChevronUp,
  FaCopy,
  FaTimes,
  FaCheck,
} from "react-icons/fa";

// ============================================================
// Elementor / Gutenberg-style Block Builder
// Drag-and-drop block manager. Each block renders to real HTML
// tags (p, h1-h6, img, ul/ol, blockquote, table, etc).
// ============================================================

const BLOCK_TYPES = [
  { type: "paragraph", label: "Paragraph", icon: <FaParagraph />, desc: "A <p> paragraph block" },
  { type: "heading", label: "Heading", icon: <FaHeading />, desc: "H1 - H6 heading block" },
  { type: "image", label: "Image", icon: <FaImage />, desc: "Image with caption" },
  { type: "list", label: "List", icon: <FaListUl />, desc: "Bulleted or numbered list" },
  { type: "quote", label: "Quote", icon: <FaQuoteLeft />, desc: "Blockquote with author" },
  { type: "cta", label: "CTA", icon: <FaBullhorn />, desc: "Call-to-action box" },
  { type: "faq", label: "FAQ", icon: <FaQuestionCircle />, desc: "FAQ accordion items" },
  { type: "table", label: "Table", icon: <FaTable />, desc: "Data table" },
  { type: "html", label: "HTML", icon: <FaCode />, desc: "Custom HTML snippet" },
];

const DEFAULT_BLOCKS = {
  paragraph: { type: "paragraph", content: "<p>Write your paragraph content here...</p>" },
  heading: { type: "heading", level: 2, content: "New Heading" },
  image: { type: "image", src: "", alt: "", caption: "" },
  list: { type: "list", style: "unordered", items: ["List item 1", "List item 2"] },
  quote: { type: "quote", content: "Your quote goes here.", author: "Author Name" },
  cta: { type: "cta", title: "Ready to Grow?", description: "Short description", buttonText: "Contact Us", buttonLink: "/contact" },
  faq: { type: "faq", title: "Frequently Asked Questions", items: [{ question: "Question?", answer: "Answer." }] },
  table: { type: "table", headers: ["Column 1", "Column 2"], rows: [["Row 1", "Data"], ["Row 2", "Data"]] },
  html: { type: "html", content: "<div class='custom'>Custom HTML</div>" },
};

const BLOCK_ICONS = {
  paragraph: <FaParagraph />,
  heading: <FaHeading />,
  image: <FaImage />,
  list: <FaListUl />,
  quote: <FaQuoteLeft />,
  cta: <FaBullhorn />,
  faq: <FaQuestionCircle />,
  table: <FaTable />,
  html: <FaCode />,
};

export default function BlockBuilder({ value, onChange }) {
  const blocks = Array.isArray(value) ? value : [];

  const [dragIndex, setDragIndex] = useState(null);
  const [overIndex, setOverIndex] = useState(null);
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [uploading, setUploading] = useState(false);

  const updateBlocks = (next) => onChange(next);

  const addBlock = (type) => {
    const id = `block_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const block = { ...DEFAULT_BLOCKS[type], id };
    updateBlocks([...blocks, block]);
    setShowAddMenu(false);
    setEditingId(id);
  };

  const removeBlock = (id) => {
    updateBlocks(blocks.filter((b) => b.id !== id));
    if (editingId === id) setEditingId(null);
  };

  const duplicateBlock = (id) => {
    const idx = blocks.findIndex((b) => b.id === id);
    if (idx === -1) return;
    const copy = { ...blocks[idx], id: `block_${Date.now()}_${Math.random().toString(36).slice(2, 8)}` };
    const next = [...blocks];
    next.splice(idx + 1, 0, copy);
    updateBlocks(next);
  };

  const moveBlock = (from, to) => {
    if (from === to) return;
    const next = [...blocks];
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    updateBlocks(next);
  };

  const updateBlock = (id, patch) => {
    updateBlocks(blocks.map((b) => (b.id === id ? { ...b, ...patch } : b)));
  };

  const updateListItems = (id, items) => updateBlock(id, { items });

  const handleImageUpload = async (id, file) => {
    setUploading(true);
    try {
      const uploaded = await uploadImage(file);
      updateBlock(id, { src: uploaded.$id });
      alert("Image uploaded successfully");
    } catch (err) {
      alert(err.message);
    }
    setUploading(false);
  };

  const renderBlockEditor = (block, idx) => {
    switch (block.type) {
      case "paragraph":
        return (
          <textarea
            value={block.content || ""}
            onChange={(e) => updateBlock(block.id, { content: e.target.value })}
            rows={4}
            placeholder="<p>Paragraph content...</p>"
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
          />
        );
      case "heading":
        return (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <label className="text-xs font-bold text-slate-600">Heading level:</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5, 6].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => updateBlock(block.id, { level: lvl })}
                    className={`w-8 h-8 rounded-md text-xs font-bold transition-all ${
                      block.level === lvl ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    H{lvl}
                  </button>
                ))}
              </div>
            </div>
            <input
              type="text"
              value={block.content || ""}
              onChange={(e) => updateBlock(block.id, { content: e.target.value })}
              placeholder="Heading text"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
            />
            <p className="text-[11px] text-slate-400">
              Renders as{" "}
              <code className="bg-slate-100 px-1.5 py-0.5 rounded">
                {`<h${block.level || 2}>`}
              </code>
            </p>
          </div>
        );
      case "image":
        return (
          <div className="space-y-3">
            <MediaLibraryPicker
              label="Image block"
              modal={true}
              triggerLabel="Select image"
              value={block.src || ""}
              onChange={(fileId) => updateBlock(block.id, { src: fileId || "" })}
            />
            {block.src && (
              <img
                src={block.src.startsWith("http") ? block.src : `/api/storage/view/${block.src}`}
                alt={block.alt || ""}
                className="max-h-40 rounded-lg border border-slate-200"
              />
            )}
            <input
              type="text"
              value={block.alt || ""}
              onChange={(e) => updateBlock(block.id, { alt: e.target.value })}
              placeholder="Alt text (SEO)"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
            />
            <input
              type="text"
              value={block.caption || ""}
              onChange={(e) => updateBlock(block.id, { caption: e.target.value })}
              placeholder="Caption (optional)"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
            />
          </div>
        );
      case "list":
        return (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <label className="text-xs font-bold text-slate-600">Style:</label>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => updateBlock(block.id, { style: "unordered" })}
                  className={`px-3 py-1 rounded-md text-xs font-bold ${
                    block.style === "unordered" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <FaListUl className="inline mr-1" /> Unordered
                </button>
                <button
                  type="button"
                  onClick={() => updateBlock(block.id, { style: "ordered" })}
                  className={`px-3 py-1 rounded-md text-xs font-bold ${
                    block.style === "ordered" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  1. Ordered
                </button>
              </div>
            </div>
            <div className="space-y-2">
              {(block.items || []).map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => {
                      const items = [...block.items];
                      items[i] = e.target.value;
                      updateListItems(block.id, items);
                    }}
                    placeholder={`List item ${i + 1}`}
                    className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
                  />
                  <button
                    type="button"
                    onClick={() => updateListItems(block.id, block.items.filter((_, j) => j !== i))}
                    className="text-red-500 hover:text-red-700 p-1"
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => updateListItems(block.id, [...(block.items || []), ""])}
                className="text-xs font-bold text-[#ffbd59] hover:text-black flex items-center gap-1"
              >
                <FaPlus /> Add item
              </button>
            </div>
          </div>
        );
      case "quote":
        return (
          <div className="space-y-3">
            <textarea
              value={block.content || ""}
              onChange={(e) => updateBlock(block.id, { content: e.target.value })}
              rows={2}
              placeholder="Quote text"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
            />
            <input
              type="text"
              value={block.author || ""}
              onChange={(e) => updateBlock(block.id, { author: e.target.value })}
              placeholder="Quote author"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
            />
          </div>
        );
      case "cta":
        return (
          <div className="space-y-3">
            <input
              type="text"
              value={block.title || ""}
              onChange={(e) => updateBlock(block.id, { title: e.target.value })}
              placeholder="CTA Title"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
            />
            <textarea
              value={block.description || ""}
              onChange={(e) => updateBlock(block.id, { description: e.target.value })}
              rows={2}
              placeholder="CTA Description"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
            />
            <div className="flex gap-3">
              <input
                type="text"
                value={block.buttonText || ""}
                onChange={(e) => updateBlock(block.id, { buttonText: e.target.value })}
                placeholder="Button text"
                className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
              />
              <input
                type="text"
                value={block.buttonLink || ""}
                onChange={(e) => updateBlock(block.id, { buttonLink: e.target.value })}
                placeholder="/contact"
                className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
              />
            </div>
          </div>
        );
      case "faq":
        return (
          <div className="space-y-3">
            <input
              type="text"
              value={block.title || ""}
              onChange={(e) => updateBlock(block.id, { title: e.target.value })}
              placeholder="FAQ section heading"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
            />
            <div className="space-y-3">
              {(block.items || []).map((item, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-3 space-y-2 bg-slate-50">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={item.question || ""}
                      onChange={(e) => {
                        const items = [...block.items];
                        items[i] = { ...items[i], question: e.target.value };
                        updateBlock(block.id, { items });
                      }}
                      placeholder={`Question ${i + 1}`}
                      className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
                    />
                    <button
                      type="button"
                      onClick={() => updateBlock(block.id, { items: block.items.filter((_, j) => j !== i) })}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <FaTimes />
                    </button>
                  </div>
                  <textarea
                    value={item.answer || ""}
                    onChange={(e) => {
                      const items = [...block.items];
                      items[i] = { ...items[i], answer: e.target.value };
                      updateBlock(block.id, { items });
                    }}
                    rows={2}
                    placeholder="Answer"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() => updateBlock(block.id, { items: [...(block.items || []), { question: "", answer: "" }] })}
                className="text-xs font-bold text-[#ffbd59] hover:text-black flex items-center gap-1"
              >
                <FaPlus /> Add FAQ
              </button>
            </div>
          </div>
        );
      case "table":
        return (
          <div className="space-y-3">
            <div>
              <label className="text-xs font-bold text-slate-600 block mb-1">Headers</label>
              <div className="flex items-center gap-2">
                {(block.headers || []).map((h, i) => (
                  <input
                    key={i}
                    type="text"
                    value={h}
                    onChange={(e) => {
                      const headers = [...block.headers];
                      headers[i] = e.target.value;
                      updateBlock(block.id, { headers });
                    }}
                    placeholder={`Header ${i + 1}`}
                    className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
                  />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-600 block">Rows</label>
              {(block.rows || []).map((row, ri) => (
                <div key={ri} className="flex items-center gap-2">
                  {row.map((cell, ci) => (
                    <input
                      key={ci}
                      type="text"
                      value={cell}
                      onChange={(e) => {
                        const rows = block.rows.map((r) => [...r]);
                        rows[ri][ci] = e.target.value;
                        updateBlock(block.id, { rows });
                      }}
                      placeholder={`Row ${ri + 1}`}
                      className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
                    />
                  ))}
                  <button
                    type="button"
                    onClick={() => updateBlock(block.id, { rows: block.rows.filter((_, j) => j !== ri) })}
                    className="text-red-500 hover:text-red-700 p-1"
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => updateBlock(block.id, { rows: [...block.rows, block.headers.map(() => "")] })}
                className="text-xs font-bold text-[#ffbd59] hover:text-black flex items-center gap-1"
              >
                <FaPlus /> Add row
              </button>
            </div>
          </div>
        );
      case "html":
        return (
          <textarea
            value={block.content || ""}
            onChange={(e) => updateBlock(block.id, { content: e.target.value })}
            rows={5}
            placeholder="<div>Custom HTML</div>"
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex items-center justify-between bg-slate-900 text-white rounded-xl px-5 py-3.5">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#ffbd59] text-black flex items-center justify-center font-black">
            B
          </span>
          <div>
            <h3 className="font-bold leading-tight">Blocks</h3>
            <p className="text-xs text-slate-400">{blocks.length} blocks</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setShowAddMenu(!showAddMenu)}
          className="flex items-center gap-2 bg-[#ffbd59] text-black text-xs font-black px-4 py-2 rounded-lg hover:bg-white transition-all"
        >
          <FaPlus /> Add Block
        </button>
      </div>

      {/* Add block menu */}
      {showAddMenu && (
        <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-sm text-slate-900">Add a block</h4>
            <button type="button" onClick={() => setShowAddMenu(false)} className="text-slate-400 hover:text-slate-600">
              <FaTimes />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {BLOCK_TYPES.map((bt) => (
              <button
                key={bt.type}
                type="button"
                onClick={() => addBlock(bt.type)}
                className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 hover:border-[#ffbd59] hover:bg-[#ffbd59]/5 transition-all text-left group"
              >
                <span className="mt-0.5 w-9 h-9 rounded-lg bg-slate-100 group-hover:bg-[#ffbd59]/20 text-slate-700 group-hover:text-black flex items-center justify-center">
                  {bt.icon}
                </span>
                <span>
                  <span className="block text-sm font-bold text-slate-900">{bt.label}</span>
                  <span className="block text-xs text-slate-500 mt-0.5">{bt.desc}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Blocks list */}
      <div className="space-y-3">
        {blocks.length === 0 && (
          <div className="border-2 border-dashed border-slate-300 rounded-xl p-10 text-center">
            <p className="text-slate-500 text-sm font-medium">No blocks yet.</p>
            <p className="text-slate-400 text-xs mt-1">
              Click <span className="font-bold">Add Block</span> to start building your post content — just like
              Gutenberg / Elementor.
            </p>
          </div>
        )}

        {blocks.map((block, idx) => (
          <div
            key={block.id}
            draggable
            onDragStart={() => setDragIndex(idx)}
            onDragOver={(e) => {
              e.preventDefault();
              setOverIndex(idx);
            }}
            onDrop={() => {
              if (dragIndex !== null) moveBlock(dragIndex, idx);
              setDragIndex(null);
              setOverIndex(null);
            }}
            onDragEnd={() => {
              setDragIndex(null);
              setOverIndex(null);
            }}
            className={`bg-white border rounded-xl overflow-hidden shadow-sm transition-all ${
              overIndex === idx && dragIndex !== idx ? "border-[#ffbd59] ring-2 ring-[#ffbd59]/30" : "border-slate-200"
            }`}
          >
            {/* Block header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 border-b border-slate-200 cursor-grab active:cursor-grabbing">
              <div className="flex items-center gap-3">
                <FaGripVertical className="text-slate-400" />
                <span className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center justify-center">
                  {BLOCK_ICONS[block.type] || <FaParagraph />}
                </span>
                <span className="text-sm font-bold text-slate-900 capitalize">{block.type}</span>
                <span className="text-[11px] text-slate-400 font-mono bg-slate-100 px-2 py-0.5 rounded">
                  {idx + 1}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setEditingId(editingId === block.id ? null : block.id)}
                  className="p-2 text-slate-500 hover:text-black hover:bg-slate-100 rounded-lg"
                  title={editingId === block.id ? "Collapse" : "Expand"}
                >
                  {editingId === block.id ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                <button
                  type="button"
                  onClick={() => duplicateBlock(block.id)}
                  className="p-2 text-slate-500 hover:text-black hover:bg-slate-100 rounded-lg"
                  title="Duplicate"
                >
                  <FaCopy />
                </button>
                <button
                  type="button"
                  onClick={() => removeBlock(block.id)}
                  className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg"
                  title="Delete"
                >
                  <FaTrash />
                </button>
              </div>
            </div>

            {/* Block body */}
            {editingId === block.id && (
              <div className="p-4">{renderBlockEditor(block, idx)}</div>
            )}
          </div>
        ))}
      </div>

      {/* Add block footer button */}
      {blocks.length > 0 && (
        <button
          type="button"
          onClick={() => setShowAddMenu(!showAddMenu)}
          className="w-full border-2 border-dashed border-slate-300 rounded-xl py-3.5 text-sm font-bold text-slate-500 hover:border-[#ffbd59] hover:text-[#ffbd59] transition-all flex items-center justify-center gap-2"
        >
          <FaPlus /> Add block
        </button>
      )}
    </div>
  );
}

