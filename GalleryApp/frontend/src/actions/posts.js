import * as api from "../api";

// action creators

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: 'START_LOADING' });
    const { data } = await api.fetchGallery();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const createPost = (newPost) => async (dispatch) => {
  try {
    await api.createPost(newPost);
    dispatch(getPosts());
  } catch (error) {
    console.error("Error creating post:", error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch(getPosts()); // force refresh list
    // or remove the reducer `DELETE` case temporarily to test
  } catch (error) {
    console.log("Delete error:", error);
  }
};