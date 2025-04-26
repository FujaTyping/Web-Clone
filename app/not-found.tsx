"use client"

import React, { useState } from 'react'
import { LuFolderSearch } from 'react-icons/lu';

function Notfound() {
  const [folderName, setFolderName] = useState('');

  const handleView = () => {
    if (!folderName.trim()) return;
    const url = `/Web-Clone/${folderName}`;
    window.open(url, '_self');
  };

  return (
    <>
      <main className='flex flex-col items-center justify-center h-screen'>
        <h1 className="text-3xl font-bold mb-4 flex items-center gap-4"><LuFolderSearch /> Web Clone Explorer</h1>
        <p className="mb-2">
          To see more folders and pages, visit the GitHub repository:
        </p>
        <a
          href="https://github.com/FujaTyping/Web-Clone/tree/main/app"
          target="_blank"
          className="text-blue-600 underline mb-6"
          rel="noopener noreferrer"
        >
          github.com/FujaTyping/Web-Clone/tree/main/app
        </a>

        <div className='flex items-end gap-4'>
          <div>
            <label htmlFor="folder" className="block mb-1 text-sm font-medium">
              Enter folder name to view:
            </label>
            <input
              id="folder"
              type="text"
              placeholder="e.g. clause"
              value={folderName}
              onChange={e => setFolderName(e.target.value)}
              className="border px-3 py-2 rounded shadow-sm text-sm w-64"
            />
          </div>
          <button
            onClick={handleView}
            className="mt-2 bg-neutral-900 text-white px-4 py-2 rounded transition cursor-pointer"
          >
            Open Page
          </button>
        </div>
      </main>
    </>
  )
}

export default Notfound