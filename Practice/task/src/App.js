import React, { useState, useEffect } from 'react';

const ApiSearch = ({ posts }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ marginBottom: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px' }}>
      <h2>Search Posts</h2>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        style={{ padding: '8px', width: '100%', marginBottom: '10px' }}
      />
      <ul>
        {filteredPosts.map(post => (
          <li key={post.id} style={{ marginBottom: '4px' }}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

const AddForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (title.trim() !== '' && body.trim() !== '') {
      const newPost = {
        userId: 1,
        id: Date.now(),
        title,
        body,
      };

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newPost),
        });

        if (response.ok) {
          const data = await response.json();
          onAdd(data);
          setTitle('');
          setBody('');
        } else {
          console.error('Error adding post:', response.status);
        }
      } catch (error) {
        console.error('Error adding post:', error);
      }
    }
  };

  return (
    <div style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px' }}>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ padding: '8px', width: '100%', marginBottom: '10px' }}
        /> <br /> <br />
        <textarea
          placeholder="Body"
          value={body}
          onChange={e => setBody(e.target.value)}
          style={{ padding: '8px', width: '100%', height: '100px', marginBottom: '10px' }}
        /> <br /> <br />
        <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#007BFF', color: 'white', border: 'none', cursor: 'pointer' }}>Add Post</button>
      </form>
    </div>
  );
};

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleAddPost = newPost => {
    setPosts(prevPosts => [...prevPosts, newPost]);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h1>API Search and Add</h1>
      <ApiSearch posts={posts.slice(-10)} />
      <AddForm onAdd={handleAddPost} />
    </div>
  );
}

export default App;
