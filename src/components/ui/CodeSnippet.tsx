import React from "react";
import { Compare } from './CodeComparison';

const cleanCode = `import React, { useState, useEffect } from 'react';
import axios from 'axios';


  //Fetches and displays a list of posts.
function PostsList() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  // Fetch data from API on component mount
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        setError('Failed to load posts');
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="p-4 mb-4 border border-gray-300 rounded-lg">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsList;`;

const messyCode = `import React from 'react';
import axios from 'axios';



function a() {
    const [b, c] = React.useState([]);
    React.useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((d) => {c(d.data);}).catch((e) => {console.log(e);});
    }, []);    return (
        <div className="bg-gray-100">
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Posts</h1>
        <ul>
        {b.map((f) => (
        <li key={f.id} className="p-2 mb-2 border border-gray-300">
        <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>{f.title}</h2>
        <p>{f.body}</p>
        </li>
        ))}
        </ul></div>
    );
}




export default a;`;

// Minimal JSX highlighter using the site's palette
const TOKEN =
  /(\/\/.*$)|('[^']*'|"[^"]*")|(<\/?[a-zA-Z]\w*>?|\/?>)|\b(import|from|function|const|return|export|default|null)\b|\b([a-zA-Z_]\w*)(?=\()|\b([a-zA-Z_]\w*)(?==)/gm;
const COLORS = [
  "text-white/30 italic", // comment
  "text-cyan-300", // string
  "text-pink-300", // jsx tag
  "text-violet-400", // keyword
  "text-sky-300", // function call
  "text-amber-200/90", // jsx attribute
];

function highlight(code: string) {
  const out: React.ReactNode[] = [];
  let last = 0;
  for (const m of Array.from(code.matchAll(TOKEN))) {
    const i = m.index ?? 0;
    if (i > last) out.push(code.slice(last, i));
    const group = m.slice(1).findIndex((g) => g !== undefined);
    out.push(
      <span key={i} className={COLORS[group]}>
        {m[0]}
      </span>
    );
    last = i + m[0].length;
  }
  out.push(code.slice(last));
  return out;
}

function CodeWindow({
  file,
  code,
  label,
  tone,
}: {
  file: string;
  code: string;
  label: string;
  tone: "good" | "bad";
}) {
  return (
    <div className="relative flex h-full w-full flex-col bg-[#0b0b0f]">
      <div className="flex items-center gap-4 border-b border-white/[0.06] bg-white/[0.02] px-4">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <span className="border-x border-white/[0.06] bg-background px-4 py-2.5 font-mono text-[11px] text-white/70">
          {file}
        </span>
      </div>
      <pre className="flex-1 overflow-hidden p-5 font-mono text-[10px] leading-[1.7] text-white/75 md:text-[11.5px]">
        <code>{highlight(code)}</code>
      </pre>
      <span
        className={
          "absolute bottom-4 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] backdrop-blur " +
          (tone === "good"
            ? "left-4 border-violet-400/30 bg-violet-500/10 text-violet-200"
            : "right-4 border-white/10 bg-white/[0.04] text-white/50")
        }
      >
        {label}
      </span>
    </div>
  );
}

export default function CodeSnippet() {
    return (
      <div className="w-full flex-1 min-h-[24rem] md:min-h-0 rounded-xl overflow-hidden border border-white/[0.06] flex">
        <Compare
          firstContent={<CodeWindow file="PostsList.jsx" code={cleanCode} label="Clean" tone="good" />}
          secondContent={<CodeWindow file="Component5.jsx" code={messyCode} label="Messy" tone="bad" />}
          className="h-full w-full"
          slideMode="hover"
        />
      </div>
    );
  }
