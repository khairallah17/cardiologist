import React from 'react'
import Layout from '../layout/Layout'
import { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const Text = () => {

    const editor = useRef(null);
	const [content, setContent] = useState('');

  return (
    <Layout>
		<div className="text-editor w-3/4 h-full">
			<JoditEditor
				ref={editor}
				value={content}
				tabIndex={1}
				onBlur={newContent => setContent(newContent)}
				onChange={newContent => {}}
			/>
		</div>
    </Layout>
  )
}

export default Text