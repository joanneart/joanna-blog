const getAllArticles = async () => fetch(`/.netlify/functions/getAllArticles`)
.then(response => response.json());

const getAllComments = async () => fetch(`/.netlify/functions/getAllComments`)
.then(response => response.json());

const createComment = async (comment) => fetch('/.netlify/functions/createComment', {
    body: JSON.stringify(comment),
    method: 'POST'
  })
.then(response => response.json());

const updateComment = async (comment, id) => fetch(`/.netlify/functions/updateComment/${id}`, {
  body: JSON.stringify(comment),
  method: 'POST'
})
.then(response => response.json());

export { getAllArticles, createComment, getAllComments, updateComment }

