const createNote = async (title, content) => {
  const data = {
    title,
    content,
  };

  const response = await fetch(`${process.env.REACT_APP_API_URL}/notes/`, {
    method: 'POST',
    headers: {
      Authorization: `jwt ${process.env.REACT_APP_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(
    (res) => {
      if (res.status === 201) {
        return res.json();
      } else {
        return Promise.reject(res.text());
      }
    },
    (error) => Promise.reject(error.text())
  );

  return response;
};

const getNotes = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/notes/`, {
    method: 'GET',
    headers: {
      Authorization: `jwt ${process.env.REACT_APP_TOKEN}`,
    },
  }).then(
    (res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return Promise.reject(res.text());
      }
    },
    (error) => Promise.reject(error.text())
  );

  return response;
};

const deleteNote = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/notes/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `jwt ${process.env.REACT_APP_TOKEN}`,
    },
  }).then(
    (res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return Promise.reject(res.text());
      }
    },
    (error) => Promise.reject(error.text())
  );

  return response;
};

export const NotesServices = {
  createNote,
  getNotes,
  deleteNote,
};
